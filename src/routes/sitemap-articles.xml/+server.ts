/** @type {import('./$types').RequestHandler} */
export async function GET({ fetch, setHeaders }) {
	const siteURL = import.meta.env.VITE_SITE_URL

	setHeaders({
		'Content-Type': 'application/xml'
	});

	const articlesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/articles?sort=updatedAt%3Adesc&pagination[pageSize]=100&fields[0]=slug&fields[1]=updatedAt&populate[category][fields][0]=slug', {
		method: 'GET'
	})
	const articlesData = await articlesResponse.json();

	const articlesSlug: any[] = [];
	for (const article of articlesData.data) {
		const elm = {
			slug: article.attributes.category.data.attributes.slug + '/' + article.attributes.slug,
			date: article.attributes.updatedAt
		}
		articlesSlug.push(elm);
	}
	
	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
		${articlesSlug
			.map(
				(article) => `
		<url>
			<loc>${siteURL}/la-pause-cafe/${article.slug}</loc>
			<lastmod>${article.date}</lastmod>
		</url>
		`
			)
			.join('')}
    </urlset>`;
	return new Response(sitemap);
}