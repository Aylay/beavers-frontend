import { error } from '@sveltejs/kit';

import type { PageData } from './$types';
export const prerender = true;

export const load = (async ({ fetch }) => {
	const articlesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/articles?filters[publishedAt][$notNull]=true&sort=publishedAt:desc&pagination[pageSize]=12&fields[0]=slug&fields[1]=date&fields[2]=publishedAt&fields[3]=title&fields[4]=excerpt&populate[category][fields][0]=slug&populate[category][fields][1]=title&populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText', {
		method: 'GET'
	})
	const articlesData = await articlesResponse.json();
	let articlesList: any;
	let pageCount: number;
	
	if (articlesData.data) {
    articlesList = articlesData.data
		pageCount = articlesData.meta.pagination.pageCount
	} else {
		throw error(404, 'Not found');
	}
	
	return {
		articlesList,
		pageCount
	};
}) satisfies PageData;
