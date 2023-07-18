export const prerender = true;

import type { PageData } from './$types';

export const load = (async ({ fetch }) => {
	const jobsResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/jobs', {
		method: 'GET'
	})
	const jobsData = await jobsResponse.json();
	const content = jobsData.data ? jobsData.data : []
	
	return {
		content
	};
}) satisfies PageData;
