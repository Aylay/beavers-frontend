<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Title from '$lib/components/blocks/utilities/Title.svelte';
	import Line from '$lib/components/blocks/utilities/Line.svelte';
	import Cta from '$lib/components/blocks/utilities/CTA.svelte';
	import Star from '$lib/assets/svg/Star.svelte';
	import Thumb from '$lib/assets/svg/Thumb.svelte';
	import Baguette2 from '$lib/assets/svg/Baguette2.svelte';
	import Wave from '$lib/assets/svg/Wave.svelte';
	import Conversion from '$lib/assets/svg/Conversion.svelte';

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
				<Baguette2 newClass="max-lg:h-14 h-20 w-auto fill-seance" />
			</div>
			<div class="max-lg:flex-1">
				<Line />
				<Title first="Influence marketing" />
			</div>
		</div>
		<p
			class="mb-8 text-6 font-semibold text-bright animate-duration-200 {isInView
				? 'animate-fade-right'
				: 'opacity-0'}"
		>
			27 % des jeunes sont actifs sur les plateformes pour suivre leurs idoles ou des influenceurs.
		</p>
		<p class="mb-8 text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			De nos jours, de plus en plus de marques du secteur de l'habitat investissent dans l'influence
			marketing. Vos clients sont à la recherche d'inspiration, et c'est auprès des influenceurs les
			plus suivis qu'ils jugent la crédibilité de votre marque.
		</p>
		<p class="text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Créez un sentiment d'appartenance en travaillant avec des influenceurs du secteur de l'habitat
			qui vous ressemblent et qui peuvent véhiculer les valeurs de votre marque. Après tout, ce sont
			encore vos clients qui parlent le mieux de votre marque. Développez un réseau d'ambassadeurs
			sur les réseaux sociaux et renforcez votre notoriété et votre réputation dans le secteur de
			l'habitat !
		</p>
		<div class="mt-16 flex gap-20 max-lg:flex-col max-lg:gap-4">
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
				<Thumb newClass="w-12 h-auto fill-seance" />
				<h3 class="text-5 font-bold">Réputation</h3>
			</div>
			<div
				class="flex items-center gap-4 animate-delay-[1250ms] {isInView
					? 'animate-fade'
					: 'opacity-0'}"
			>
				<Conversion newClass="w-12 h-auto fill-seance" />
				<h3 class="text-5 font-bold">Acquisition</h3>
			</div>
		</div>
		<div class="mt-20 animate-delay-[1500ms] {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Trouver mon Influenceur.se" href="/contactez-nous" type="transparent" />
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
					<source srcset="/img/mkt/influence.webp" type="image/webp" />
					<source srcset="/img/mkt/influence.png" type="image/png" />
					<img
						src="/img/mkt/influence.png"
						alt="Influence Marketing"
						class="w-full {isInViewImg ? 'animate-fade' : ''}"
					/>
				</picture>
			{/if}
			<div
				class="absolute -top-16 left-1/2 h-auto w-[6.2rem] rotate-[-45deg] {isInView
					? 'animate-fade'
					: 'opacity-0'}"
			>
				<Wave color="#00FFDA" />
			</div>
			<div
				class="absolute right-1/2 -bottom-16 h-auto w-[6.2rem] rotate-[-45deg] {isInView
					? 'animate-fade'
					: 'opacity-0'}"
			>
				<Wave />
			</div>
		</div>
	</div>
</div>
