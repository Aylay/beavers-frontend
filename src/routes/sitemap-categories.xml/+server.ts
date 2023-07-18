/** @type {import('./$types').RequestHandler} */
export async function GET({ setHeaders }) {
	const siteURL = import.meta.env.VITE_SITE_URL
	
	setHeaders({
		'Content-Type': 'application/xml'
	});
	
	const pages = ['la-pause-cafe/site-internet', 'la-pause-cafe/media', 'la-pause-cafe/seo'];
	
	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
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