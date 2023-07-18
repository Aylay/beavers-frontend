// export const prerender = true;

import type { PageData } from './$types';

export const load = (async ({ fetch }) => {
	const useCasesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/use-cases?populate=deep&sort=publishedAt%3Adesc&pagination[pageSize]=100', {
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
