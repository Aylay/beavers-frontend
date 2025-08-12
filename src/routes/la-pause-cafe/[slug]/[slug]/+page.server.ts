import { error } from '@sveltejs/kit';

;import type { PageServerLoad } from './$types';
let isProd: boolean;
let filters: string;
if (import.meta.env.VITE_MODE === 'prod') {
	isProd = true;
	filters = 'filters[publishedAt][$notNull]=true&sort=publishedAt%3Adesc&'
} else {
	isProd = false;
	filters = 'sort=id%3Adesc&publicationState=preview&'
}
export const prerender = isProd;

export const load: PageServerLoad = async ({ fetch, params }) => {
	const articleResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/articles/' + params.slug + '?populate[meta][fields][0]=title&populate[meta][fields][1]=description&populate[meta][populate][ogImage][fields][0]=url&populate[meta][populate][ogImage][fields][1]=width&populate[meta][populate][ogImage][fields][2]=height&populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText&populate[words][fields][0]=text&populate[author][fields][0]=name&populate[author][fields][1]=url&populate[author][fields][2]=job&populate[author][fields][3]=text&populate[author][populate][img][fields][0]=url&populate[author][populate][img][fields][1]=alternativeText&populate[category][fields][0]=slug&populate[category][fields][1]=title&populate[contentManager][fields][0]=layout&populate[contentManager][fields][1]=text1&populate[contentManager][fields][2]=text2&populate[contentManager][fields][3]=iframe&populate[contentManager][fields][4]=legend&populate[contentManager][populate][img][fields][0]=formats&populate[contentManager][populate][img][fields][1]=url&populate[contentManager][populate][img][fields][2]=alternativeText&populate[contentManager][fields][5]=citation&populate[contentManager][fields][6]=IA&populate[contentManager][fields][7]=link&populate[contentManager][fields][8]=ctaLabel', {
		method: 'GET'
	})
	const articleData = await articleResponse.json();
	let content: any;
	let otherArticles: any;
	let useCasesList: any;
	
	if (articleData.data) {
		content = articleData.data

		const articlesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/articles?filters[category][slug][$eq]=' + content.attributes.category.data.attributes.slug + '&filters[id][$ne]=' + content.id + '&' + filters + 'pagination[pageSize]=3&fields[0]=slug&fields[1]=date&fields[2]=publishedAt&fields[3]=title&fields[4]=excerpt&populate[category][fields][0]=slug&populate[category][fields][1]=title&populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText', {
			method: 'GET'
		})
		const articlesData = await articlesResponse.json();
		
		if (articlesData.data) {
			otherArticles = articlesData.data
		}

		const useCasesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/use-cases?' + filters + 'pagination[pageSize]=2&filters[categories][slug][$in]=' + content.attributes.category.data.attributes.slug + '&populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText&populate[thumbnail][fields][0]=formats&populate[thumbnail][fields][1]=url&populate[thumbnail][fields][2]=alternativeText&populate[resultDisplayed][fields][0]=text1&populate[resultDisplayed][fields][1]=text2&populate[client][fields][0]=name&populate[categories][fields][0]=title', {
			method: 'GET'
		})
		const useCasesData = await useCasesResponse.json();
		
		if (useCasesData.data) {
			useCasesList = useCasesData.data
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
		otherArticles,
		useCasesList
	};
};

