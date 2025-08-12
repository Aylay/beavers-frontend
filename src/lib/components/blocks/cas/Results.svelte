<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import Line from '../utilities/Line.svelte';
	import Cta from '$lib/components/blocks/utilities/CTA.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	export let resultText: string;
	export let results: Array<any>;
	export let website: string;
	export let brand: any;
</script>

<div class="big-container py-32 lg:py-40" use:inview={options} on:inview_change={handleChange}>
	<h2
		class="mb-4 text-center text-[calc(100vw*0.14)] leading-none font-extrabold text-bright uppercase max-lg:w-screen max-lg:-translate-x-[5%] max-lg:transform max-lg:overflow-visible lg:text-[8.5rem]"
	>
		les résultats<span class="text-outline block">obtenus</span>
	</h2>
	<div class="my-8 flex justify-center">
		<Line />
	</div>
	<p class="small-container mb-24 text-center text-5">
		{@html resultText}
	</p>
	<div class="flex justify-between gap-16 max-lg:flex-col">
		{#each results as result, i}
			<div
				class="flex flex-1 flex-col gap-4 text-center {isInView ? 'animate-fade' : 'opacity-0'}"
				style="animation-delay: {150 * i}ms;"
			>
				<p class="text-[6rem] leading-[5rem] font-bold text-seance">
					{result.text1}
				</p>
				<p class="text-6">
					{result.text2}
				</p>
			</div>
		{/each}
	</div>
	<div class="mt-24 flex justify-center gap-12 max-lg:flex-col max-lg:items-center lg:mt-32">
		{#if website}
			<div>
				<Cta label="Voir le site de {brand.name}" href={website} type="transparent" blank={true} />
			</div>
		{/if}
		<div>
			<Cta label="Parlons de votre projet !" href="/contactez-nous" type="seance" />
		</div>
	</div>
</div>
