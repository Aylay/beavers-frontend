<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

  import Title from '$lib/components/blocks/utilities/Title.svelte';
  import Line from '$lib/components/blocks/utilities/Line.svelte';
	import Arc from '$lib/assets/svg/Arc.svelte';

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

<div class="big-container flex gap-32 lg:items-center max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="lg:flex-1">
		<Line />
		<Title first="Agence digitale uniquement composée" second="d'experts" />
		<p class="mt-8 text-6 animate-delay-500 {isInView
			? 'animate-fade'
			: 'opacity-0'}">
			Beavers est un mélange d'expériences en agence de communication et chez l’annonceur pour des clients dans le domaine de l'habitat. Ces expériences nous permettent de comprendre vos enjeux tout en vous proposant les stratégies les plus adaptées et les plus innovantes du marché.
		</p>
	</div>
	<div class="relative flex flex-1 justify-center gap-8 max-lg:hidden" use:inview={optionsImg} on:inview_change={handleChangeImg}>
		<div class="relative flex flex-1 items-center">
			<div class="w-full lg:h-1/2 relative">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/hp/manifesto-2-3.webp" type="image/webp">
						<source srcset="/img/hp/manifesto-2-3.jpg" type="image/jpeg">
						<img
							src="/img/hp/manifesto-2-3.jpg"
							alt="4 personnes qui se tiennent le poignet"
							class="h-full w-full object-cover overflow-hidden rounded-lg {isInViewImg ? 'animate-fade' : 'opacity-0'}"
						/>
					</picture>
				{/if}
				<Arc newClass="fill-bright absolute -bottom-28 right-0 w-20 h-auto" />
			</div>
		</div>
		<div class="flex flex-1 flex-col gap-8">
			<div class="flex-3 relative">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/agence/agence-1.webp" type="image/webp">
						<source srcset="/img/agence/agence-1.jpg" type="image/jpeg">
						<img
							src="/img/agence/agence-1.jpg"
							alt="Un pot de fausse fleur + un téléphone avec Instagram"
							class="h-full w-full object-cover overflow-hidden rounded-lg {isInViewImg ? 'animate-fade' : 'opacity-0'}"
						/>
					</picture>
				{/if}
				<Arc newClass="fill-seance absolute -top-20 right-8 w-14 h-auto" />
			</div>
			<div class="flex-2">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/agence/agence-2.webp" type="image/webp">
						<source srcset="/img/agence/agence-2.jpg" type="image/jpeg">
						<img
							src="/img/agence/agence-2.jpg"
							alt="Tasse à café tenue par une personne"
							class="h-full w-full object-cover overflow-hidden rounded-lg {isInViewImg ? 'animate-fade' : 'opacity-0'}"
						/>
					</picture>
				{/if}
			</div>
		</div>
	</div>
</div>
