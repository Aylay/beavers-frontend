/** @type {import('./$types').RequestHandler} */
export async function GET({ setHeaders }) {
	const siteURL = import.meta.env.VITE_SITE_URL
	
	setHeaders({
		'Content-Type': 'application/xml'
	});
	
	const pages = ['cas-agence', 'contactez-nous', 'jobs', 'l-agence-beavers', 'la-pause-cafe', 'mentions-legales', 'politique-rgpd', 'production-digitale', 'marketing-digital', 'marketing-digital/google-ads', 'marketing-digital/social-ads', 'production-digitale/seo-referencement-naturel', 'production-digitale/creation-refonte-site-internet', 'programme-rse'];
	
	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
      <url>
        <loc>${siteURL}</loc>
      </url>
      ${pages
				.map(
					(page) => `
			<url>
				<loc>${siteURL}/${page}</loc>
			</url>
			`
				)
				.join('')}
    </urlset>`;
	return new Response(sitemap);
}