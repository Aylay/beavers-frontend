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

	export let goals: Array<any>;
	export let goalsImg: any;
	export let title: string;
</script>

<div
	class="big-container flex items-center gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="flex-1 max-lg:w-full">
		<p class="text-5 text-bright">Les objectifs à atteindre</p>
		<div class="mt-8 flex flex-col gap-16 lg:w-3/4">
			{#each goals as goal, i}
				<div
					class="flex gap-12 max-lg:flex-col max-lg:gap-6 lg:items-center {isInView
						? 'animate-fade-right'
						: 'opacity-0'}"
					style="animation-delay: {150 * i}ms;"
				>
					<p class="w-32 text-[5rem] leading-none font-semibold text-seance">
						0{i + 1}<span class="text-bright">.</span>
					</p>
					<p class="flex-1 text-6 font-semibold">
						{goal.text}
					</p>
				</div>
			{/each}
		</div>
	</div>
	<div class="flex h-[36rem] flex-col gap-8 max-lg:w-full lg:h-[55rem] lg:flex-1">
		{#if isInView}
			<img
				src={strapiURL + goalsImg.url}
				alt={goalsImg.alternativeText ? goalsImg.alternativeText : title}
				class="h-full w-full overflow-hidden rounded-lg object-cover {isInView
					? 'animate-fade'
					: 'opacity-0'}"
				style="animation-delay: {150 * goals.length + 150}ms;"
			/>
		{/if}
	</div>
</div>
