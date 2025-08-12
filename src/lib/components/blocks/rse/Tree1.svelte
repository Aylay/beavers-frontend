<script lang="ts">
	import { page } from '$app/stores';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Line from '../utilities/Line.svelte';
	import Tree2 from '$lib/assets/svg/Tree2.svelte';
	import Cloud from '$lib/assets/svg/Cloud.svelte';
	import TreeNation from '$lib/assets/svg/TreeNationIcon.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	let isInViewImg: boolean;
	const optionsImg: Options = {
		unobserveOnEnter: true,
		rootMargin: '50px'
	};

	const handleChangeImg = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInViewImg = detail.inView;
	};

	const treeNation: any = $page.data.treeNation;
</script>

<div
	class="big-container flex items-center gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="flex-1 max-lg:order-2">
		<Line />
		<div class="relative">
			<span
				class="absolute top-0 left-1/2 -z-10 w-screen -translate-y-1/2 transform text-1 whitespace-nowrap text-seance opacity-0 {isInView
					? 'animate-title'
					: ''}"
			>
				Tree Nation
			</span>
			<h2 class="w-full text-3 text-seance">
				La <span class="font-highlight text-[5.7rem] leading-[3rem] font-normal text-bright"
					>mission</span
				> de Tree Nation
			</h2>
		</div>
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Tree-Nation est une Organisation à but non lucratif, fondée en 2006 par Maxime Renaudin, qui
				permet aux citoyens comme aux entreprises de planter des arbres partout dans le monde et de
				compenser leurs émissions de CO2.
			</p>
			<p class="mt-12 text-6">
				La forêt Beavers x Tree-Nation <span class="font-bold text-electric">grâce à vous</span> :
			</p>
			<div class="mt-2 flex justify-between max-lg:flex-col max-lg:gap-8">
				<div
					class="flex flex-1 items-center gap-8 animate-delay-500 {isInView ? 'animate-fade' : ''}"
				>
					<div class="max-lg:flex max-lg:w-1/5 max-lg:justify-end">
						<Tree2 />
					</div>
					<div class="flex flex-col gap-2">
						<h3 class="text-5 font-bold text-bright">
							{treeNation.tree_count.toLocaleString()} arbres
						</h3>
						<p class="text-6">Total d'arbres plantés</p>
					</div>
				</div>
				<div
					class="flex flex-1 items-center gap-8 animate-delay-[750ms] {isInView
						? 'animate-fade'
						: ''}"
				>
					<div class="max-lg:flex max-lg:w-1/5 max-lg:justify-end">
						<Cloud />
					</div>
					<div class="flex flex-col gap-2">
						<h3 class="text-5 font-bold text-bright">
							{treeNation.co2_compensated_tons.toLocaleString()} tonnes
						</h3>
						<p class="text-6">Total de CO2 capturés</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="relative flex flex-1 items-center justify-center max-lg:order-1">
		<div
			class="relative w-full lg:max-w-[45rem]"
			use:inview={optionsImg}
			on:inview_change={handleChangeImg}
		>
			{#if isInViewImg}
				<picture>
					<source srcset="/img/rse/tree-nation.webp" type="image/webp" />
					<source srcset="/img/rse/tree-nation.png" type="image/png" />
					<img
						src="/img/rse/tree-nation.png"
						alt="Tree Nation"
						class="w-full {isInViewImg ? 'animate-fade' : ''}"
					/>
				</picture>
				<div
					class="absolute top-2/3 -left-8 flex h-64 w-64 items-center justify-center rounded-full bg-white animate-delay-500 lg:top-4 lg:-left-24 {isInView
						? 'animate-fade'
						: 'opacity-0'}"
				>
					<TreeNation newClass="max-w-[12.5rem] w-full h-auto" />
				</div>
			{/if}
		</div>
	</div>
</div>
