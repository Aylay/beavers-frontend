<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Line from '$lib/components/blocks/utilities/Line.svelte';
	import LeadForm from '$lib/components/blocks/lp/LeadForm.svelte';
	import Star from '$lib/assets/svg/Star.svelte';
	import Trafic from '$lib/assets/svg/Trafic.svelte';
	import Conversion from '$lib/assets/svg/Conversion.svelte';

	const words = ['Habitat', 'Ameublement', 'Rendez-vous', 'Demande de devis', 'Informations'];

	const title =
		'Agence digitale spécialisée <span class="font-highlight text-[5.7rem] leading-[3rem] text-bright font-normal">Habitat</span>';

	let allWords: Array<string> = [];
	for (const word of words) {
		const newWords = word.split(' ');
		allWords = allWords.concat(newWords);
	}
	allWords = allWords.concat(allWords);
	allWords = allWords.concat(allWords);

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div
	class="relative flex items-center justify-center overflow-hidden bg-rock max-lg:pt-60 max-lg:pb-28 lg:h-screen"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div
		class="big-container relative z-20 flex items-center justify-between gap-16 bg-rock max-lg:flex-col lg:gap-32"
	>
		<div class="flex-1">
			<Line />
			<h1 class="text-3 text-seance">
				{@html title}
			</h1>
			<h2 class="mt-8 text-5 lg:text-4 lg:leading-tight">
				Nous propulsons les pros de l'habitat<br /><span class="text-bright-turquoise"
					>vers leur réussite digitale</span
				>
			</h2>
			<div class="mt-16 flex flex-col justify-between gap-12">
				<div
					class="flex items-center gap-4 animate-delay-[750ms] {isInView
						? 'animate-fade'
						: 'opacity-0'}"
				>
					<Star newClass="w-12 h-auto fill-seance" />
					<h3 class="text-5 font-bold">Notoriété</h3>
				</div>
				<div
					class="flex items-center gap-4 animate-delay-1000 {isInView
						? 'animate-fade'
						: 'opacity-0'}"
				>
					<Trafic newClass="w-12 h-auto" fill="#8013BD" />
					<h3 class="text-5 font-bold">Trafic</h3>
				</div>
				<div
					class="flex items-center gap-4 animate-delay-[1250ms] {isInView
						? 'animate-fade'
						: 'opacity-0'}"
				>
					<Conversion newClass="w-12 h-auto fill-seance" />
					<h3 class="text-5 font-bold">Conversion</h3>
				</div>
			</div>
		</div>
		<div class="w-full py-20 lg:max-w-[73rem] lg:px-20" id="lp-habitat">
			<LeadForm />
		</div>
	</div>
	<div
		class="absolute inset-y-0 right-0 z-0 flex max-h-full w-1/3 items-center overflow-hidden bg-bright max-lg:hidden"
	>
		<div class="w-full scale-105 transform">
			{#each allWords as word, i}
				<span
					class="animate-fade text-1 leading-none tracking-wider break-all text-bright-turquoise"
					style="animation-delay: {150 * i}ms;"
				>
					{word}
				</span>
			{/each}
		</div>
	</div>
</div>
