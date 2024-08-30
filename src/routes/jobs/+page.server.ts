let isProd: boolean;
if (import.meta.env.VITE_MODE === 'prod') {
	isProd = true;
} else {
	isProd = false;
}
export const prerender = isProd;

import type { PageData } from './$types';

export const load = (async ({ fetch }) => {
	const jobsResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/jobs?fields[0]=slug&fields[1]=title&fields[2]=contract&sort=publishedAt%3Adesc&pagination[pageSize]=100', {
		method: 'GET'
	})
	const jobsData = await jobsResponse.json();
	const content = jobsData.data ? jobsData.data : []
	
	return {
		content
	};
}) satisfies PageData;
