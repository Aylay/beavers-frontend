<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Sea from '$lib/assets/svg/Sea.svelte';
	import Shrimp from '$lib/assets/svg/Shrimp.svelte';
	import Fish from '$lib/assets/svg/Fish.svelte';
	import Bottle from '$lib/assets/svg/Bottle.svelte';
	import Shape from '$lib/assets/svg/Shape.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div class="big-container" use:inview={options} on:inview_change={handleChange}>
	<p class="text-center font-highlight text-[5.7rem] leading-[3rem] text-bright">
		Le saviez-vous ?
	</p>
	<div class="mt-20 flex justify-between gap-14 max-lg:flex-col lg:mt-40">
		<div
			class="flex flex-1 flex-col items-center gap-6 animate-delay-[250ms] {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<div class="relative">
				<Shape newClass="fill-seance" />
				<Sea newClass="absolute top-8 left-1/2 transform -translate-x-1/2" />
			</div>
			<h3 class="mt-4 text-center text-5">+ de 80%</h3>
			<p class="text-center text-6">des déchets de nos océans sont en plastique.</p>
		</div>
		<div
			class="flex flex-1 flex-col items-center gap-6 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<div class="relative">
				<Shape newClass="fill-seance" />
				<Shrimp newClass="absolute top-7 left-1/2 transform -translate-x-1/2 rotate-180" />
			</div>
			<h3 class="mt-4 text-center text-5">+ de 3 800</h3>
			<p class="text-center text-6">espèces marines sont déjà impactées.</p>
		</div>
		<div
			class="flex flex-1 flex-col items-center gap-6 animate-delay-[750ms] {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<div class="relative">
				<Shape newClass="fill-seance" />
				<Fish newClass="absolute top-8 left-1/2 transform -translate-x-1/2" />
			</div>
			<h3 class="mt-4 text-center text-5">100 000</h3>
			<p class="text-center text-6">mammifères marins tués chaque année.</p>
		</div>
		<div
			class="flex flex-1 flex-col items-center gap-6 animate-delay-1000 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<div class="relative">
				<Shape newClass="fill-seance" />
				<Bottle newClass="absolute top-5 left-1/2 transform -translate-x-1/2" />
			</div>
			<h3 class="mt-4 text-center text-5">1</h3>
			<p class="text-center text-6">camion poubelle de 17 tonnes deversé chaque minute.</p>
		</div>
	</div>
	<p class="mt-16 text-center text-6">
		Sources 2023 : <a
			href="https://www.theseacleaners.org/"
			target="_blank"
			title="The Sea Cleaners"
			class="font-semibold text-electric underline hover:text-bright">The Sea Cleaners</a
		>
		&
		<a
			href="https://theoceancleanup.com/"
			target="_blank"
			title="The Ocean Cleanup"
			class="font-semibold text-electric underline hover:text-bright">The Ocean Cleanup</a
		>
	</p>
</div>
