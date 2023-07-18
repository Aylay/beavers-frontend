// export const prerender = true;

import type { PageData } from './$types';

export const load = (async ({ fetch }) => {
	const articlesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/articles?populate=deep&sort=publishedAt%3Adesc&pagination[page]=1&pagination[pageSize]=3', {
		method: 'GET'
	})
	const articlesData = await articlesResponse.json();
	let articlesList: any;
	
	if (articlesData.data) {
    articlesList = articlesData.data
	}

	const useCasesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/use-cases?populate=deep&sort=publishedAt%3Adesc&pagination[page]=1&pagination[pageSize]=3', {
		method: 'GET'
	})
	const useCasesData = await useCasesResponse.json();
	let useCasesList: any;
	
	if (useCasesData.data) {
    useCasesList = useCasesData.data
	}
	
	return {
		articlesList,
		useCasesList
	};
}) satisfies PageData;