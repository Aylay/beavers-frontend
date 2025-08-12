/** @type {import('./$types').RequestHandler} */
export async function GET({ fetch, setHeaders }) {
	const siteURL = import.meta.env.VITE_SITE_URL

	setHeaders({
		'Content-Type': 'application/xml'
	});

	const agencesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/agences?sort=updatedAt%3Adesc&pagination[pageSize]=100&fields[0]=slug&fields[1]=updatedAt', {
		method: 'GET'
	})
	const agencesData = await agencesResponse.json();

	const agencesSlug: any[] = [];
	for (const agence of agencesData.data) {
		const elm = {
			slug: agence.attributes.slug,
			date: agence.attributes.updatedAt
		}
		agencesSlug.push(elm);
	}
	
	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
		${agencesSlug
			.map(
				(agence) => `
		<url>
			<loc>${siteURL}/l-agence-beavers/${agence.slug}</loc>
			<lastmod>${agence.date}</lastmod>
		</url>
		`
			)
			.join('')}
    </urlset>`;
	return new Response(sitemap);
}