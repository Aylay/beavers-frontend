import type { PageData } from './$types';

export const prerender = true;

export const load = (async ({ fetch }) => {
	const menuDark = true;
	const vzugResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/use-cases/creation-gestion-publications-reseaux-sociaux-v-zug?populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText&populate[thumbnail][fields][0]=formats&populate[thumbnail][fields][1]=url&populate[thumbnail][fields][2]=alternativeText&populate[resultDisplayed][fields][0]=text1&populate[resultDisplayed][fields][1]=text2&populate[client][fields][0]=name&populate[categories][fields][0]=title', {
		method: 'GET'
	})
	const vzugData = await vzugResponse.json();
	const vzug = vzugData && vzugData.data ? vzugData.data : ''

	const kiResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/use-cases/developpement-site-vitrine-ki-lyon?populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText&populate[thumbnail][fields][0]=formats&populate[thumbnail][fields][1]=url&populate[thumbnail][fields][2]=alternativeText&populate[resultDisplayed][fields][0]=text1&populate[resultDisplayed][fields][1]=text2&populate[client][fields][0]=name&populate[categories][fields][0]=title', {
		method: 'GET'
	})
	const kiData = await kiResponse.json();
	const ki = kiData && kiData.data ? kiData.data : ''

	const rudnikResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/use-cases/developpement-site-marius-rudnik-renovation?populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText&populate[thumbnail][fields][0]=formats&populate[thumbnail][fields][1]=url&populate[thumbnail][fields][2]=alternativeText&populate[resultDisplayed][fields][0]=text1&populate[resultDisplayed][fields][1]=text2&populate[client][fields][0]=name&populate[categories][fields][0]=title', {
		method: 'GET'
	})
	const rudnikData = await rudnikResponse.json();
	const rudnik = rudnikData && rudnikData.data ? rudnikData.data : ''

	return {
		menuDark,
		vzug,
		ki,
		rudnik
	};
}) satisfies PageData;
