export const prerender = true;

import type { PageData } from './$types';

export const load = (async () => {
	const isOceanActive = Math.random() > 0.5 ? true : false;

	return {
		isOceanActive
	};
}) satisfies PageData;
