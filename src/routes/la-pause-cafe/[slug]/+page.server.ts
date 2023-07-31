import { error } from '@sveltejs/kit';

import type { PageData } from './$types';
export const prerender = true;

export const load = (async ({ fetch, params }) => {
	const catResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/categories/' + params.slug + '?fields[0]=slug&fields[1]=title&fields[2]=subTitle&fields[3]=intro&populate[words][fields][0]=text&populate[articles][fields][0]=slug&populate[articles][fields][1]=date&populate[articles][fields][2]=publishedAt&populate[articles][fields][3]=title&populate[articles][fields][4]=excerpt&populate[articles][populate][category][fields][0]=slug&populate[articles][populate][category][fields][1]=title&populate[articles][populate][mainImg][fields][0]=formats&populate[articles][populate][mainImg][fields][1]=url&populate[articles][populate][mainImg][2]=alternativeText&populate[meta][fields][0]=title&populate[meta][fields][1]=description&populate[meta][populate][ogImage][fields][0]=url&populate[meta][populate][ogImage][fields][1]=width&populate[meta][populate][ogImage][fields][2]=height', {
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
