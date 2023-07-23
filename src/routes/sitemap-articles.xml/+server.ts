/** @type {import('./$types').RequestHandler} */
export async function GET({ fetch, setHeaders }) {
	const siteURL = import.meta.env.VITE_SITE_URL

	setHeaders({
		'Content-Type': 'application/xml'
	});

	const articlesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/articles?sort=updatedAt%3Adesc&pagination[pageSize]=100&fields[0]=slug&populate[category][fields][0]=slug', {
		method: 'GET'
	})
	const articlesData = await articlesResponse.json();

	const articlesSlug: any[] = [];
	for (const useCase of articlesData.data) {
		articlesSlug.push(useCase.attributes.category.data.attributes.slug + '/' + useCase.attributes.slug);
	}
	
	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
		${articlesSlug
			.map(
				(slug) => `
		<url>
			<loc>${siteURL}/la-pause-cafe/${slug}</loc>
		</url>
		`
			)
			.join('')}
    </urlset>`;
	return new Response(sitemap);
}