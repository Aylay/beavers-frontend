import type { PageServerLoad } from './$types';

let isProd: boolean;
if (import.meta.env.VITE_MODE === 'prod') {
	isProd = true;
} else {
	isProd = false;
}
export const prerender = isProd;

export const load: PageServerLoad = async ({ fetch }) => {
	const menuDark = true;
	const vzugResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/use-cases/creation-gestion-publications-reseaux-sociaux-v-zug?populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText&populate[thumbnail][fields][0]=formats&populate[thumbnail][fields][1]=url&populate[thumbnail][fields][2]=alternativeText&populate[resultDisplayed][fields][0]=text1&populate[resultDisplayed][fields][1]=text2&populate[client][fields][0]=name&populate[categories][fields][0]=title', {
		method: 'GET'
	})
	const vzugData = await vzugResponse.json();
	const useCase1 = vzugData && vzugData.data ? vzugData.data : ''

	const moncarroResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/use-cases/audit-recommandations-strategie-sea-moncarro?populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText&populate[thumbnail][fields][0]=formats&populate[thumbnail][fields][1]=url&populate[thumbnail][fields][2]=alternativeText&populate[resultDisplayed][fields][0]=text1&populate[resultDisplayed][fields][1]=text2&populate[client][fields][0]=name&populate[categories][fields][0]=title', {
		method: 'GET'
	})
	const moncarroData = await moncarroResponse.json();
	const useCase2 = moncarroData && moncarroData.data ? moncarroData.data : ''

	const rudnikResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/use-cases/developpement-site-marius-rudnik-renovation?populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText&populate[thumbnail][fields][0]=formats&populate[thumbnail][fields][1]=url&populate[thumbnail][fields][2]=alternativeText&populate[resultDisplayed][fields][0]=text1&populate[resultDisplayed][fields][1]=text2&populate[client][fields][0]=name&populate[categories][fields][0]=title', {
		method: 'GET'
	})
	const rudnikData = await rudnikResponse.json();
	const useCase3 = rudnikData && rudnikData.data ? rudnikData.data : ''

	return {
		menuDark,
		useCase1,
		useCase2,
		useCase3
	};
};
