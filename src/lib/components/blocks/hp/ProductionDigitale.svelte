<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Title from '../utilities/Title.svelte';
	import Line from '../utilities/Line.svelte';
	import Cta2 from '../utilities/CTA2.svelte';
	import Plus from '$lib/assets/svg/Plus.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-200px'
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

	const links: Array<{ href: string; label: string }> = [
		{
			href: '/production-digitale/creation-refonte-site-internet',
			label: 'Développement web'
		},
		{
			href: '/production-digitale/seo-referencement-naturel',
			label: 'SEO optimisation'
		},
		{
			href: '/production-digitale/newsletter',
			label: 'Newsletters'
		}
	];

	const pluss: Array<string> = [
		'bottom-32 -left-16',
		'bottom-32 left-0',
		'bottom-16 -left-16',
		'bottom-16 left-0',
		'bottom-16 left-16',
		'bottom-16 left-32',
		'bottom-16 left-48',
		'bottom-0 -left-16',
		'bottom-0 left-0',
		'bottom-0 left-16',
		'bottom-0 left-32',
		'bottom-0 left-48'
	];
</script>

<div
	class="big-container flex items-center gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="flex-1">
		<Line />
		<Title first="Production digitale" />
		<h3
			class="mt-2 font-highlight text-4 text-bright animate-delay-200 {isInView
				? 'animate-fade-right'
				: 'opacity-0'}"
		>
			Lorem ipsum dolor sit amet adipiscing
		</h3>
		<div
			class="mb-16 mt-8 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Notre ère est composée de multiples sites internet noyés dans la masse. Aujourd'hui, votre
				site doit sortir de l'ordinaire, être bien codé pour correspondre à toutes les guidelines de
				Google, être rapide pour que l'utilisateur final ne le quitte pas précipitamment.
			</p>
			<p class="text-6">
				L'agence digitale Beavers vous propose donc des solutions qui répondront à toutes ces
				problématiques :
			</p>
		</div>
		<div class="mt-24 flex flex-col gap-8">
			{#each links as link, i}
				<Cta2 href={link.href} label={link.label} {i} {isInView} />
			{/each}
		</div>
	</div>
	<div class="relative flex flex-1 items-center justify-center">
		<div
			class="relative w-full max-w-[45rem]"
			use:inview={optionsImg}
			on:inview_change={handleChangeImg}
		>
			{#if isInViewImg}
				<img
					src="/img/hp/production-digitale.png"
					alt="Production Digitale"
					class="w-full {isInViewImg ? 'animate-fade' : ''}"
					loading="lazy"
				/>
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
