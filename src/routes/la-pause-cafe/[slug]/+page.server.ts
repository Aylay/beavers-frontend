import { error } from '@sveltejs/kit';

import type { PageData } from './$types';

export const load = (async ({ fetch, params }) => {
	const catResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/categories/' + params.slug + '?populate=deep&sort=publishedAt%3Adesc&pagination[pageSize]=100', {
		method: 'GET'
	})
	const catData = await catResponse.json();
	let content: any;
	
	if (catData.data) {
    content = catData.data
	} else {
		throw error(404, 'Not found');
	}
	
	return {
		content
	};
}) satisfies PageData;
