<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import Hoverable from '$lib/components/utilities/Hoverable.svelte';
	import Blank from '../../../assets/svg/Blank.svelte';

	export let useCase: any = {};
	export let i: number;
	let col: string;
	if (i % 7 === 0 || i % 7 === 1 || i % 7 === 2 || i % 7 === 3) {
		col = 'lg:col-span-2'
	} else if (i % 7 === 4) {
		col = 'lg:col-span-4'
	} else if (i % 7 === 5 || i % 7 === 6) {
		col = 'lg:col-span-3'
	}

	const strapiURL = import.meta.env.VITE_STRAPI_URL;

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<Hoverable let:hovering={active} newClass={col}>
	<div
		use:inview={options}
		on:inview_change={handleChange}
		class="relative flex max-lg:h-[46rem] h-[575px] items-end overflow-hidden rounded-lg max-lg:p-5 p-10 transition-all"
	>
		<div
			class="absolute inset-0 z-0 h-full w-full before:absolute before:inset-0 before:z-10 before:h-full before:w-full before:bg-jaguar before:bg-opacity-40 before:content-['']"
		>
			{#if isInView}
				<img
					src={strapiURL + useCase.img1.src}
					alt={useCase.img1.alt ? useCase.img1.alt : useCase.title}
					class="relative z-0 h-full w-full object-cover {isInView ? 'animate-fade' : 'opacity-0'}"
				/>
			{/if}
		</div>
		{#if useCase.key1 && useCase.key2}
			<div
				class="absolute max-lg:left-5 left-10 max-lg:top-5 top-10 z-20 flex items-center gap-4 rounded-3xl bg-seance px-6 py-1 animate-delay-1000 {isInView
					? 'animate-fade'
					: 'opacity-0'}"
			>
				{#if useCase.key1}
				<p class="text-5 text-bright">{useCase.key1}</p>
				{/if}
				{#if useCase.key2}
				<p class="text-6">{useCase.key2}</p>
				{/if}
			</div>
		{/if}
		{#if useCase.website}
			<a
				class="absolute max-lg:right-5 right-10 max-lg:top-5 top-10 z-20 flex h-14 w-14 items-center justify-center rounded-3xl bg-bright animate-delay-1000 {isInView
					? 'animate-fade'
					: 'opacity-0'}"
				target="_blank"
				rel="noopener"
				href={useCase.website}
			>
				<Blank />
			</a>
		{/if}
		<a
			class="relative z-30 flex h-3/5 w-full flex-col overflow-hidden animate-delay-1000 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
			href={useCase.slug}
		>
			<div
				class="absolute z-30 flex transform flex-col transition-all duration-500 max-lg:bottom-1/2 max-lg:translate-y-1/2 {active
					? 'lg:bottom-1/2 lg:translate-y-1/2'
					: 'lg:bottom-0'}"
			>
				<h4 class="mb-5 text-5 text-bright">{useCase.client}</h4>
				<h5 class="mb-11 text-6">{useCase.title}</h5>
				<div class="flex flex-wrap gap-3">
					{#each useCase.tags as tag}
						<p class="rounded-3xl bg-seance px-6 py-2 text-7 font-medium">{tag}</p>
					{/each}
				</div>
			</div>
		</a>
		<a
			class="absolute inset-x-0 top-0 z-10 h-full w-full transition-all duration-500 animate-delay-1000 max-lg:max-h-[40%] {active
				? 'lg:max-h-[40%]'
				: 'lg:max-h-0'} {isInView ? 'animate-fade' : 'opacity-0'}"
			href={useCase.slug}
		>
			{#if isInView}
				<img
					src={useCase.img2.src}
					alt={useCase.img2.alt ? useCase.img2.alt : useCase.title}
					class="relative z-0 h-full w-full object-cover {isInView ? 'animate-fade' : 'opacity-0'}"
				/>
			{/if}
		</a>
		<div
			class="absolute inset-x-0 bottom-0 h-full w-full overflow-hidden bg-seance bg-opacity-50 transition-all duration-500 animate-delay-1000 before:absolute before:inset-x-0 before:bottom-0 before:z-20 before:h-full before:w-full before:bg-jagger before:bg-opacity-75 max-lg:max-h-[60%] {active
				? 'lg:max-h-[60%]'
				: 'lg:max-h-0'} {isInView ? 'animate-fade' : 'opacity-0'}"
		/>
	</div>
</Hoverable>
