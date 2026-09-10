const siteHost = (() => {
	try {
		return new URL(import.meta.env.VITE_SITE_URL).hostname;
	} catch {
		return '';
	}
})();

/**
 * Un lien est considéré externe s'il est absolu et pointe vers un autre domaine
 * que le site (les sous-domaines type www. ou preprod. restent internes).
 * Les liens relatifs, ancres, mailto: et tel: sont donc internes.
 */
export function isExternalLink(href: string | undefined | null): boolean {
	if (!href || !/^(https?:)?\/\//i.test(href)) return false;

	try {
		const { hostname } = new URL(href, `https://${siteHost || 'localhost'}`);
		return hostname !== siteHost && !hostname.endsWith(`.${siteHost}`);
	} catch {
		return false;
	}
}

/**
 * Même traitement pour les champs rendus via {@html} (ex : les citations),
 * que les renderers markdown ne traversent pas.
 */
export function withExternalLinks(html: string | undefined | null): string {
	if (!html) return '';

	return html.replace(/<a\s([^>]*)>/gi, (tag, attributes: string) => {
		const href = attributes.match(/href\s*=\s*["']([^"']*)["']/i)?.[1];
		if (!isExternalLink(href)) return tag;

		let updated = attributes.trimEnd();
		if (!/\btarget\s*=/i.test(updated)) updated += ' target="_blank"';
		if (!/\brel\s*=/i.test(updated)) updated += ' rel="noopener"';
		return `<a ${updated}>`;
	});
}
