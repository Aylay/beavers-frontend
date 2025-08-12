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
				Ces indicateurs clés, parfois spécifiques selon les types de campagnes Google Ads, sont
				essentiels pour analyser les performances et ajuster les stratégies en conséquence. Ils
				permettent de comprendre comment se comportent vos annonces, d'en tirer des conclusions et
				d'optimiser votre budget.
			</p>
			<p class="text-6">
				Vous l’aurez compris, si la mise en place initiale peut sembler accessible, tirer pleinement
				parti des fonctionnalités avancées de Google Ads, comme le ciblage d'audience ou
				l'ajustement des enchères, demande une véritable expertise.
			</p>
			<p class="text-6">
				Niveau tarification, vous serez généralement facturé au CPC (coût par clic), c’est-à-dire à
				chaque fois qu’un utilisateur clique sur votre annonce. Ce coût dépend de nombreux facteurs,
				notamment la qualité de votre annonce, la concurrence sur vos mots clés, et le niveau de
				pertinence de vos campagnes.
			</p>
		</div>
		<div class="animate-delay-700 {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
</div>
