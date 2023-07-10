export const prerender = true;

import type { PageData } from './$types';

export const load = (async () => {
	const isOceanActive = Math.random() > 0.5 ? true : false;
	const treeNationResponse = await fetch('https://tree-nation.com/api/forests/466954',
		{
			method: 'GET'
		}
	)
	const treeNationData = await treeNationResponse.json();
	const treeNation = treeNationData ? treeNationData : '';

	return {
		isOceanActive,
		treeNation
	};
}) satisfies PageData;
