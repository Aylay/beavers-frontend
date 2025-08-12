<script lang="ts">
	import { page } from '$app/stores';

	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Cta from '../utilities/CTA.svelte';
	import Line from '../utilities/Line.svelte';
	import Title from '../utilities/Title.svelte';
	import Sun from '$lib/assets/svg/Sun.svelte';
	import TreeNation from '$lib/assets/svg/TreeNation.svelte';

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

	let trees = $page.data.treeNation.tree_count;
</script>

<div
	class="big-container flex items-center gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="flex-1">
		<Line />
		<Title first="Notre programme" second="RSE" />
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Nous soutenons deux associations pour la protection de notre environnement, en reversant 2%
				de notre chiffre d'affaires à The Ocean CleanUp et Tree-Nation.
			</p>
			<p class="text-6">Grâce à vous :</p>
			<ul class="mb-8 flex flex-col gap-4 {isInView ? 'animate-fade-right' : 'opacity-0'}">
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-seance before:content-['']"
				>
					Des fonds marins sont nettoyés chaque jour ;
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-seance before:content-['']"
				>
					+ de {(Math.floor(trees / 100) * 100).toLocaleString()} arbres ont été plantés.
				</li>
			</ul>
		</div>
		<div class="animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="En savoir plus" href="/programme-rse" type="transparent" />
		</div>
	</div>
	<div
		class="gap flex flex-1 justify-between gap-10"
		use:inview={optionsImg}
		on:inview_change={handleChangeImg}
	>
		<div class="relative flex-1 pt-40">
			<Sun
				newClass="absolute w-20 h-20 left-[15%] -top-10 animate-once animate-delay-1000 {isInViewImg
					? 'animate-ping'
					: 'opacity-0'}"
			/>
			{#if isInViewImg}
				<TreeNation
					newClass="absolute right-2 top-20 max-lg:w-full w-8/12 animate-delay-[800ms] {isInViewImg
						? 'animate-fade'
						: ''}"
				/>
			{/if}
			<div class="h-[26rem]">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/tree-nation.webp" type="image/webp" />
						<source srcset="/img/tree-nation.jpg" type="image/jpeg" />
						<img
							src="/img/tree-nation.jpg"
							alt="Femme qui plante un arbre"
							class="left h-full w-full rounded-2xl object-cover animate-delay-[600ms] {isInViewImg
								? 'animate-fade'
								: ''}"
						/>
					</picture>
				{/if}
			</div>
		</div>
		<div class="relative flex-1">
			<div class="relative h-[26rem]">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/the-ocean-cleanup.webp" type="image/webp" />
						<source srcset="/img/the-ocean-cleanup.jpg" type="image/jpeg" />
						<img
							src="/img/the-ocean-cleanup.jpg"
							alt="Tortue qui nage en pleine mer ou océan"
							class="h-full w-full rounded-2xl object-cover animate-delay-[1500ms] {isInViewImg
								? 'animate-fade'
								: ''}"
						/>
					</picture>
					<picture>
						<source srcset="/img/the_ocean_cleanup-beavers.webp" type="image/webp" />
						<source srcset="/img/the_ocean_cleanup-beavers.png" type="image/png" />
						<img
							src="/img/the_ocean_cleanup-beavers.png"
							alt="badge The Ocean Cleanup"
							class="absolute top-full left-8 w-48 -translate-y-1/2 transform animate-delay-[1700ms] {isInViewImg
								? 'animate-fade'
								: ''}"
						/>
					</picture>
				{/if}
			</div>
			<Sun
				newClass="absolute w-36 h-36 left-0 top-full -mt-8 animate-once animate-delay-[1900ms] {isInViewImg
					? 'animate-ping'
					: 'opacity-0'}"
				color="#00FFDA"
			/>
		</div>
	</div>
</div>
