<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Title from '$lib/components/blocks/utilities/Title.svelte';
	import Line from '$lib/components/blocks/utilities/Line.svelte';
	import Plus from '$lib/assets/svg/Plus.svelte';

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

	const pluss: Array<string> = [
		'bottom-32 left-0 lg:-left-16',
		'bottom-32 left-16 lg:left-0',
		'bottom-16 left-0 lg:-left-16',
		'bottom-16 left-16 lg:left-0',
		'bottom-16 left-32 lg:left-16',
		'bottom-16 left-48 lg:left-32',
		'bottom-16 left-60 lg:left-48',
		'bottom-0 left-0 lg:-left-16',
		'bottom-0 left-16 lg:left-0',
		'bottom-0 left-32 lg:left-16',
		'bottom-0 left-48 lg:left-32',
		'bottom-0 left-60 lg:left-48'
	];
</script>

<div
	class="big-container flex items-center gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="flex-1">
		<Line />
		<Title first="Les social ads, qu'est-ce que c'est&nbsp;?" />
		<h3
			class="mt-2 font-highlight text-4 text-bright lg:animate-delay-200 {isInView
				? 'lg:animate-fade-right'
				: 'lg:opacity-0'}"
		>
			Une première approche
		</h3>
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				On entend par <strong
					><a
						href="/la-pause-cafe/media/social-ads-signification-astuces-campagne-reussie"
						title="Qu’est-ce que le social Ads ? Signification et astuces pour une campagne réussie"
						class="font-bold text-electric underline transition-colors hover:text-bright"
						>social ads</a
					></strong
				>
				ou <strong>social media ads</strong> les publicités que vous pouvez voir sur tous les
				réseaux sociaux (ex : Instagram, Facebook, Pinterest, Linkedin, Twitter pour citer les plus
				gros). C'est une <strong>stratégie marketing</strong> intéressante pour développer votre
				notoriété,
				<a
					href="/la-pause-cafe/media/comment-agence-social-ads-booste-votre-marque"
					class="font-semibold text-electric underline transition-colors hover:text-bright"
					title="Comment une agence social ads booste votre marque"
					>améliorer votre image de marque</a
				>, générer des clics, du trafic sur votre site et/ou des conversions.
			</p>
			<p class="text-6">
				Le <a
					href="/la-pause-cafe/media/devenez-gestionnaire-publicite-hors-pair-guide-complet-maitriser-campagnes-publicitaires"
					class="font-semibold text-electric underline transition-colors hover:text-bright"
					title="Devenez un gestionnaire de publicité hors pair : Guide complet pour maîtriser les campagnes publicitaires"
					>gestionnaire de publicité</a
				>
				le plus utilisé est Meta Ads avec
				<a
					title="Agence Facebook Ads : Propulsez votre visibilité et boostez vos ventes sur Facebook"
					href="/l-agence-beavers/agence-facebook-ads"
					class="font-semibold text-electric underline transition-colors hover:text-bright"
					>Facebook Ads</a
				>
				et Instagram Ads, de par son accès facile et peu onéreux. D'autres comme
				<a
					title="Agence Pinterest Ads : Boostez vos ventes en ligne grâce à notre expertise Pinterest Ads"
					href="/l-agence-beavers/agence-pinterest-ads"
					class="font-semibold text-electric underline transition-colors hover:text-bright"
					>Pinterest</a
				>, TikTok ou Linkedin peuvent également entrer dans des stratégies marketing digitales.
			</p>
			<p class="text-6">
				Globalement, les plateformes sociales mettent à disposition des inventaires publicitaires
				qu'il est possible d'acheter. Comme on pourrait voir un spot télévisé ou un affichage dans
				la rue. Ici le message est diffusé sur les <strong>réseaux sociaux</strong>.
			</p>
		</div>
	</div>
	<div class="relative flex flex-1 items-center justify-center max-lg:hidden">
		<div
			class="relative w-full lg:max-w-[45rem]"
			use:inview={optionsImg}
			on:inview_change={handleChangeImg}
		>
			{#if isInViewImg}
				<picture>
					<source srcset="/img/mkt/social-ads.webp" type="image/webp" />
					<source srcset="/img/mkt/social-ads.png" type="image/png" />
					<img
						src="/img/mkt/social-ads.png"
						alt="Plusieurs téléphones qui entourent une bulle avec un coeur et des chiffres"
						class="w-full {isInViewImg ? 'animate-fade' : ''}"
					/>
				</picture>
			{/if}
			{#each pluss as plus, i}
				<div
					class="absolute h-auto w-[1.8rem] {plus} {isInView ? 'animate-fade' : 'opacity-0'}"
					style="animation-delay: {500 + 200 * i}ms;"
				>
					<Plus />
				</div>
			{/each}
		</div>
	</div>
</div>
