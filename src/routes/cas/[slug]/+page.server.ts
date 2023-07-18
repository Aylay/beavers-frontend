import { error } from '@sveltejs/kit';

import type { PageData } from './$types';

export const load = (async ({ fetch, params }) => {
	const useCaseResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/use-cases/' + params.slug + '?populate=deep', {
		method: 'GET'
	})
	const useCaseData = await useCaseResponse.json();
	let content: any;
	let otherUseCases: any;
	
	if (useCaseData.data) {
		content = useCaseData.data
		const useCasesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/use-cases?populate=deep&pagination[pageSize]=100', {
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
	
	const menuWhite = true;
	return {
		menuWhite,
		content,
		otherUseCases
	};
}) satisfies PageData;
