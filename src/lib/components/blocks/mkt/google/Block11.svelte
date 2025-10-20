<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Title from '$lib/components/blocks/utilities/Title.svelte';
	import Line from '$lib/components/blocks/utilities/Line.svelte';

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
	const tops = ['-top-28', '-top-8', 'top-12'];

	const bottoms = ['-bottom-28', '-bottom-8', 'bottom-12', 'bottom-32', 'bottom-52'];
</script>

<div
	class="big-container flex gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="lg:flex-1">
		<Line />
		<Title first="Comment fonctionnent les campagnes Google&nbsp;Ads&nbsp;?" />
		<h3
			class="mt-2 font-highlight text-4 text-bright lg:animate-delay-200 {isInView
				? 'lg:animate-fade-right'
				: 'lg:opacity-0'}"
		>
			Comment démarrer avec Google&nbsp;Ads&nbsp;?
		</h3>
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
				Google Ads est une plateforme puissante et accessible qui permet de <strong>créer des campagnes ciblées</strong> en quelques étapes seulement.<br />
				Il suffit de définir vos objectifs, de choisir un budget adapté, de sélectionner les mots-clés les plus pertinents et de rédiger des annonces attractives pour votre audience.
			</p>
			<p class="text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
				Selon la nature de votre activité, vous pouvez viser une <strong>vente</strong>, une <strong>prise de contact</strong>, une <strong>visite en magasin</strong> ou une <strong>inscription</strong> — les algorithmes de Google optimiseront ensuite automatiquement vos campagnes pour atteindre cet objectif.
			</p>
			<p class="text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
				Pour obtenir des résultats durables, il est essentiel d’appliquer une approche méthodique&nbsp;:
			</p>
			<ul class="flex flex-col gap-4 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<a
						href="/la-pause-cafe/media/ciblage-comment-agence-publicite-digitale-affiner-audience"
						title="L’art du ciblage : comment une agence de publicité digitale peut affiner votre audience"
						class="font-bold text-electric underline transition-colors hover:text-bright"
						><strong>Définir un ciblage précis</strong></a
					> pour diffuser vos annonces auprès des bonnes audiences.
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Réaliser des tests A/B</strong> afin d’évaluer la performance de vos annonces et de vos pages de destination.
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Mettre en place un suivi des conversions</strong> pour relier vos actions publicitaires à des résultats concrets.
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong
						>Analyser les <a
							href="/la-pause-cafe/media/mesurer-impact-votre-marketing-digital-kpi-a-suivre"
							title="Mesurer l'impact de votre marketing digital : les KPI à suivre"
							class="font-bold text-electric underline transition-colors hover:text-bright"
							>indicateurs de performance clés (KPI)</a
						></strong
					> (taux de clics, coût par acquisition, taux de conversion, retour sur investissement) pour ajuster vos campagnes et améliorer la performance globale.
				</li>
			</ul>
		</div>
	</div>
	<div
		class="relative flex flex-1 justify-center gap-8 max-lg:hidden h-full"
		use:inview={optionsImg}
		on:inview_change={handleChangeImg}
	>
		<div class="flex flex-1 flex-col gap-8">
			<div class="flex-3">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/mkt/google-ads-3.webp" type="image/webp" />
						<source srcset="/img/mkt/google-ads-3.png" type="image/png" />
						<img
							src="/img/mkt/google-ads-3.png"
							alt="Annonce Cafés Richard sur Google Ads Display"
							class="h-full w-full overflow-hidden rounded-lg object-cover {isInViewImg
								? 'animate-fade'
								: 'opacity-0'}"
						/>
					</picture>
				{/if}
			</div>
			<div class="flex-2">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/mkt/social-ads-4.webp" type="image/webp" />
						<source srcset="/img/mkt/social-ads-4.png" type="image/png" />
						<img
							src="/img/mkt/social-ads-4.png"
							alt="Dashboard avec chiffres et graphique"
							class="h-full w-full overflow-hidden rounded-lg object-cover {isInViewImg
								? 'animate-fade'
								: 'opacity-0'}"
						/>
					</picture>
				{/if}
			</div>
		</div>
		<div class="relative flex flex-1 items-center">
			{#each tops as top, i}
				<div
					class="left-8 h-4 w-4 rounded-full {top} absolute bg-seance {isInView
						? 'animate-fade'
						: 'opacity-0'}"
					style="animation-delay: {200 * i}ms;"
				/>
			{/each}
			{#each bottoms as bottom, i}
				<div
					class="left-1/2 z-10 h-4 w-4 -translate-x-1/2 transform rounded-full {bottom} absolute bg-bright {isInView
						? 'animate-fade'
						: 'opacity-0'}"
					style="animation-delay: {600 + 200 * i}ms;"
				/>
			{/each}
			<div class="w-full lg:h-1/2">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/mkt/google-ads-5.webp" type="image/webp" />
						<source srcset="/img/mkt/google-ads-5.png" type="image/png" />
						<img
							src="/img/mkt/google-ads-5.png"
							alt="Annonce Keune Haircosmetics sur Google Ads Search sur téléphone"
							class="h-full w-full overflow-hidden rounded-lg object-cover object-right {isInViewImg
								? 'animate-fade'
								: 'opacity-0'}"
						/>
					</picture>
				{/if}
			</div>
		</div>
	</div>
</div>
