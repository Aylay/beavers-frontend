<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Title from '../utilities/Title.svelte';
	import Line from '../utilities/Line.svelte';
	import Plus from '$lib/assets/svg/Plus.svelte';

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

	const pluss: Array<string> = [
		'bottom-32 left-0 lg:-left-16',
		'bottom-32 left-16 lg:left-0',
		'bottom-16 left-0 lg:-left-16',
		'bottom-16 left-16 lg:left-0',
		'bottom-16 left-32 lg:left-16',
		'bottom-16 left-48 lg:left-32',
		'bottom-16 left-60 lg:left-48',
		'bottom-0 left-0 lg:-left-16',
		'bottom-0 left-16 lg:left-0',
		'bottom-0 left-32 lg:left-16',
		'bottom-0 left-48 lg:left-32',
		'bottom-0 left-60 lg:left-48'
	];

	function scrollToForm() {
		const lpHabitat = document.getElementById('lp-habitat');

		if (lpHabitat) {
			window.scrollTo({
				top: getOffsetTop(lpHabitat),
				behavior: 'smooth'
			});
		}
	}

	function getOffsetTop(element: any): number {
		if (!element) return 0;
		return getOffsetTop(element.offsetParent) + element.offsetTop;
	}
</script>

<div
	class="big-container flex items-center gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="flex-1">
		<Line />
		<Title first="Notre offre pour les professionnels de l’habitat" />
		<h3
			class="mt-2 font-highlight text-4 text-bright lg:animate-delay-200 {isInView
				? 'lg:animate-fade-right'
				: 'lg:opacity-0'}"
		>
			Visibilité / drive to store / visites online / ventes en ligne
		</h3>
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Visibilité, drive to strore, génération de leads, vente, recrutement de franchisés, visites
				sur le site, etc.
			</p>
			<p class="text-6">
				Pour chacun de vos objectifs, nous activons une stratégie digitale personnalisée afin de
				booster vos performances.
			</p>
			<p class="text-6">
				Nous analysons votre entreprise, vos concurrents, et votre public cible pour concevoir une
				stratégie digitale sur mesure
			</p>
		</div>
		<div class="mt-20 flex gap-12 max-lg:flex-col">
			<div class="animate-delay-1000 {isInView ? 'animate-fade' : 'opacity-0'}">
				<button
					class="rounded-[3rem] border-2 border-bright bg-transparent px-10 py-4 text-6 font-bold text-white transition-colors duration-300 hover:bg-bright hover:text-black"
					on:click={() => scrollToForm()}
				>
					Demander un appel decouverte
				</button>
			</div>
		</div>
	</div>
	<div class="relative flex flex-1 items-center justify-center max-lg:hidden">
		<div
			class="relative w-full lg:max-w-[45rem]"
			use:inview={optionsImg}
			on:inview_change={handleChangeImg}
		>
			{#if isInViewImg}
				<picture>
					<source srcset="/img/lp/habitat-1.webp" type="image/webp" />
					<source srcset="/img/lp/habitat-1.png" type="image/png" />
					<img
						src="/img/lp/habitat-1.png"
						alt="2 personnes dans une brouette en train de faire des travaux"
						class="w-full {isInViewImg ? 'animate-fade' : ''}"
					/>
				</picture>
			{/if}
			{#each pluss as plus, i}
				<div
					class="absolute h-auto w-[1.8rem] {plus} {isInView ? 'animate-fade' : 'opacity-0'}"
					style="animation-delay: {500 + 200 * i}ms;"
				>
					<Plus />
				</div>
			{/each}
		</div>
	</div>
</div>
