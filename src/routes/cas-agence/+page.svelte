<script lang="ts">
  import { page } from '$app/stores';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

  import Header from "$lib/components/blocks/cas-agence/Header.svelte";
	import UseCase from '$lib/components/blocks/common/UseCase.svelte';
	import MetaFront from '$lib/components/utilities/MetaFront.svelte';

	const useCases: any = $page.data.content;

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	const meta = {
		title: "Tous les cas agence, les clients, de l'agence digitale Beavers",
		description: "Présentation de tous les cas agence des clients de l'agence digitale Beavers, spécialisée en stratégie marketing digital, SEA, création de sites internet et SEO."
	}
</script>

<MetaFront {meta} />

<div class="flex flex-col">
  <Header />
	<div
		use:inview={options}
		on:inview_change={handleChange}
		class="big-container py-32 lg:py-64 grid max-lg:grid-cols-1 grid-cols-6 overflow-hidden transition-all delay-500 duration-700 {isInView
			? 'gap-14'
			: 'gap-0'}"
	>
		{#each useCases as useCase, i}
			<UseCase {useCase} {i} />
		{/each}
	</div>
</div>