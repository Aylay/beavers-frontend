import { error } from '@sveltejs/kit';

;import type { PageServerLoad } from './$types';
let filters: string;
if (import.meta.env.VITE_MODE === 'prod') {
	filters = ''
} else {
	filters = '&publicationState=preview'
}

export const load: PageServerLoad = async ({ fetch, params }) => {
	const menuDark = true;
	const contentResponse = await fetch(
		import.meta.env.VITE_STRAPI_URL +
			'/api/agences?filters[slug][$eq]=' + params.slug + '&populate[meta][fields][0]=title&populate[meta][fields][1]=description&populate[meta][populate][ogImage][fields][0]=url&populate[meta][populate][ogImage][fields][1]=width&populate[meta][populate][ogImage][fields][2]=height&populate[words][fields][0]=text&populate[contentManager][fields][0]=layout&populate[contentManager][fields][1]=text1&populate[contentManager][fields][2]=text2&populate[contentManager][fields][5]=citation&populate[contentManager][fields][3]=iframe&populate[contentManager][fields][4]=legend&populate[contentManager][populate][img][fields][0]=formats&populate[contentManager][populate][img][fields][1]=url&populate[contentManager][populate][img][fields][2]=alternativeText&populate[useCases][fields][0]=slug&populate[useCases][fields][1]=website&populate[useCases][fields][2]=title&populate[useCases][populate][mainImg][fields][0]=formats&populate[useCases][populate][mainImg][fields][1]=url&populate[useCases][populate][mainImg][fields][2]=alternativeText&populate[useCases][populate][thumbnail][fields][0]=formats&populate[useCases][populate][thumbnail][fields][1]=url&populate[useCases][populate][thumbnail][fields][2]=alternativeText&populate[useCases][populate][resultDisplayed][fields][0]=text1&populate[useCases][populate][resultDisplayed][fields][1]=text2&populate[useCases][populate][client][fields][0]=name&populate[useCases][populate][categories][fields][0]=title' + filters,
    {
			method: 'GET'
		}
	);
	const contentData = await contentResponse.json();
	let content: any;
	
	if (contentData.data && contentData.data.length > 0) {
    content = contentData.data[0]
	} else {
		throw error(404, 'Not found');
	}

	return {
		content,
		menuDark
	};
};
