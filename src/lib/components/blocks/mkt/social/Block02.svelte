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
					<source srcset="/img/mkt/social-ads-2.webp" type="image/webp" />
					<source srcset="/img/mkt/social-ads-2.png" type="image/png" />
					<img
						src="/img/mkt/social-ads-2.png"
						alt="Picto Instagram sous fond rose"
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
				Les <strong>publications sponsorisées</strong> permettent à une marque de toucher des personnes qui ne la connaissent pas encore, mais dont les centres d’intérêt ou le comportement en ligne correspondent à son offre.
			</p>
			<p class="text-6">
				Selon le <strong>secteur et la typologie de client</strong>, les leviers à activer diffèrent :
			</p>
			<ul class="flex flex-col gap-4">
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					en <strong>BtoB</strong>, <strong>LinkedIn Ads</strong> est souvent le plus pertinent ;
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					en <strong>e-commerce</strong> ou <strong>lifestyle</strong>, <strong>Instagram Ads</strong> et <strong>Pinterest Ads</strong> offrent un fort potentiel de conversion ;
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					pour des <strong>campagnes d’impact rapide</strong>, <strong>TikTok Ads</strong> s’impose comme un format à forte viralité.
				</li>
			</ul>
			<p class="text-6">
				Chez Beavers, notre <a href="/l-agence-beavers/agence-social-ads" title="Agence Social Ads Beavers" class="font-bold underline text-electric hover:text-bright transition-colors"><strong>agence Social Ads</strong></a> analyse votre activité, vos audiences et vos objectifs pour concevoir une <strong>stratégie sur mesure</strong>.<br />
				Chaque campagne est pensée pour <strong>maximiser la performance</strong>, tout en valorisant votre image et en construisant une présence digitale cohérente.
			</p>
		</div>
		<div class="animate-delay-700 {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
</div>
