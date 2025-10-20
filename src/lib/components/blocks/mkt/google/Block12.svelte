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
					<source srcset="/img/mkt/social-ads-6.webp" type="image/webp" />
					<source srcset="/img/mkt/social-ads-6.png" type="image/png" />
					<img
						src="/img/mkt/social-ads-6.png"
						alt="Personne qui tient son téléphone portable"
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
				Les <strong>indicateurs clés de performance</strong> varient selon le type de campagne (Search, Display, YouTube ou Performance Max), mais ils ont tous le même objectif : <strong>mesurer l’efficacité réelle de vos investissements publicitaires</strong>.<br />
				Ils permettent de comprendre comment vos annonces interagissent avec vos audiences et de prioriser les actions à fort impact.
			</p>
			<p class="text-6">
				Si la création d’une campagne peut sembler simple, <strong>exploiter tout le potentiel de Google Ads</strong> nécessite une expertise pointue : paramétrage du ciblage, ajustement des enchères, structuration du compte, utilisation de la data et des signaux d’audience.
			</p>
			<p class="text-6">
				Côté tarification, le modèle repose principalement sur le <strong>CPC (coût par clic)</strong> : vous ne payez que lorsqu’un utilisateur interagit avec votre annonce.<br />
				Le coût dépend de la <strong>concurrence sur les mots-clés</strong>, de la <strong>qualité des annonces</strong> et du <strong>niveau de pertinence global</strong> de votre campagne.<br />
				Une stratégie bien optimisée permet d’obtenir un meilleur <strong>Quality Score</strong>, de <strong>réduire les coûts</strong> et d’<strong>améliorer le ROI</strong> à long terme.
			</p>
		</div>
		<div class="animate-delay-700 {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
</div>
