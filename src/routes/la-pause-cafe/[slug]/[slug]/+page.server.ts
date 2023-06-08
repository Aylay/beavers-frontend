import type { PageServerData } from '../$types';

export const load = (async ({ fetch, params }) => {
	const menuWhite = true;

	return {
		menuWhite
	};
}) satisfies PageServerData;
