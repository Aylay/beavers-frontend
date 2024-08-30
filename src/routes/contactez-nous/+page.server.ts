let isProd: boolean;
if (import.meta.env.VITE_MODE === 'prod') {
	isProd = true;
} else {
	isProd = false;
}
export const prerender = isProd;

import type { PageData } from './$types';

export const load = (async () => {
	const menuDark = true;

	return {
		menuDark
	};
}) satisfies PageData;
