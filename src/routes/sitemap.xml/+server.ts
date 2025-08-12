/** @type {import('./$types').RequestHandler} */
export async function GET({ setHeaders }) {
	const siteURL = import.meta.env.VITE_SITE_URL

	setHeaders({
		'Content-Type': 'application/xml'
	});

	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
	<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		<sitemap>
			<loc>${siteURL}/sitemap-articles.xml</loc>
		</sitemap>
		<sitemap>
			<loc>${siteURL}/sitemap-categories.xml</loc>
		</sitemap>
		<sitemap>
			<loc>${siteURL}/sitemap-cas-agence.xml</loc>
		</sitemap>
		<sitemap>
			<loc>${siteURL}/sitemap-jobs.xml</loc>
		</sitemap>
		<sitemap>
			<loc>${siteURL}/sitemap-pages.xml</loc>
		</sitemap>
		<sitemap>
			<loc>${siteURL}/sitemap-agences.xml</loc>
		</sitemap>
	</sitemapindex>`;
	return new Response(sitemap);
}