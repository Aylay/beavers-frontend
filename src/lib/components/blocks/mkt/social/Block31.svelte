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
				Les social ads sont très puissantes dans une stratégie media online de part leur <strong
					><a
						href="/la-pause-cafe/media/ciblage-comment-agence-publicite-digitale-affiner-audience"
						title="L’art du ciblage : comment une agence de publicité digitale peut affiner votre audience"
						class="font-bold text-electric underline transition-colors hover:text-bright"
						>ciblage précis</a
					></strong
				>. En effet, les plateformes sociales en savent beaucoup sur chaque internaute et sur leurs
				habitudes de navigation et d'achat.
			</p>
			<p class="text-6">
				Les outils publicitaires social ads permettent donc de <strong>cibler des audiences</strong>
				sur différents critères, plus ou moins précis en fonction de la plateforme. Il est, par exemple,
				possible de cibler les propriétaires ou les personnes qui ont récemment déménagé. Il est également
				possible de cibler les personnes qui aiment le surf. Une infinité de ciblage est donc mis à disposition
				de l'annonceur ou de l'agence de pub.
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
