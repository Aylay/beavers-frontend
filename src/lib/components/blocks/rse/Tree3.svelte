<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import Line from '$lib/components/blocks/utilities/Line.svelte';
	import Cta from '../utilities/CTA.svelte';

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
</script>

<div
	class="big-container flex gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div
		class="relative flex flex-1 justify-center gap-8"
		use:inview={optionsImg}
		on:inview_change={handleChangeImg}
	>
		<div class="flex flex-1 flex-col gap-8">
			<div class="relative flex-3">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/rse/tree-nation-2.webp" type="image/webp" />
						<source srcset="/img/rse/tree-nation-2.jpg" type="image/jpeg" />
						<img
							src="/img/rse/tree-nation-2.jpg"
							alt="Tree-Nation"
							class="h-full w-full overflow-hidden rounded-lg object-cover {isInViewImg
								? 'animate-fade'
								: 'opacity-0'}"
						/>
					</picture>
				{/if}
			</div>
			<div class="relative flex-2">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/rse/tree-nation-3.webp" type="image/webp" />
						<source srcset="/img/rse/tree-nation-3.jpg" type="image/jpeg" />
						<img
							src="/img/rse/tree-nation-3.jpg"
							alt="Tree-Nation"
							class="h-full w-full overflow-hidden rounded-lg object-cover {isInViewImg
								? 'animate-fade'
								: 'opacity-0'}"
						/>
					</picture>
				{/if}
			</div>
		</div>
		<div class="relative flex flex-1 items-center">
			<div class="relative w-full lg:h-1/2">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/rse/tree-nation-4.webp" type="image/webp" />
						<source srcset="/img/rse/tree-nation-4.jpg" type="image/jpeg" />
						<img
							src="/img/rse/tree-nation-4.jpg"
							alt="Tree-Nation"
							class="h-full w-full overflow-hidden rounded-lg object-cover {isInViewImg
								? 'animate-fade'
								: 'opacity-0'}"
						/>
					</picture>
				{/if}
			</div>
		</div>
	</div>
	<div class="lg:flex-1">
		<Line />
		<h2 class="w-full max-w-[47rem] text-3 text-seance">
			Des arbres pour <span
				class="font-highlight text-[5.7rem] leading-[3rem] font-normal text-bright">la vie</span
			>, la nôtre
		</h2>
		<p
			class="my-8 text-6 font-semibold text-bright animate-duration-200 {isInView
				? 'animate-fade-right'
				: 'opacity-0'}"
		>
			La déforestation empêche les castors de construire, mais aussi de vivre, comment capturer le
			CO2 sans arbre ?
		</p>
		<p class="mb-8 text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Sans langue de bois (et nous sommes des castors), nous pensons que c’est avec l’effort de
			chacun que nous pouvons réaliser de grandes choses. Nous sommes sensibles à notre
			environnement et aux animaux victimes de la déforestation. En contribuant à la reforestation
			nous capturons du CO2 pour respirer, et nous alimentons nos stocks de bois pour bâtir ensemble
			de grands projets.
		</p>
		<p class="text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			La forêt de Beavers avec Tree-Nation
		</p>
		<div class="mt-20 animate-delay-1000 {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta
				label="Tree-Nation"
				href="https://tree-nation.com/fr/profil/impact/beavers"
				type="transparent"
				blank={true}
			/>
		</div>
	</div>
</div>
