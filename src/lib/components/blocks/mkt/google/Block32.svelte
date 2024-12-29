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
<div class="relative flex lg:flex-1 flex-col gap-28">
	<div
		class="relative mx-auto w-full lg:max-w-[45rem]"
		use:inview={optionsImg}
		on:inview_change={handleChangeImg}
	>
		{#if isInViewImg}
			<picture>
				<source srcset="/img/mkt/social-ads-8.webp" type="image/webp">
				<source srcset="/img/mkt/social-ads-8.png" type="image/png">
				<img
					src="/img/mkt/social-ads-8.png"
					alt="Main robotisée"
					class="w-full {isInViewImg ? 'animate-fade' : ''}"
				/>
			</picture>
		{/if}
		<div
			class="absolute left-0 lg:-left-20 top-20 h-auto w-[7.5rem] animate-delay-500 {isInView
				? 'animate-shake'
				: 'opacity-0'}"
		>
			<Wave color="#00FFDA" />
		</div>
		<div
			class="absolute bottom-0 right-10 h-auto w-[6.2rem] {isInView
				? 'animate-shake'
				: 'opacity-0'}"
		>
			<Wave />
		</div>
	</div>
</div>
	<div class="lg:flex-1">
		<div
			class="mb-16 mt-8 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Contrairement aux social ads, où le ciblage repose principalement sur des critères socio-démographiques et d’intérêts, Google Ads exploite des mots-clés pour capter une intention d’achat explicite.
			</p>
			<p class="text-6">
				Les options de ciblage incluent :
			</p>
			<ul class="flex flex-col gap-4">
			<li class="relative text-6 before:content-[''] before:absolute before:w-3 before:h-3 before:bg-electric before:left-0 before:top-3 before:rounded-full pl-8">
				<strong>Critères socio-démographiques</strong> : toucher des internautes selon leur profil (âge, sexe, revenus).
			</li>
			<li class="relative text-6 before:content-[''] before:absolute before:w-3 before:h-3 before:bg-electric before:left-0 before:top-3 before:rounded-full pl-8">
				<strong>Critères comportementaux</strong> : cibler selon les actions réalisées (ajout au panier, abandon de panier).
			</li>
			<li class="relative text-6 before:content-[''] before:absolute before:w-3 before:h-3 before:bg-electric before:left-0 before:top-3 before:rounded-full pl-8">
				<strong>Audiences personnalisées</strong> : segments définis à partir de mots-clés, sites visités ou applications téléchargées.
			</li>
			<li class="relative text-6 before:content-[''] before:absolute before:w-3 before:h-3 before:bg-electric before:left-0 before:top-3 before:rounded-full pl-8">
				<strong>Retargeting dynamique</strong> : relancer vos visiteurs en affichant des produits ou services qu’ils ont consultés.
			</li>
		</ul>
			<p class="text-6">
				Grâce à son réseau Display et ses partenaires, Google Ads vous permet également de diffuser vos annonces sur des millions de sites et applications, élargissant ainsi votre portée bien au-delà des résultats de recherche.
			</p>
		</div>
		<div class="animate-delay-700 {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
</div>
