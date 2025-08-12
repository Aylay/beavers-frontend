<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Cta from '$lib/components/blocks/utilities/CTA.svelte';
	import Sun from '$lib/assets/svg/Sun.svelte';
	import Wave from '$lib/assets/svg/Wave.svelte';
	import MultipleArrows2 from '$lib/assets/svg/MultipleArrows2.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	export let text1: string;
	export let text2: string;
	export let text3: string;
	export let text4: string;
</script>

<div
	class="small-container relative text-center"
	use:inview={options}
	on:inview_change={handleChange}
>
	<h2
		class="mb-4 text-[calc(100vw*0.14)] leading-none font-extrabold uppercase max-lg:w-screen max-lg:-translate-x-[5%] max-lg:transform max-lg:overflow-visible lg:text-[8.5rem]"
	>
		{@html text1}<span class="text-outline block">{@html text2}</span>
	</h2>
	<p
		class="relative mt-4 pb-12 text-6 font-semibold text-bright after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-60 after:-translate-x-1/2 after:transform after:bg-seance lg:px-8"
	>
		{@html text3}
	</p>
	<p class="mt-12 text-6 lg:px-8">
		{@html text4}
	</p>
	<div class="mt-20">
		<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
	</div>
	<Sun
		newClass="animate-once w-20 h-auto absolute right-32 -top-14 {isInView
			? 'animate-ping'
			: 'opacity-0'}"
		color="#00FFDA"
	/>
	<div
		class="absolute top-1/2 -left-32 h-auto w-[6.2rem] rotate-[-45deg] {isInView
			? 'animate-fade'
			: 'opacity-0'}"
	>
		<Wave />
	</div>
	<MultipleArrows2 newClass="absolute bottom-0 right-0 {isInView ? 'animate-jump' : 'opacity-0'}" />
</div>
