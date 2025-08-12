/** @type {import('./$types').RequestHandler} */
export async function GET({ fetch, setHeaders }) {
	const siteURL = import.meta.env.VITE_SITE_URL

	setHeaders({
		'Content-Type': 'application/xml'
	});

	const useCasesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/use-cases?pagination[pageSize]=100&filters[publishedAt][$notNull]=true', {
		method: 'GET'
	})
	const useCasesData = await useCasesResponse.json();

	const useCasesSlug: any[] = [];
	for (const useCase of useCasesData.data) {
		const elm = {
			slug: useCase.attributes.slug,
			date: useCase.attributes.updatedAt
		}
		useCasesSlug.push(elm);
	}
	
	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
		${useCasesSlug
			.map(
				(useCase) => `
		<url>
			<loc>${siteURL}/cas/${useCase.slug}</loc>
			<lastmod>${useCase.date}</lastmod>
			</url>
		`
			)
			.join('')}
    </urlset>`;
	return new Response(sitemap);
}