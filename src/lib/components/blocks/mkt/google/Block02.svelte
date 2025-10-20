<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Wave from '$lib/assets/svg/Wave.svelte';
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
</script>

<div
	class="big-container flex items-center gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="relative flex flex-col gap-28 lg:flex-1">
		<div
			class="relative mx-auto w-full lg:max-w-[45rem]"
			use:inview={optionsImg}
			on:inview_change={handleChangeImg}
		>
			{#if isInViewImg}
				<picture>
					<source srcset="/img/mkt/google-ads-2.webp" type="image/webp" />
					<source srcset="/img/mkt/google-ads-2.png" type="image/png" />
					<img
						src="/img/mkt/google-ads-2.png"
						alt="Ecran d'une nouvelle campagne Google Ads"
						class="w-full {isInViewImg ? 'animate-fade' : ''}"
					/>
				</picture>
			{/if}
			<div
				class="absolute top-20 left-0 h-auto w-[7.5rem] animate-delay-500 lg:-left-20 {isInView
					? 'animate-shake'
					: 'opacity-0'}"
			>
				<Wave color="#00FFDA" />
			</div>
			<div
				class="absolute right-10 bottom-0 h-auto w-[6.2rem] {isInView
					? 'animate-shake'
					: 'opacity-0'}"
			>
				<Wave />
			</div>
		</div>
	</div>
	<div class="lg:flex-1">
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Selon vos objectifs, différents <strong>types de campagnes Google Ads</strong> peuvent être mis en place pour atteindre vos cibles au bon moment&nbsp;:
			</p>
			<ul class="flex flex-col gap-4 {isInView ? 'animate-fade-right' : 'opacity-0'}">
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-seance before:content-['']"
				>
					les <strong>campagnes sur le réseau de recherche</strong> permettent de <strong>capter l’intention d’achat</strong> des utilisateurs au moment où ils recherchent vos produits ou services ;
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-seance before:content-['']"
				>
					les <strong>campagnes display</strong> renforcent la <strong>notoriété de votre marque</strong> grâce à des visuels attractifs diffusés sur les sites les plus pertinents ;
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-seance before:content-['']"
				>
					les <strong>campagnes vidéo sur YouTube</strong> engagent vos audiences en valorisant votre message à travers des formats immersifs.
				</li>
			</ul>
			<p class="text-6">
				Chez Beavers, notre <a
					href="/l-agence-beavers/agence-google-ads"
					title="Agence Google Ads Beavers"
					class="font-bold text-electric underline transition-colors hover:text-bright"
					>agence Google ads</a
				>
				analyse vos besoins, votre positionnement et vos objectifs business pour construire une stratégie sur mesure.<br />
				Nous choisissons les leviers les plus adaptés à votre marché et optimisons chaque campagne pour maximiser la performance et le retour sur investissement.
			</p>
		</div>
		<div class="animate-delay-700 {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
</div>
