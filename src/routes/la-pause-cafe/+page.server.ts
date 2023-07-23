// export const prerender = true;

import type { PageData } from './$types';

export const load = (async ({ fetch }) => {
	const articlesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/articles?sort=publishedAt%3Adesc&pagination[pageSize]=100&fields[0]=slug&fields[1]=date&fields[2]=publishedAt&fields[3]=title&fields[4]=excerpt&populate[category][fields][0]=slug&populate[category][fields][1]=title&populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText', {
		method: 'GET'
	})
	const articlesData = await articlesResponse.json();
	let articlesList: any;
	
	if (articlesData.data) {
    articlesList = articlesData.data
	}
	
	return {
		articlesList
	};
}) satisfies PageData;
