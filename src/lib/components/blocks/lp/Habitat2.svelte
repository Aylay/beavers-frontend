<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Title from '$lib/components/blocks/utilities/Title.svelte';
	import Line from '$lib/components/blocks/utilities/Line.svelte';
	import Cta from '$lib/components/blocks/utilities/CTA.svelte';

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

	const tops = ['-right-8', '-right-4', 'right-0', 'right-4'];

	const bottoms = ['left-0', 'left-8', 'left-16', 'left-24'];

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
	<div class="lg:order-2 lg:flex-1">
		<Line />
		<Title first="Ciblages et Audiences" />
		<p class="my-8 text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Nous avons l’habitude de travailler les audiences prospects des professionels de l’habitat. En
			effet, sur Google ads, sur les réseaux sociaux ou encore en display, nous avons la possibilité
			de toucher vos audiences grâce à différents segments :
		</p>
		<ul
			class="flex flex-col gap-4 animate-delay-[750ms] {isInView
				? 'animate-fade-right'
				: 'opacity-0'}"
		>
			<li
				class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-seance before:content-['']"
			>
				Segment propriétaires
			</li>
			<li
				class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-seance before:content-['']"
			>
				Nouveaux parents
			</li>
			<li
				class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-seance before:content-['']"
			>
				Déménagement
			</li>
			<li
				class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-seance before:content-['']"
			>
				En recherche de rénovation
			</li>
			<li
				class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-seance before:content-['']"
			>
				Design et décoration d’interieur
			</li>
			<li
				class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-seance before:content-['']"
			>
				Aménagement de jardin
			</li>
			<li
				class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-seance before:content-['']"
			>
				etc.
			</li>
		</ul>
		<div class="mt-20 animate-delay-1000 {isInView ? 'animate-fade' : 'opacity-0'}">
			<button
				class="rounded-[3rem] border-2 border-bright bg-transparent px-10 py-4 text-6 font-bold text-white transition-colors duration-300 hover:bg-bright hover:text-black"
				on:click={() => scrollToForm()}
			>
				Demande d'information
			</button>
		</div>
	</div>
	<div class="max-lg:hidden lg:order-1 lg:flex-1">
		<div
			class="relative mx-auto w-full lg:max-w-[45rem]"
			use:inview={optionsImg}
			on:inview_change={handleChangeImg}
		>
			{#if isInViewImg}
				<picture>
					<source srcset="/img/lp/habitat-2.webp" type="image/webp" />
					<source srcset="/img/lp/habitat-2.png" type="image/png" />
					<img
						src="/img/lp/habitat-2.png"
						alt="Meuble marron avec 3 tasses dessus"
						class="w-full {isInViewImg ? 'animate-fade' : ''}"
					/>
				</picture>
			{/if}

			{#each tops as top, i}
				<div
					class="absolute top-24 h-[1.5px] w-28 -rotate-45 transform bg-bright {top} {isInView
						? 'animate-fade'
						: 'opacity-0'}"
					style="animation-delay: {200 * i}ms;"
				/>
			{/each}

			{#each bottoms as bottom, i}
				<div
					class="absolute -bottom-4 h-[3px] w-44 -rotate-45 transform bg-bright {bottom} {isInView
						? 'animate-fade'
						: 'opacity-0'}"
					style="animation-delay: {800 + 200 * i}ms;"
				/>
			{/each}
		</div>
	</div>
</div>
