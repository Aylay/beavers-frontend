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
					<source srcset="/img/mkt/social-ads-8.webp" type="image/webp" />
					<source srcset="/img/mkt/social-ads-8.png" type="image/png" />
					<img
						src="/img/mkt/social-ads-8.png"
						alt="Main robotisée"
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
				Contrairement aux <a
				class="font-semibold text-electric underline transition-colors hover:text-bright"
				href="/marketing-digital/social-ads"
				title="Les social ads"><strong>Social Ads</strong></a>, où le ciblage repose surtout sur des critères d’intérêt et de profil, <strong>Google Ads</strong> s’appuie sur la <strong>data comportementale et les mots-clés</strong> pour capter une <strong>intention d’achat explicite</strong>.<br />
				C’est cette différence qui en fait un levier de performance unique : vous touchez vos prospects au moment où ils cherchent réellement une solution.
			</p>
			<p class="text-6">Les options de ciblage disponibles permettent une personnalisation fine de chaque campagne&nbsp;:</p>
			<ul class="flex flex-col gap-4">
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Critères socio-démographiques</strong> : cibler les internautes selon leur âge, leur sexe ou leur niveau de revenus.
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Critères comportementaux</strong> : atteindre les utilisateurs selon leurs actions (consultation de produit, ajout ou abandon de panier, visite répétée).
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Audiences personnalisées</strong> : construire des segments sur mesure à partir de mots-clés, d’historiques de navigation ou d’applications utilisées.
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Retargeting dynamique</strong> : réengager vos visiteurs en leur affichant automatiquement les produits ou services qu’ils ont consultés.
				</li>
			</ul>
			<p class="text-6">
				Grâce au <strong>réseau Display</strong> et aux <strong>partenaires premium de Google</strong>, vos annonces peuvent également apparaître sur des <strong>millions de sites et d’applications</strong>, étendant votre visibilité bien au-delà du moteur de recherche.<br />
				Combinée à une stratégie data-driven, cette granularité de ciblage transforme Google Ads en un <strong>outil d’acquisition ultra-précis</strong>, capable de générer à la fois notoriété, trafic et conversions à grande échelle.
			</p>
		</div>
		<div class="animate-delay-700 {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
</div>
