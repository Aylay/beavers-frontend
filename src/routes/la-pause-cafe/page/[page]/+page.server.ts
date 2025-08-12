import { error } from '@sveltejs/kit';

;import type { PageServerLoad } from './$types';
let isProd: boolean;
let filters: string;
if (import.meta.env.VITE_MODE === 'prod') {
	isProd = true;
	filters = 'filters[publishedAt][$notNull]=true&sort=publishedAt%3Adesc&'
} else {
	isProd = false;
	filters = 'sort=id%3Adesc&publicationState=preview&'
}
export const prerender = isProd;

function isInt(value: unknown): boolean {
  if (isNaN(value)) {
    return false;
  }
  const x = parseFloat(value);
  return (x | 0) === x;
}

export const load: PageServerLoad = async ({ fetch, params }) => {
	const pageNumber = Number(params.page)
	if (!isInt(pageNumber)) {
		throw error(404, 'Not found');
	}
	
	const articlesResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/articles?' + filters + 'pagination[page]=' + pageNumber + '&pagination[pageSize]=12&fields[0]=slug&fields[1]=date&fields[2]=publishedAt&fields[3]=title&fields[4]=excerpt&populate[category][fields][0]=slug&populate[category][fields][1]=title&populate[mainImg][fields][0]=formats&populate[mainImg][fields][1]=url&populate[mainImg][fields][2]=alternativeText', {
		method: 'GET'
	})
	const articlesData = await articlesResponse.json();
	
	let articlesList: any;
	let pageCount: number;
	
	if (articlesData.data) {
		pageCount = articlesData.meta.pagination.pageCount
		if (pageNumber > 1 && pageNumber <= pageCount) {
			articlesList = articlesData.data
		} else {
			throw error(404, 'Not found');
		}
	} else {
		throw error(404, 'Not found');
	}
	
	return {
		articlesList,
		pageNumber,
		pageCount
	};
};
