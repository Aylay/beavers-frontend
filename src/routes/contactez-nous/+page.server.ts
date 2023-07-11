export const prerender = true;

import type { PageData } from './$types';

export const load = (async ({ fetch, params }) => {
	const menuWhite = true;

	return {
		menuWhite
	};
}) satisfies PageData;
