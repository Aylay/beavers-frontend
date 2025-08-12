import { error } from '@sveltejs/kit';

;import type { PageServerLoad } from './$types';
let isProd: boolean;
if (import.meta.env.VITE_MODE === 'prod') {
	isProd = true;
} else {
	isProd = false;
}
export const prerender = isProd;

export const load: PageServerLoad = async ({ fetch, params }) => {
	const jobResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/jobs/' + params.slug + '?populate[meta][fields][0]=title&populate[meta][fields][1]=description&populate[meta][populate][ogImage][fields][0]=url&populate[meta][populate][ogImage][fields][1]=width&populate[meta][populate][ogImage][fields][2]=height&populate[words][fields][0]=text', {
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
};
