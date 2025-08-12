<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Google from '$lib/assets/svg/Google.svelte';
	import Medal from '$lib/assets/svg/Medal.svelte';
	import Search2 from '$lib/assets/svg/Search2.svelte';
	import Binoculars from '$lib/assets/svg/Binoculars.svelte';
	import Graph from '$lib/assets/svg/Graph.svelte';
	import Shape from '$lib/assets/svg/Shape.svelte';
	import Line from '../utilities/Line.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	export let title: string;
</script>

<div class="big-container" use:inview={options} on:inview_change={handleChange}>
	<div class="flex flex-col items-center justify-center">
		<Line color="bg-seance" />
		<h2 class="text-center text-3 text-bright">
			{title}
		</h2>
	</div>
	<div class="mt-20 flex justify-between max-lg:flex-wrap max-lg:gap-12 lg:mt-40">
		<div
			class="flex flex-1 flex-col items-center gap-10 animate-delay-[250ms] {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<div class="relative">
				<Shape newClass="fill-seance" />
				<Medal newClass="absolute top-5 left-1/2 transform -translate-x-1/2" />
			</div>
			<h3 class="text-center text-5">1ère position</h3>
		</div>
		<div
			class="flex flex-1 flex-col items-center gap-10 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<div class="relative">
				<Shape newClass="fill-seance" />
				<Google newClass="absolute top-7 left-1/2 transform -translate-x-1/2" />
			</div>
			<h3 class="text-center text-5">
				Tout moteur<br />de recherche
			</h3>
		</div>
		<div
			class="flex flex-1 flex-col items-center gap-10 animate-delay-[750ms] {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<div class="relative">
				<Shape newClass="fill-seance" />
				<Search2 newClass="absolute top-5 left-1/2 transform -translate-x-1/2" />
			</div>
			<h3 class="text-center text-5">
				Les meilleurs<br />mots clés
			</h3>
		</div>
		<div
			class="flex flex-1 flex-col items-center gap-10 animate-delay-1000 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<div class="relative">
				<Shape newClass="fill-seance" />
				<Binoculars newClass="absolute top-7 left-1/2 transform -translate-x-1/2" />
			</div>
			<h3 class="text-center text-5">
				Un audit<br />SEO complet
			</h3>
		</div>
		<div
			class="flex flex-1 flex-col items-center gap-10 animate-delay-[1250ms] {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<div class="relative">
				<Shape newClass="fill-seance" />
				<Graph newClass="absolute top-4 left-1/2 transform -translate-x-1/2" />
			</div>
			<h3 class="text-center text-5">
				Optimisation du<br />référencement
			</h3>
		</div>
	</div>
</div>
