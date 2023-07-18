export const prerender = true;

import type { PageData } from './$types';

export const load = (async () => {
	const menuDark = true;

	return {
		menuDark
	};
}) satisfies PageData;
