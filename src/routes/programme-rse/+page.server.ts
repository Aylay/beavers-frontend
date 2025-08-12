let isProd: boolean;
if (import.meta.env.VITE_MODE === 'prod') {
	isProd = true;
} else {
	isProd = false;
}
export const prerender = isProd;

;import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
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
};
