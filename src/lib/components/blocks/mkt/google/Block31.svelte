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
				Google Ads s'impose comme un levier incontournable grâce à ses options de ciblage précises
				et sa capacité à capter une audience qualifiée :
			</p>
			<ul class="flex flex-col gap-4">
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					Contrairement aux campagnes sur les réseaux sociaux, Google Ads exploite l’intention
					d’achat grâce aux recherches effectuées en temps réel.
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					Les annonceurs peuvent, par exemple, cibler des utilisateurs cherchant "acheter un canapé"
					ou "maison à vendre".
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					Grâce à des fonctionnalités avancées comme les audiences similaires et les listes de
					remarketing, Google Ads permet de cibler des segments hautement qualifiés et pertinents
					pour chaque campagne.
				</li>
			</ul>
			<p class="text-6">
				Avec ces outils, les possibilités de personnalisation et d’ajustement sont presque infinies,
				permettant de répondre à des objectifs variés, qu’ils soient liés à l’acquisition, la
				conversion ou la notoriété.
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
