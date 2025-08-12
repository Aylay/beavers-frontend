<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Title from '$lib/components/blocks/utilities/Title.svelte';
	import Line from '$lib/components/blocks/utilities/Line.svelte';
	import Cta from '$lib/components/blocks/utilities/CTA.svelte';
	import GoogleAds from '$lib/assets/svg/GoogleAds.svelte';
	import Star from '$lib/assets/svg/Star.svelte';
	import Trafic from '$lib/assets/svg/Trafic.svelte';
	import Conversion from '$lib/assets/svg/Conversion.svelte';
	import MultipleArrows from '$lib/assets/svg/MultipleArrows.svelte';

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
	<div class="lg:flex-1">
		<div class="mb-8 flex items-center gap-10">
			<div
				class="flex h-40 w-40 items-center justify-center rounded-full bg-white max-lg:h-28 max-lg:w-28"
			>
				<GoogleAds newClass="max-lg:h-14 h-20 w-auto" />
			</div>
			<div class="max-lg:flex-1">
				<Line />
				<Title first="Google Ads" />
			</div>
		</div>
		<p
			class="mb-8 text-6 font-semibold text-bright animate-duration-200 {isInView
				? 'animate-fade-right'
				: 'opacity-0'}"
		>
			Beavers, votre partenaire digital qui bâtit votre présence dans le secteur de l'habitat. Soyez
			visibles sur les résultats de recherche Google de vos prospects et assurez votre place en tête
			de liste.
		</p>
		<p class="mb-8 text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Vos prospects recherchent exactement ce que vous offrez ? Nous choisissons selon votre
			objectif, une stratégie d'achat de mots clés pour être vu, adoré et adopté.
		</p>
		<p class="mb-8 text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Ne laissez aucun prospect égaré ! Avec nos extensions, nous les guidons directement vers ce
			qui les intéresse sur votre site, boostant ainsi vos conversions avec facilité.
		</p>
		<p class="mb-8 text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Chez Beavers, on jongle avec les enchères, les audiences et les supports, que ce soit sur
			ordinateur, tablette ou mobile, pour maximiser vos performances dans le secteur de l'habitat.
			Votre succès n'a pas de limites avec nous !
		</p>
		<p class="text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Découvrez l'art de toucher vos clients : diffusez vos spots vidéos sur YouTube Ads et ciblez
			précisément leurs centres d'intérêts. Vous apparaîtrez même à la télé !
		</p>
		<div class="mt-16 flex justify-between max-lg:flex-col max-lg:gap-4">
			<div
				class="flex items-center gap-4 animate-delay-[750ms] {isInView
					? 'animate-fade'
					: 'opacity-0'}"
			>
				<Star newClass="w-12 h-auto fill-seance" />
				<h3 class="text-5 font-bold">Notoriété</h3>
			</div>
			<div
				class="flex items-center gap-4 animate-delay-1000 {isInView ? 'animate-fade' : 'opacity-0'}"
			>
				<Trafic newClass="w-12 h-auto fill-seance" />
				<h3 class="text-5 font-bold">Trafic</h3>
			</div>
			<div
				class="flex items-center gap-4 animate-delay-[1250ms] {isInView
					? 'animate-fade'
					: 'opacity-0'}"
			>
				<Conversion newClass="w-12 h-auto fill-seance" />
				<h3 class="text-5 font-bold">Conversion</h3>
			</div>
		</div>
		<div class="mt-20 flex gap-12 max-lg:flex-col">
			<div class="animate-delay-[1500ms] {isInView ? 'animate-fade' : 'opacity-0'}">
				<Cta label="Être 1er sur Google" href="/contactez-nous" type="transparent" />
			</div>
			<div class="animate-delay-[1700ms] {isInView ? 'animate-fade' : 'opacity-0'}">
				<Cta label="En savoir plus" href="/marketing-digital/google-ads" type="seance" />
			</div>
		</div>
	</div>
	<div class="max-lg:hidden lg:flex-1">
		<div
			class="relative mx-auto w-full lg:max-w-[45rem]"
			use:inview={optionsImg}
			on:inview_change={handleChangeImg}
		>
			{#if isInViewImg}
				<picture>
					<source srcset="/img/mkt/google.webp" type="image/webp" />
					<source srcset="/img/mkt/google.png" type="image/png" />
					<img
						src="/img/mkt/google.png"
						alt="Google Ads"
						class="w-full {isInViewImg ? 'animate-fade' : ''}"
					/>
				</picture>
			{/if}
			<MultipleArrows
				newClass="top-4 absolute right-24 fill-bright w-20 h-auto animate-delay-200 {isInViewImg
					? 'animate-fade'
					: 'opacity-0'}"
			/>
			<MultipleArrows
				newClass="bottom-0 absolute left-52 fill-seance w-16 h-auto animate-delay-500 {isInViewImg
					? 'animate-fade'
					: 'opacity-0'}"
			/>
		</div>
	</div>
</div>
