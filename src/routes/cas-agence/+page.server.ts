// export const prerender = true;

import type { PageData } from './$types';

export const load = (async ({ fetch }) => {
	const useCasesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/use-cases?sort=publishedAt%3Adesc&pagination[pageSize]=100&populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText&populate[thumbnail][fields][0]=formats&populate[thumbnail][fields][1]=url&populate[thumbnail][fields][2]=alternativeText&populate[resultDisplayed][fields][0]=text1&populate[resultDisplayed][fields][1]=text2&populate[client][fields][0]=name&populate[categories][fields][0]=title', {
		method: 'GET'
	})
	const useCasesData = await useCasesResponse.json();
	let content: any;
	
	if (useCasesData.data) {
    content = useCasesData.data
	}
	
	return {
		content
	};
}) satisfies PageData;
