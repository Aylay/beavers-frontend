/** @type {import('./$types').RequestHandler} */
export async function GET({ fetch, setHeaders }) {
	const siteURL = import.meta.env.VITE_SITE_URL

	setHeaders({
		'Content-Type': 'application/xml'
	});

	const jobsResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/jobs?pagination[pageSize]=100', {
		method: 'GET'
	})
	const jobsData = await jobsResponse.json();

	const jobsSlug: any[] = [];
	for (const useCase of jobsData.data) {
		jobsSlug.push(useCase.attributes.slug);
	}
	
	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
		${jobsSlug
			.map(
				(slug) => `
		<url>
			<loc>${siteURL}/jobs/${slug}</loc>
		</url>
		`
			)
			.join('')}
    </urlset>`;
	return new Response(sitemap);
}