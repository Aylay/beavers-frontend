<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Mobile from '$lib/assets/svg/Mobile.svelte';
	import Pencil from '$lib/assets/svg/Pencil.svelte';
	import Trafic from '$lib/assets/svg/Trafic.svelte';
	import Thumb from '$lib/assets/svg/Thumb.svelte';
	import Shape from '$lib/assets/svg/Shape.svelte';
	import Line from '$lib/components/blocks/utilities/Line.svelte';

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
				<Thumb
					newClass="absolute top-7 left-1/2 transform -translate-x-1/2 fill-white max-w-[3.2rem] h-auto"
				/>
			</div>
			<h3 class="text-center text-5">Fonctionnement</h3>
		</div>
		<div
			class="flex flex-1 flex-col items-center gap-10 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<div class="relative">
				<Shape newClass="fill-seance" />
				<Mobile newClass="absolute top-5 left-1/2 transform -translate-x-1/2 fill-white" />
			</div>
			<h3 class="text-center text-5">Placement</h3>
		</div>
		<div
			class="flex flex-1 flex-col items-center gap-10 animate-delay-[750ms] {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<div class="relative">
				<Shape newClass="fill-seance" />
				<Pencil newClass="absolute top-7 left-1/2 transform -translate-x-1/2" />
			</div>
			<h3 class="text-center text-5">Création</h3>
		</div>
		<div
			class="flex flex-1 flex-col items-center gap-10 animate-delay-1000 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<div class="relative">
				<Shape newClass="fill-seance" />
				<Trafic newClass="absolute top-6 left-1/2 transform -translate-x-1/2" fill="#FFF" />
			</div>
			<h3 class="text-center text-5">Ciblage</h3>
		</div>
	</div>
</div>
