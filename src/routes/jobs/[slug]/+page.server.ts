import { error } from '@sveltejs/kit';

import type { PageData } from './$types';

export const load = (async ({ fetch, params }) => {
	const jobResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/jobs/' + params.slug + '?populate=deep', {
		method: 'GET'
	})
	const jobData = await jobResponse.json();
	let content: any;
	
	if (jobData.data) {
		content = jobData.data
		
	} else {
		throw error(404, 'Not found');
	}
	
	const menuDark = true;
	return {
		menuDark,
		content
	};
}) satisfies PageData;
