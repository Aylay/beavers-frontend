import { error } from '@sveltejs/kit';

import type { PageData } from './$types';
export const prerender = true;

export const load = (async ({ fetch, params }) => {
	const catResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/categories/' + params.slug + '?fields[0]=slug&fields[1]=title&fields[2]=subTitle&fields[3]=intro&populate[words][fields][0]=text&populate[meta][fields][0]=title&populate[meta][fields][1]=description&populate[meta][populate][ogImage][fields][0]=url&populate[meta][populate][ogImage][fields][1]=width&populate[meta][populate][ogImage][fields][2]=height', {
		method: 'GET'
	})
	const catData = await catResponse.json();
	let content: any;
	
	if (catData.data) {
    content = catData.data
	} else {
		throw error(404, 'Not found');
	}

	const articlesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/articles?filters[category][slug][$eq]=' + params.slug + '&filters[publishedAt][$notNull]=true&sort=publishedAt%3desc&pagination[pageSize]=100&fields[0]=slug&fields[1]=date&fields[2]=publishedAt&fields[3]=title&fields[4]=excerpt&populate[category][fields][0]=slug&populate[category][fields][1]=title&populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText', {
		method: 'GET'
	})
	const articlesData = await articlesResponse.json();
	let articlesList: any;
	
	if (articlesData.data) {
    articlesList = articlesData.data
	} else {
		throw error(404, 'Not found');
	}
	
	return {
		content,
		articlesList
	};
}) satisfies PageData;
