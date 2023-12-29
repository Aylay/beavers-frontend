import { error } from '@sveltejs/kit';

import type { PageData } from './$types';
export const prerender = true;

export const load = (async ({ fetch, params }) => {
	const articleResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/articles/' + params.slug + '?populate[meta][fields][0]=title&populate[meta][fields][1]=description&populate[meta][populate][ogImage][fields][0]=url&populate[meta][populate][ogImage][fields][1]=width&populate[meta][populate][ogImage][fields][2]=height&populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText&populate[words][fields][0]=text&populate[author][fields][0]=name&populate[author][fields][1]=url&populate[author][fields][2]=job&populate[author][fields][3]=text&populate[author][populate][img][fields][0]=url&populate[author][populate][img][fields][1]=alternativeText&populate[category][fields][0]=slug&populate[category][fields][1]=title&populate[contentManager][fields][0]=layout&populate[contentManager][fields][1]=text1&populate[contentManager][fields][2]=text2&populate[contentManager][fields][3]=iframe&populate[contentManager][fields][4]=legend&populate[contentManager][populate][img][fields][0]=formats&populate[contentManager][populate][img][fields][1]=url&populate[contentManager][populate][img][fields][2]=alternativeText&populate[contentManager][fields][5]=citation', {
		method: 'GET'
	})
	const articleData = await articleResponse.json();
	let content: any;
	let otherArticles: any;
	
	if (articleData.data) {
		content = articleData.data

		const articlesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/articles?filters[category][slug][$eq]=' + content.attributes.category.data.attributes.slug + '&filters[id][$ne]=' + content.id + '&filters[publishedAt][$notNull]=true&pagination[pageSize]=100&fields[0]=slug&fields[1]=date&fields[2]=publishedAt&fields[3]=title&fields[4]=excerpt&populate[category][fields][0]=slug&populate[category][fields][1]=title&populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText', {
			method: 'GET'
		})
		const articlesData = await articlesResponse.json();
		
		if (articlesData.data) {
			otherArticles = articlesData.data
		}
		
	} else {
		throw error(404, 'Not found');
	}
	
	const isArticle = true;
	const menuDark = true;
	return {
		isArticle,
		menuDark,
		content,
		otherArticles
	};
}) satisfies PageData;

