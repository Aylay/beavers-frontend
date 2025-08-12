import { error } from '@sveltejs/kit';

;import type { PageServerLoad } from './$types';
let isProd: boolean;let filters: string;
if (import.meta.env.VITE_MODE === 'prod') {
	isProd = true;
	filters = 'filters[publishedAt][$notNull]=true&sort=publishedAt%3Adesc&'
} else {
	isProd = false;
	filters = 'sort=id%3Adesc&publicationState=preview&'
}
export const prerender = isProd;

export const load: PageServerLoad = async ({ fetch, params }) => {
	const useCaseResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/use-cases/' + params.slug + '?populate[meta][fields][0]=title&populate[meta][fields][1]=description&populate[meta][populate][ogImage][fields][0]=url&populate[meta][populate][ogImage][fields][1]=width&populate[meta][populate][ogImage][fields][2]=height&populate[categories][fields][0]=title&populate[categories][fields][1]=slug&populate[0]=contract&populate[client][fields][0]=name&populate[client][fields][1]=description&populate[client][fields][2]=logoColor&populate[client][populate][imgBg][fields][0]=url&populate[client][populate][imgBg][fields][1]=alternativeText&populate[client][populate][useCases][fields][0]=slug&populate[client][populate][useCases][fields][1]=title&populate[client][populate][logo][fields][0]=url&populate[client][populate][logo][fields][1]=alternativeText&populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText&populate[img1][fields][0]=formats&populate[img1][fields][1]=url&populate[img1][fields][2]=alternativeText&populate[img2][fields][0]=formats&populate[img2][fields][1]=url&populate[img2][fields][2]=alternativeText&populate[goals][fields][0]=text&populate[results][fields][0]=text1&populate[results][fields][1]=text2&populate[imgSite][fields][0]=url&populate[imgSite][fields][1]=alternativeText&populate[client][populate][avis][fields][0]=prenom&populate[client][populate][avis][fields][1]=nom&populate[client][populate][avis][fields][2]=note&populate[client][populate][avis][fields][3]=commentaire', {
		method: 'GET'
	})
	const useCaseData = await useCaseResponse.json();
	let content: any;
	let otherUseCases: any;
	let articlesList: any;
	
	if (useCaseData.data) {
		content = useCaseData.data
		const useCasesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/use-cases?' + filters + 'pagination[pageSize]=100&populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText&populate[thumbnail][fields][0]=formats&populate[thumbnail][fields][1]=url&populate[thumbnail][fields][2]=alternativeText&populate[resultDisplayed][fields][0]=text1&populate[resultDisplayed][fields][1]=text2&populate[client][fields][0]=name&populate[categories][fields][0]=title', {
			method: 'GET'
		})
		const useCasesData = await useCasesResponse.json();
		
		if (useCasesData.data) {
			otherUseCases = useCasesData.data
		}
		otherUseCases = otherUseCases.filter((elm: any) => elm.id !== content.id)

		const articlesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/articles?filters[category][slug][$eq]=' + content.attributes.categories.data[0].attributes.slug + '&' + filters + 'pagination[pageSize]=3&fields[0]=slug&fields[1]=date&fields[2]=publishedAt&fields[3]=title&fields[4]=excerpt&populate[category][fields][0]=slug&populate[category][fields][1]=title&populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText', {
			method: 'GET'
		})
		const articlesData = await articlesResponse.json();
		
		if (articlesData.data) {
			articlesList = articlesData.data
		}
	} else {
		throw error(404, 'Not found');
	}
	
	return {
		content,
		otherUseCases,
		articlesList
	};
};
