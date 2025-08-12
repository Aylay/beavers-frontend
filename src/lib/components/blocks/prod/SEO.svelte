<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Title from '$lib/components/blocks/utilities/Title.svelte';
	import Line from '$lib/components/blocks/utilities/Line.svelte';
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

	const tops = ['-right-8', '-right-4', 'right-0', 'right-4'];

	const bottoms = ['left-0', 'left-8', 'left-16', 'left-24'];
</script>

<div
	class="big-container flex items-center gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="lg:order-2 lg:flex-1">
		<Line />
		<Title first="Audit SEO et référencement naturel" />
		<p
			class="mt-6 mb-8 text-6 font-semibold text-bright animate-duration-200 {isInView
				? 'animate-fade-right'
				: 'opacity-0'}"
		>
			Arriver tout en haut des résultats de recherche de Google est une des choses les plus désirées
			pour tout site internet.
		</p>
		<p class="mb-8 text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Y être n'est pas une mince affaire, mais ce n'est pas si compliqué que ça et le référencement
			naturel est un maillon très important pour y arriver. Le SEO (Search Engine Optimisation) est
			l'élément qui vous mènera dans le top des résultats de recherche sur Google.
		</p>
		<p class="text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Toutes les créations Beavers sont pensées pour Google (et aussi mais surtout pour le
			visiteur). L'agence Beavers vous propose un audit d'une page ou d'un site internet complet
			qu'il soit un site e-commerce, un blog ou un site vitrine simple.
		</p>
		<div class="mt-20 flex gap-12 max-lg:flex-col">
			<div class="animate-delay-1000 {isInView ? 'animate-fade' : 'opacity-0'}">
				<Cta label="Envie d'être au top Google ?" href="/contactez-nous" type="transparent" />
			</div>
			<div class="animate-delay-[1200ms] {isInView ? 'animate-fade' : 'opacity-0'}">
				<Cta
					label="En savoir plus"
					href="/production-digitale/seo-referencement-naturel"
					type="seance"
				/>
			</div>
		</div>
	</div>
	<div class="max-lg:hidden lg:order-1 lg:flex-1">
		<div
			class="relative mx-auto w-full lg:max-w-[45rem]"
			use:inview={optionsImg}
			on:inview_change={handleChangeImg}
		>
			{#if isInViewImg}
				<picture>
					<source srcset="/img/prod/seo.webp" type="image/webp" />
					<source srcset="/img/prod/seo.png" type="image/png" />
					<img
						src="/img/prod/seo.png"
						alt="Ordinateur portable avec un graphique Google Search Console"
						class="w-full {isInViewImg ? 'animate-fade' : ''}"
					/>
				</picture>
			{/if}

			{#each tops as top, i}
				<div
					class="absolute top-24 h-[1.5px] w-28 -rotate-45 transform bg-bright {top} {isInView
						? 'animate-fade'
						: 'opacity-0'}"
					style="animation-delay: {200 * i}ms;"
				/>
			{/each}

			{#each bottoms as bottom, i}
				<div
					class="absolute -bottom-4 h-[3px] w-44 -rotate-45 transform bg-bright {bottom} {isInView
						? 'animate-fade'
						: 'opacity-0'}"
					style="animation-delay: {800 + 200 * i}ms;"
				/>
			{/each}
		</div>
	</div>
</div>
