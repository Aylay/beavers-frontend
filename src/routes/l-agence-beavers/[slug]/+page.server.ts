import { error } from '@sveltejs/kit';

import type { PageData } from './$types';

export const prerender = true;

export const load = (async ({ fetch, params }) => {
	const contentResponse = await fetch(
		import.meta.env.VITE_STRAPI_URL +
			'/api/agences?filters[slug][$eq]=' + params.slug + '&populate[meta][fields][0]=title&populate[meta][fields][1]=description&populate[meta][populate][ogImage][fields][0]=url&populate[meta][populate][ogImage][fields][1]=width&populate[meta][populate][ogImage][fields][2]=height&populate[words][fields][0]=text&populate[contentManager][fields][0]=layout&populate[contentManager][fields][1]=text1&populate[contentManager][fields][2]=text2&populate[contentManager][fields][3]=iframe&populate[contentManager][fields][4]=legend&populate[contentManager][populate][img][fields][0]=formats&populate[contentManager][populate][img][fields][1]=url&populate[contentManager][populate][img][fields][2]=alternativeText',
    {
			method: 'GET'
		}
	);
	const contentData = await contentResponse.json();
	let content: any;
	
	if (contentData.data && contentData.data.length > 0) {
    content = contentData.data[0]
		console.log(content)
	} else {
		throw error(404, 'Not found');
	}

	return {
		content,
	};
}) satisfies PageData;
