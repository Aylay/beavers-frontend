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
		<Title first="Quels sont les critères de ciblages pour des social ads&nbsp;?" />
		<h3
			class="mt-2 font-highlight text-4 text-bright lg:animate-delay-200 {isInView
				? 'lg:animate-fade-right'
				: 'lg:opacity-0'}"
		>
			Toucher vos audiences cibles
		</h3>
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Les <strong>Social Ads</strong> sont redoutablement efficaces dans une stratégie d’acquisition grâce à la <strong>précision du ciblage</strong> qu’elles permettent.<br />
				Les plateformes sociales disposent d’une quantité impressionnante de données sur les utilisateurs : comportements, centres d’intérêt, achats, interactions ou changements de vie.
			</p>
			<p class="text-6">
				Ces outils publicitaires offrent la possibilité de <strong>segmenter vos audiences</strong> selon une multitude de critères, parfois extrêmement fins&nbsp;:
			</p>
			<ul class="flex flex-col gap-4">
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					propriétaires, jeunes parents, personnes ayant récemment déménagé ;
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					amateurs de décoration, de sport ou de voyage ;
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					utilisateurs ayant interagi avec vos publications ou visité votre site.
				</li>
			<p class="text-6">
				Autrement dit, les Social Ads permettent de <strong>parler au bon utilisateu, <strong>au bon momen, avec un message personnalisé selon son profil ou son intention.<br />
				C’est cette granularité du ciblage qui fait toute la force de l’écosystème publicitaire social.
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
