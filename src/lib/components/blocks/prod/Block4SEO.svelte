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
		<Title first="Suivi du référencement naturel" />
		<h3
			class="mt-2 font-highlight text-4 text-bright lg:animate-delay-200 {isInView
				? 'lg:animate-fade-right'
				: 'lg:opacity-0'}"
		>
			Un travail sur le long terme
		</h3>
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Le référencement naturel est un travail qui se fait dans le temps. Les résultats ne sont pas
				directs mais ils perdurent dans le temps au fur et à mesure de la mise en place
				d'optimisations.
			</p>
			<p class="text-6">
				Il est donc toujours important de bien suivre les <a
					href="/la-pause-cafe/media/lexique-media-online"
					title="Le lexique du media online"
					class="font-bold text-electric underline transition-colors hover:text-bright">KPI</a
				> du SEO et voir si les optimisations conseillées ont bien été mises en place et s'il n'y a pas
				de nouvelles erreurs techniques. Grâce au suivi SEO, il peut y avoir de nouvelles optimisations
				de contenu à mettre en place en fonction de l'évolution de l'algorithme Google et des moteurs
				de recherche.
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
					<source srcset="/img/prod/newsletter.webp" type="image/webp" />
					<source srcset="/img/prod/newsletter.png" type="image/png" />
					<img
						src="/img/prod/newsletter.png"
						alt="Ordinateur portable avec une image newsletter dessus"
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
