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
				<source srcset="/img/mkt/social-ads-2.webp" type="image/webp">
				<source srcset="/img/mkt/social-ads-2.png" type="image/png">
				<img
					src="/img/mkt/social-ads-2.png"
					alt="Picto Instagram sous fond rose"
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
				Selon vos objectifs, différents types de campagnes Google Ads peuvent être mis en place, qu'il s'agisse de campagnes sur le réseau de recherche pour <strong>capter des intentions d'achat</strong>, de campagnes display pour <strong>accroître la notoriété</strong>, ou de campagnes vidéo sur YouTube pour <strong>engager votre audience</strong>.
			</p>
			<p class="text-6">
				Chaque cas est différent et notre <a href="/l-agence-beavers/agence-google-ads" title="Agence Google Ads Beavers" class="font-bold underline text-electric hover:text-bright transition-colors">agence google ads</a> étudie l'annonceur et son besoin afin de déterminer <strong>quelle stratégie mettre en place</strong>.
			</p>
		</div>
		<div class="animate-delay-700 {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
</div>
