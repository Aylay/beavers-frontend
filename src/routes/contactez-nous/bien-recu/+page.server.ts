export const prerender = true;

import type { PageData } from './$types';

export const load = (async () => {
	const menuWhite = true;

	return {
		menuWhite
	};
}) satisfies PageData;
