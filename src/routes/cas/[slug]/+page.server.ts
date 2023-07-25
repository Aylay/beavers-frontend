import { error } from '@sveltejs/kit';

import type { PageData } from './$types';
// export const prerender = true;

export const load = (async ({ fetch, params }) => {
	const useCaseResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/use-cases/' + params.slug + '?populate[meta][fields][0]=title&populate[meta][fields][1]=description&populate[meta][populate][ogImage][fields][0]=url&populate[meta][populate][ogImage][fields][1]=width&populate[meta][populate][ogImage][fields][2]=height&populate[categories][fields][0]=title&populate[0]=contract&populate[client][fields][0]=name&populate[client][fields][1]=description&populate[client][fields][2]=logoColor&populate[client][populate][imgBg][fields][0]=url&populate[client][populate][imgBg][fields][1]=alternativeText&populate[client][populate][useCases][fields][0]=slug&populate[client][populate][useCases][fields][1]=title&populate[client][populate][logo][fields][0]=url&populate[client][populate][logo][fields][1]=alternativeText&populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText&populate[img1][fields][0]=formats&populate[img1][fields][1]=url&populate[img1][fields][2]=alternativeText&populate[img2][fields][0]=formats&populate[img2][fields][1]=url&populate[img2][fields][2]=alternativeText&populate[goals][fields][0]=text&populate[results][fields][0]=text1&populate[results][fields][1]=text2&populate[imgSite][fields][0]=url&populate[imgSite][fields][1]=alternativeText', {
		method: 'GET'
	})
	const useCaseData = await useCaseResponse.json();
	let content: any;
	let otherUseCases: any;
	
	if (useCaseData.data) {
		content = useCaseData.data
		const useCasesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/use-cases?sort=publishedAt%3Adesc&pagination[pageSize]=100&populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText&populate[thumbnail][fields][0]=formats&populate[thumbnail][fields][1]=url&populate[thumbnail][fields][2]=alternativeText&populate[resultDisplayed][fields][0]=text1&populate[resultDisplayed][fields][1]=text2&populate[client][fields][0]=name&populate[categories][fields][0]=title', {
			method: 'GET'
		})
		const useCasesData = await useCasesResponse.json();
		
		if (useCasesData.data) {
			otherUseCases = useCasesData.data
		}
		otherUseCases = otherUseCases.filter((elm: any) => elm.id !== content.id)
	} else {
		throw error(404, 'Not found');
	}
	
	return {
		content,
		otherUseCases
	};
}) satisfies PageData;
