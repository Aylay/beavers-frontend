<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Title from '$lib/components/blocks/utilities/Title.svelte';
	import Line from '$lib/components/blocks/utilities/Line.svelte';
	import Cta from '$lib/components/blocks/utilities/CTA.svelte';
	import Wave from '$lib/assets/svg/Wave.svelte';

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
		<Line />
		<Title first="Quels sont les critères de ciblage dans Google&nbsp;Ads&nbsp;?" />
		<h3
			class="mt-2 font-highlight text-4 text-bright lg:animate-delay-200 {isInView
				? 'lg:animate-fade-right'
				: 'lg:opacity-0'}"
		>
			Atteindre vos audiences cibles avec Google Ads
		</h3>
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Google Ads est un levier incontournable pour <strong>atteindre les bonnes personnes au bon moment</strong>, grâce à des capacités de ciblage d’une précision inégalée.<br />
				Chaque campagne peut être calibrée selon vos objectifs — acquisition, conversion ou notoriété — afin d’obtenir des résultats mesurables et durables.
			</p>
			<p class="text-6">
				Voici quelques-unes des approches les plus performantes&nbsp;:
			</p>
			<ul class="flex flex-col gap-4">
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Ciblage par intention d’achat</strong> : contrairement aux réseaux sociaux, Google Ads capte les utilisateurs au moment précis où ils expriment un besoin. Vous touchez ainsi des prospects déjà engagés dans une démarche active de recherche.
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Ciblage par mots-clés</strong> : en sélectionnant des expressions comme “acheter canapé”, “assurance auto” ou “logiciel de gestion”, vos annonces s’affichent auprès d’utilisateurs hautement qualifiés.
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Ciblage par audiences avancées</strong> : grâce aux <strong>audiences similaires</strong>, <strong>listes de remarketing</strong> et <strong>segments personnalisés</strong>, vous pouvez étendre votre portée tout en maintenant un haut niveau de pertinence.
				</li>
			</ul>
			<p class="text-6">
				Avec la data et l’intelligence artificielle de Google, les possibilités de segmentation sont presque infinies.<br />
				Vous pouvez ajuster vos campagnes selon le comportement, les intérêts ou la localisation de vos audiences, afin d’atteindre vos clients potentiels avec une précision chirurgicale.
			</p>
		</div>
		<div class="mt-20 flex gap-12">
			<div class="animate-delay-1000 {isInView ? 'animate-fade' : 'opacity-0'}">
				<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
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
					<source srcset="/img/mkt/social-ads-7.webp" type="image/webp" />
					<source srcset="/img/mkt/social-ads-7.png" type="image/png" />
					<img
						src="/img/mkt/social-ads-7.png"
						alt="Plusieurs images de portrait de personnes"
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
