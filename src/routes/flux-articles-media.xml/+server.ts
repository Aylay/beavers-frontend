import { DateTime } from "luxon";

/** @type {import('./$types').RequestHandler} */
export async function GET({ fetch, setHeaders }) {
	setHeaders({
		'Content-Type': 'application/xml'
	});

	const currentDate = new Date();
	const actualPage = 'media';
	const strapiURL = import.meta.env.VITE_STRAPI_URL;
	const siteURL = import.meta.env.VITE_SITE_URL;

	const catResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/categories/' + actualPage + '?fields[0]=slug&fields[1]=title&populate[meta][fields][0]=title&populate[meta][fields][1]=description&populate[meta][populate][ogImage][fields][0]=url&populate[meta][populate][ogImage][fields][1]=width&populate[meta][populate][ogImage][fields][2]=height', {
		method: 'GET'
	})
	const catData = await catResponse.json();
	const content = catData.data.attributes;

	const articlesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/articles?filters[category][slug][$eq]=' + actualPage + '&filters[publishedAt][$notNull]=true&sort=publishedAt%3Adesc&pagination[pageSize]=15&fields[0]=slug&fields[1]=publishedAt&populate[category][fields][0]=slug&populate[category][fields][1]=title&fields[2]=title&fields[3]=excerpt&populate[author][fields][0]=name&populate[meta][populate][ogImage][fields][0]=url&populate[meta][populate][ogImage][fields][1]=mime&populate[meta][populate][ogImage][fields][2]=size', {
		method: 'GET'
	})
	const articlesData = await articlesResponse.json();

	const articlesSlug: any[] = [];
	for (const article of articlesData.data) {
		const elm = {
			slug: article.attributes.category.data.attributes.slug + '/' + article.attributes.slug,
			pubDate: DateTime.fromISO(article.attributes.publishedAt).toRFC2822(),
			title: article.attributes.title,
			description: article.attributes.excerpt,
			author: article.attributes.author.data.attributes.name,
			category: article.attributes.category.data.attributes.title,
			image: article.attributes.meta.ogImage.data.attributes.url,
			imageMime: article.attributes.meta.ogImage.data.attributes.mime,
			imageLength: article.attributes.meta.ogImage.data.attributes.size
		}
		articlesSlug.push(elm);
	}
	
	const rssFlux = `<?xml version="1.0" encoding="UTF-8" ?>
		<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:media="http://search.yahoo.com/mrss/" >
			<channel>
				<title>${content.meta.title}</title>
				<description>${content.meta.description}</description>
				<link>${siteURL}/la-pause-cafe/${content.slug}</link>
				<language>fr</language>
				<copyright>© 2019 - ${currentDate.getFullYear()} Tous droits réservés par Beavers</copyright>
				<lastBuildDate>${articlesSlug[0].pubDate}</lastBuildDate>
				<category>${content.title}</category>
				<atom:link href="${siteURL}/flux-articles-${content.slug}.xml" rel="self" type="application/rss+xml"/>
				<image>
					<url>${strapiURL}${content.meta.ogImage.data.attributes.url}</url>
					<title>${content.meta.title}</title>
					<link>${siteURL}/la-pause-cafe/${content.slug}</link>
				</image>
				${articlesSlug
					.map(
						(article) => `
				<item>
					<title>${article.title}</title>
					<link>${siteURL}/la-pause-cafe/${article.slug}</link>
					<description>${article.description}</description>
					<dc:creator>${article.author}</dc:creator>
					<category>${article.category}</category>
					<enclosure url="${strapiURL}${article.image}" type="${article.imageMime}" length="${Math.ceil(article.imageLength)}"></enclosure>
					<guid isPermaLink="true">${siteURL}/la-pause-cafe/${article.slug}</guid>
					<pubDate>${article.pubDate}</pubDate>
					<source url="${siteURL}/flux-articles-${content.slug}.xml">${content.meta.title}</source>
					<media:content medium="image" url="${strapiURL}${article.image}"/>
				</item>
				`
					)
					.join('')}
			</channel>
		</rss>
		`;
	return new Response(rssFlux);
}