<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	const strapiURL = import.meta.env.VITE_STRAPI_URL;

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	export let mainImg: any;
	export let title: string;
</script>

<div class="big-container" use:inview={options} on:inview_change={handleChange}>
	<div class="h-[36rem] lg:h-[68rem]">
		{#if isInView}
			<img
				src={strapiURL + mainImg.url}
				alt={mainImg.alternativeText ? mainImg.alternativeText : title}
				class="h-full w-full overflow-hidden rounded-lg object-cover {isInView
					? 'animate-fade'
					: 'opacity-0'}"
			/>
		{/if}
	</div>
</div>
