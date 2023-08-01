export const prerender = true;

import type { PageData } from './$types';

export const load = (async ({ fetch }) => {
	const articlesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/articles?sort=publishedAt%3Adesc&pagination[page]=1&pagination[pageSize]=3&fields[0]=slug&fields[1]=date&fields[2]=publishedAt&fields[3]=title&fields[4]=excerpt&populate[category][fields][0]=slug&populate[category][fields][1]=title&populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText', {
		method: 'GET'
	})
	const articlesData = await articlesResponse.json();
	let articlesList: any;
	
	if (articlesData.data) {
    articlesList = articlesData.data
	}

	const useCasesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/use-cases?sort=publishedAt%3Adesc&pagination[page]=1&pagination[pageSize]=3&populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText&populate[thumbnail][fields][0]=formats&populate[thumbnail][fields][1]=url&populate[thumbnail][fields][2]=alternativeText&populate[resultDisplayed][fields][0]=text1&populate[resultDisplayed][fields][1]=text2&populate[client][fields][0]=name&populate[categories][fields][0]=title', {
		method: 'GET'
	})
	const useCasesData = await useCasesResponse.json();
	let useCasesList: any;
	
	if (useCasesData.data) {
    useCasesList = useCasesData.data
	}

	const treeNationResponse = await fetch('https://tree-nation.com/api/forests/466954',
		{
			method: 'GET'
		}
	)
	const treeNationData = await treeNationResponse.json();
	const treeNation = treeNationData ? treeNationData : '';
	
	return {
		articlesList,
		useCasesList,
		treeNation
	};
}) satisfies PageData;