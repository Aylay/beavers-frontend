import type { PageData } from './$types';

export const load = (async ({ fetch, params }) => {
	const menuWhite = true;
	const isArticle = true;

	return {
		menuWhite,
		isArticle
	};
}) satisfies PageData;
