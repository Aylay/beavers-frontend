let isProd: boolean;
if (import.meta.env.VITE_MODE === 'prod') {
	isProd = true;
} else {
	isProd = false;
}
export const prerender = isProd;

;import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const menuWhite = true;

	return {
		menuWhite
	};
};
