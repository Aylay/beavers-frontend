<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import ArrowBottom from '$lib/assets/svg/ArrowBottom.svelte';
	import Mouse from '$lib/assets/svg/Mouse.svelte';
	import HeaderWave from '$lib/assets/svg/HeaderWave.svelte';
	import Sun from '$lib/assets/svg/Sun.svelte';
	import MultipleArrows from '$lib/assets/svg/MultipleArrows.svelte';
	import Wave2 from '$lib/assets/svg/Wave2.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	export let logos: Array<any>;
</script>

<div class="relative h-screen bg-rock" use:inview={options} on:inview_change={handleChange}>
	<div class="big-container relative z-10 flex h-full items-center justify-center">
		<div class="flex flex-col lg:pb-50">
			<h1 class="text-3 lg:text-2 text-center animate-fade animate-delay-100">
				Construisons <br class="max-lg:hidden" />des stratégies digitales
				<br class="max-lg:hidden" />qui transforment.
			</h1>
			<h2 class="text-4 mt-12 lg:text-3 font-normal text-electric text-center tracking-wide animate-fade animate-delay-500">Le digital à pleines dents&nbsp;!</h2>
			<h3 class="mt-6 pr-12 text-6 font-bold text-bright text-center animate-fade animate-delay-1000">
				Beavers, agence digitale experte en média et performance,<br class="max-lg:hidden" /> aide les marques ambitieuses à atteindre leurs objectifs<br class="max-lg:hidden" /> de visibilité, d’acquisition et de croissance.
			</h3>
			<div class="mt-[calc(100vh*0.06)] flex w-8 flex-col items-center justify-center gap-2 mx-auto">
				<Mouse newClass="h-auto w-full" color="#FFF" />
				<ArrowBottom newClass="animate-bounce max-lg:h-16" color="#FFF" />
			</div>
		</div>
	</div>
	<HeaderWave />
	<div class="absolute inset-x-0 bottom-0 z-0 h-20 w-full bg-seance max-lg:hidden" />
	<div class="absolute z-10 inset-x-0 bottom-20 w-full flex gap-8 justify-around max-lg:hidden">
		{#each logos as logo, i}
			{#if isInView}
			<div class="flex h-[7rem] w-[14rem] items-center justify-center opacity-30">
				<img
					src={logo.src}
					alt={logo.title}
					class="{logo.newClass} {isInView ? 'animate-fade' : ''}"
					style="animation-delay: {2000 + 300 * i}ms;"
				/>
			</div>
			{/if}
		{/each}
	</div>
	<Sun
		newClass="animate-once w-20 h-auto absolute right-1/3 top-1/4 animate-ping z-50 max-lg:hidden {isInView
			? 'animate-ping animate-delay-500'
			: 'opacity-0'}"
		color="#8013BD"
	/>
	<Sun
		newClass="animate-once w-24 h-auto absolute right-1/4 top-1/2 animate-ping z-50 max-lg:hidden {isInView
			? 'animate-ping animate-delay-1000'
			: 'opacity-0'}"
		color="#00FFDA"
	/>
	<MultipleArrows
		newClass="absolute bottom-1/3 left-1/5 fill-bright animate-fade animate-delay-700 z-50 max-lg:hidden"
	/>
	<Wave2
		newClass="absolute top-[35%] right-2/3 fill-bright animate-shake animate-delay-1000 z-50 max-lg:hidden"
	/>
	<Wave2 newClass="absolute top-2/3 left-2/3 fill-seance animate-shake animate-delay-500 z-50 max-lg:hidden" />
</div>
