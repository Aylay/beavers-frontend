<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Line from '../utilities/Line.svelte';

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
	class="big-container flex items-center gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="flex-1 max-lg:order-2">
		<Line />
		<div class="relative">
      <span
        use:inview={options}
        on:inview_change={handleChange}
        class="absolute whitespace-nowrap left-1/2 top-0 -z-10 w-screen -translate-y-1/2 transform text-1 text-seance opacity-0 {isInView
          ? 'animate-title'
          : ''}"
      >
        The Ocean Cleanup
      </span>
      <h2 class="w-full text-3 text-seance">
        La <span class="text-[5.7rem] leading-[3rem] text-bright font-normal font-highlight">mission</span> de<br />The Ocean Cleanup
      </h2>
    </div>
		<div
			class="mb-16 mt-8 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				The Ocean Cleanup est une association fondée en 2013 ayant pour but de nettoyer les océans des déchets plastiques qui les polluent de plus en plus.
			</p>
			<p class="text-6">
				Le Néerlandais Boyan Slat a imaginé un système de recueil et de filtrage des cours d’eau pour récupérer et traiter tout le plastique qui y est jeté.
			</p>
			<p class="text-6">
				Le deuxième objectif de The Ocean CleanUp est d'empêcher les ruisseaux de déverser les déchets plastiques dans l'océan.
			</p>
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
					<source srcset="/img/rse/the-ocean-cleanup.webp" type="image/webp">
					<source srcset="/img/rse/the-ocean-cleanup.png" type="image/png">
					<img
						src="/img/rse/the-ocean-cleanup.png"
						alt="The Ocean Cleanup"
						class="w-full {isInViewImg ? 'animate-fade' : ''}"
					/>
				</picture>
        <div class="absolute rounded-full bg-white w-64 h-64 top-2/3 lg:top-4 -left-8 lg:-left-24 flex justify-center items-center animate-delay-500 {isInView
          ? 'animate-fade'
          : 'opacity-0'}">
					<picture>
						<source srcset="/img/the_ocean_cleanup-beavers.webp" type="image/webp">
						<source srcset="/img/the_ocean_cleanup-beavers.png" type="image/png"> 
						<img src="/img/the_ocean_cleanup-beavers.png" alt="The Ocean Cleanup x Beavers Logo" class="max-w-[12.5rem] h-auto">
					</picture>
        </div>
        {/if}
		</div>
	</div>
</div>
