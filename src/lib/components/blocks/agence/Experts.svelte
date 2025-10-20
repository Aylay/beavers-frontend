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

<div
	class="big-container flex gap-32 max-lg:flex-col lg:items-center lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="lg:flex-1">
		<Line />
		<Title first="Agence digitale uniquement composée" second="d'experts" />
		<p class="mt-8 text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Beavers, c’est un savant mélange d’expériences en agence de communication et chez l’annonceur. Cette double vision nous permet de comprendre vos enjeux business, tout en vous proposant des stratégies digitales à la fois performantes, innovantes et adaptées à vos objectifs.
		</p>
	</div>
	<div
		class="relative flex flex-1 justify-center gap-8 max-lg:hidden"
		use:inview={optionsImg}
		on:inview_change={handleChangeImg}
	>
		<div class="relative flex flex-1 items-center">
			<div class="relative w-full lg:h-1/2">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/hp/manifesto-2-3.webp" type="image/webp" />
						<source srcset="/img/hp/manifesto-2-3.jpg" type="image/jpeg" />
						<img
							src="/img/hp/manifesto-2-3.jpg"
							alt="4 personnes qui se tiennent le poignet"
							class="h-full w-full overflow-hidden rounded-lg object-cover {isInViewImg
								? 'animate-fade'
								: 'opacity-0'}"
						/>
					</picture>
				{/if}
				<Arc newClass="fill-bright absolute -bottom-28 right-0 w-20 h-auto" />
			</div>
		</div>
		<div class="flex flex-1 flex-col gap-8">
			<div class="relative flex-3">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/agence/agence-1.webp" type="image/webp" />
						<source srcset="/img/agence/agence-1.jpg" type="image/jpeg" />
						<img
							src="/img/agence/agence-1.jpg"
							alt="Un pot de fausse fleur + un téléphone avec Instagram"
							class="h-full w-full overflow-hidden rounded-lg object-cover {isInViewImg
								? 'animate-fade'
								: 'opacity-0'}"
						/>
					</picture>
				{/if}
				<Arc newClass="fill-seance absolute -top-20 right-8 w-14 h-auto" />
			</div>
			<div class="flex-2">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/agence/agence-2.webp" type="image/webp" />
						<source srcset="/img/agence/agence-2.jpg" type="image/jpeg" />
						<img
							src="/img/agence/agence-2.jpg"
							alt="Tasse à café tenue par une personne"
							class="h-full w-full overflow-hidden rounded-lg object-cover {isInViewImg
								? 'animate-fade'
								: 'opacity-0'}"
						/>
					</picture>
				{/if}
			</div>
		</div>
	</div>
</div>
