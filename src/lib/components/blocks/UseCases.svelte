<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Line from '$lib/components/blocks/utilities/Line.svelte';
	import Title from '$lib/components/blocks/utilities/Title.svelte';
	import Cta from '$lib/components/blocks/utilities/CTA.svelte';
	import UseCase from '$lib/components/blocks/common/UseCase.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	export let cases: Array<any>;
	export let firstText: string = 'Nos dernières<br />';
</script>

<div class="big-container">
	<Line />
	<div class="flex max-lg:flex-col max-lg:gap-8 lg:items-end lg:justify-between">
		<div class="flex-1">
			<Title first={firstText} second="études de cas" />
		</div>
		<div class="flex">
			<Cta label="Voir tous les cas" href="/cas-agence" type="transparent" />
		</div>
	</div>
	<div
		use:inview={options}
		on:inview_change={handleChange}
		class="mt-16 grid grid-cols-6 overflow-hidden transition-all delay-500 duration-700 max-lg:grid-cols-1 {isInView
			? 'gap-14'
			: 'gap-0'}"
	>
		{#each cases as useCase, i}
			<!-- <UseCase {useCase} i={cases.length > 2 ? i : i + 5} {isArticle} /> -->
			<UseCase {useCase} {i} isArticle={cases.length > 2 ? false : true} />
		{/each}
	</div>
</div>
