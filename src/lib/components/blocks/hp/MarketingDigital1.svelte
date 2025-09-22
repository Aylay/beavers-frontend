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
</script>

<div
	class="big-container flex items-center gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="flex-1">
		<Line />
		<Title first="Digital Média" />
		<h3
			class="mt-2 font-highlight text-4 text-bright lg:animate-delay-200 {isInView
				? 'lg:animate-fade-right'
				: 'lg:opacity-0'}"
		>
			Votre plan média sur mesure
		</h3>
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Beavers s’engage à vous accompagner dans toute votre stratégie digitale. Dans un univers où les plateformes, les comportements et les technologies évoluent chaque jour, nos castors mobilisent leur créativité et leur expérience pour concevoir des campagnes performantes et durables. <br /><br />
				Nous travaillons à la croisée du média et de la data, afin de transformer vos investissements en résultats mesurables. Qu’il s’agisse de gagner en visibilité, d’acquérir de nouveaux clients ou de booster votre croissance, nous élaborons des dispositifs sur mesure, toujours alignés avec vos objectifs business.
			</p>
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
					<source srcset="/img/hp/md-1.webp" type="image/webp" />
					<source srcset="/img/hp/md-1.jpg" type="image/png" />
					<img
						src="/img/hp/md-1.jpg"
						alt="Homme en costume poussant un caddie vide en pleine rue urbaine, scène de vie absurde et humoristique"
						class="w-full overflow-hidden rounded-lg {isInViewImg ? 'animate-fade' : 'opacity-0'}"
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
