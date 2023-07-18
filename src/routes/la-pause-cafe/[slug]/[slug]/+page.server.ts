import { error } from '@sveltejs/kit';

import type { PageData } from './$types';

export const load = (async ({ fetch, params }) => {
	const articleResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/articles/' + params.slug + '?populate=deep', {
		method: 'GET'
	})
	const articleData = await articleResponse.json();
	let content: any;
	let otherArticles: any;
	
	if (articleData.data) {
		content = articleData.data

		const articlesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/articles?populate=deep&pagination[pageSize]=100', {
			method: 'GET'
		})
		const articlesData = await articlesResponse.json();
		
		if (articlesData.data) {
			otherArticles = articlesData.data
		}
		otherArticles = otherArticles.filter((elm: any) => (elm.id !== content.id) && (elm.attributes.category.data.attributes.slug === content.attributes.category.data.attributes.slug))
		
	} else {
		throw error(404, 'Not found');
	}
	
	const isArticle = true;
	const menuDark = true;
	return {
		isArticle,
		menuDark,
		content,
		otherArticles
	};
}) satisfies PageData;

