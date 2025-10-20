<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Title from '$lib/components/blocks/utilities/Title.svelte';
	import Line from '$lib/components/blocks/utilities/Line.svelte';
	import Cta from '../utilities/CTA.svelte';
	import Star from '$lib/assets/svg/Star.svelte';
	import Trafic from '$lib/assets/svg/Trafic.svelte';
	import Conversion from '$lib/assets/svg/Conversion.svelte';
	import Thumb from '$lib/assets/svg/Thumb.svelte';
	import Tiktok from '$lib/assets/svg/Tiktok.svelte';
	import Instagram from '$lib/assets/svg/Instagram.svelte';
	import Facebook from '$lib/assets/svg/Facebook.svelte';
	import Linkedin from '$lib/assets/svg/Linkedin.svelte';
	import Pinterest from '$lib/assets/svg/Pinterest.svelte';

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
		class="relative flex flex-1 justify-center gap-8 h-full"
		use:inview={optionsImg}
		on:inview_change={handleChangeImg}
	>
		<div class="flex flex-1 flex-col gap-8">
			<div class="relative flex-3">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/hp/manifesto-2-1.webp" type="image/webp" />
						<source srcset="/img/hp/manifesto-2-1.jpg" type="image/jpeg" />
						<img
							src="/img/hp/manifesto-2-1.jpg"
							alt="Une main qui tient un téléphone sur un fauteuil"
							class="h-full w-full overflow-hidden rounded-lg object-cover {isInViewImg
								? 'animate-fade'
								: 'opacity-0'}"
						/>
					</picture>
				{/if}
				<div
					class="absolute top-0 left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-bright animate-delay-[250ms] {isInViewImg
						? 'animate-fade'
						: 'opacity-0'}"
				>
					<Tiktok newClass="w-10 h-auto fill-seance" />
				</div>
			</div>
			<div class="relative flex-2">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/mkt/social-2.webp" type="image/webp" />
						<source srcset="/img/mkt/social-2.jpg" type="image/jpeg" />
						<img
							src="/img/mkt/social-2.jpg"
							alt="Personne tapant sur le clavier d'un ordinateur portable"
							class="h-full w-full overflow-hidden rounded-lg object-cover {isInViewImg
								? 'animate-fade'
								: 'opacity-0'}"
						/>
					</picture>
				{/if}
				<div
					class="absolute top-0 left-6 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-seance animate-delay-[750ms] {isInViewImg
						? 'animate-fade'
						: 'opacity-0'}"
				>
					<Instagram newClass="w-9 h-auto fill-white" />
				</div>
				<div
					class="absolute top-full left-full flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-bright animate-delay-1000 {isInViewImg
						? 'animate-fade'
						: 'opacity-0'}"
				>
					<Facebook newClass="h-8 w-auto fill-seance" />
				</div>
			</div>
		</div>
		<div class="relative flex flex-1 items-center">
			<div class="relative w-full lg:h-1/2">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/mkt/social-3.webp" type="image/webp" />
						<source srcset="/img/mkt/social-3.jpg" type="image/jpeg" />
						<img
							src="/img/mkt/social-3.jpg"
							alt="Personne regardant son téléphone avec Pinterest dessus"
							class="h-full w-full overflow-hidden rounded-lg object-cover {isInViewImg
								? 'animate-fade'
								: 'opacity-0'}"
						/>
					</picture>
				{/if}
				<div
					class="absolute -top-28 left-1/2 flex h-20 w-20 items-center justify-center rounded-full bg-seance animate-delay-[1250ms] {isInViewImg
						? 'animate-fade'
						: 'opacity-0'}"
				>
					<Linkedin newClass="w-10 h-auto fill-white" />
				</div>
				<div
					class="absolute -bottom-20 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-bright animate-delay-500 {isInViewImg
						? 'animate-fade'
						: 'opacity-0'}"
				>
					<Pinterest newClass="h-10 w-auto fill-seance" />
				</div>
			</div>
		</div>
	</div>
	<div class="lg:flex-1">
		<div class="mb-8 flex items-center gap-10">
			<div
				class="flex h-40 w-40 items-center justify-center rounded-full bg-white max-lg:h-28 max-lg:w-28"
			>
				<Thumb newClass="max-lg:h-14 h-20 w-auto fill-seance" />
			</div>
			<div>
				<Line />
				<Title first="Social Ads" />
			</div>
		</div>
		<p
			class="mb-8 text-6 font-semibold text-bright animate-duration-200 {isInView
				? 'animate-fade-right'
				: 'opacity-0'}"
		>
			Les réseaux sociaux font désormais partie du quotidien : <strong>2 français sur 3</strong> les utilisent chaque jour, pendant plus de <strong>2h30 en moyenne</strong>.<br />
			TikTok, Instagram, Facebook, LinkedIn ou encore Pinterest rythment la journée de vos clients — c’est là qu’ils s’inspirent, découvrent et interagissent avec les marques.
		</p>
		<p class="mb-8 text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Chez Beavers, nous vous aidons à tirer parti de ce temps d’attention précieux en créant des campagnes Social Ads performantes, pensées pour vos objectifs : notoriété, trafic ou conversion.<br />
			Nos stratégies s’appuient sur une approche <strong>“right place, right time, right people”</strong> : diffuser le bon message, au bon moment, à la bonne audience.
		</p>
		<p class="mb-8 text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Que votre priorité soit de renforcer l’image de votre marque, d’attirer de nouveaux prospects ou de stimuler les ventes, nous concevons des campagnes créatives et mesurables.<br />
			De la phase d’analyse des audiences à l’optimisation continue, chaque campagne est pilotée avec rigueur et transparence pour maximiser vos résultats.
		</p>
		<p class="mb-8 text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Grâce aux <a
				class="font-semibold text-electric underline transition-colors hover:text-bright"
				href="/la-pause-cafe/media/agence-social-ads-propulsez-visibilite-ligne"
				title="Agence social ads : propulsez votre visibilité en ligne"><strong>social media ads</strong></a
			>, soyez visibles là où vos clients passent le plus de temps.<br />
			Nous gérons vos campagnes sur <a
				title="Agence Facebook Ads : Propulsez votre visibilité et boostez vos ventes sur Facebook"
				href="/l-agence-beavers/agence-facebook-ads"
				class="font-semibold text-electric underline transition-colors hover:text-bright"
				>Meta Ads (Facebook & Instagram)</a>, TikTok Ads, <a
				title="Agence Linkedin Ads"
				href="/l-agence-beavers/agence-linkedin-ads"
				class="font-semibold text-electric underline transition-colors hover:text-bright"
				>LinkedIn Ads</a>, <a
				title="Agence Pinterest Ads : Boostez vos ventes en ligne grâce à notre expertise Pinterest Ads"
				href="/l-agence-beavers/agence-pinterest-ads"
				class="font-semibold text-electric underline transition-colors hover:text-bright"
				>Pinterest Ads</a> et X, en adaptant les formats, les visuels et les messages à chaque plateforme.
		</p>
		<p class="text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Notre mission : améliorer la <strong>notoriété</strong>, la <strong>considération</strong> et la <strong>conversion</strong> de votre marque.<br />
			Qu’il s’agisse d’une stratégie d’acquisition, de fidélisation ou d’image, nous activons les leviers sociaux les plus performants pour transformer les vues en résultats concrets.
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
				<Cta label="Activer des Social Ads" href="/contactez-nous" type="transparent" />
			</div>
			<div class="animate-delay-[1700ms] {isInView ? 'animate-fade' : 'opacity-0'}">
				<Cta label="En savoir plus" href="/marketing-digital/social-ads" type="seance" />
			</div>
		</div>
	</div>
</div>
