import { error, redirect } from '@sveltejs/kit';

import type { PageData } from './$types';
export const prerender = true;

function isInt(value) {
  if (isNaN(value)) {
    return false;
  }
  const x = parseFloat(value);
  return (x | 0) === x;
}

export const load = (async ({ fetch, params }) => {
	const pageNumber = Number(params.page)
	if (!isInt(pageNumber)) {
		throw error(404, 'Not found');
	}
	
	const articlesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/articles?filters[publishedAt][$notNull]=true&sort=publishedAt:desc&pagination[page]=' + pageNumber + '&pagination[pageSize]=12&fields[0]=slug&fields[1]=date&fields[2]=publishedAt&fields[3]=title&fields[4]=excerpt&populate[category][fields][0]=slug&populate[category][fields][1]=title&populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText', {
		method: 'GET'
	})
	const articlesData = await articlesResponse.json();
	
	let articlesList: any;
	let pageCount: number;
	
	if (articlesData.data) {
		if (pageNumber > 0 && pageNumber <= articlesData.meta.pagination.pageCount) {
			console.log(pageNumber)
			if (pageNumber === 1) {
				throw redirect(308, '/la-pause-cafe');
			}
		} else {
			throw error(404, 'Not found');
		}
    articlesList = articlesData.data
		pageCount = articlesData.meta.pagination.pageCount
	} else {
		throw error(404, 'Not found');
	}
	
	return {
		articlesList,
		pageNumber,
		pageCount
	};
}) satisfies PageData;
