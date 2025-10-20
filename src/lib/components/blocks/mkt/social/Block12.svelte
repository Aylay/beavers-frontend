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
				Les <strong>indicateurs de performance</strong> varient selon les plateformes, mais leur suivi est indispensable pour comprendre comment vos annonces performent et <strong>optimiser vos budgets en conséquence</strong>.
			</p>
			<p class="text-6">
				Si la mise en ligne d’une campagne semble simple, exploiter tout le potentiel des outils publicitaires demande une <strong>expertise approfondie</strong> : paramétrage des audiences, choix des placements, lecture des données et ajustement des enchères.
			</p>
			<p class="text-6">
				Côté tarification, la majorité des plateformes fonctionnent au <strong>CPM (coût pour mille impressions)</strong>.<br />
				Le prix dépend de la qualité des créations, du taux d’engagement, de la concurrence sur vos audiences et du niveau de pertinence de votre message.<br />
				Une stratégie bien calibrée permet de <strong>réduire les coûts</strong> tout en <strong>améliorant la portée</strong> et la <strong>rentabilité des campagnes</strong>.
			</p>
		</div>
		<div class="animate-delay-700 {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
</div>
