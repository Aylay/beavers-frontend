<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Title from '../utilities/Title.svelte';
	import Line from '../utilities/Line.svelte';
	import Cta2 from '../utilities/CTA2.svelte';
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

	const links: Array<{ href: string; label: string }> = [
		{
			href: '/marketing-digital',
			label: 'Search ads'
		},
		{
			href: '/marketing-digital',
			label: 'Social ads'
		},
		{
			href: '/marketing-digital',
			label: 'Affiliation'
		},
		{
			href: '/marketing-digital',
			label: 'Display'
		},
		{
			href: '/marketing-digital',
			label: 'Influence'
		}
	];

	const solutions: Array<{ src: string; alt: string }> = [
		{
			src: '/img/hp/meta-ads.svg',
			alt: 'Meta ads'
		},
		{
			src: '/img/hp/meta-ads.svg',
			alt: 'Meta ads'
		},
		{
			src: '/img/hp/meta-ads.svg',
			alt: 'Meta ads'
		},
		{
			src: '/img/hp/meta-ads.svg',
			alt: 'Meta ads'
		},
		{
			src: '/img/hp/meta-ads.svg',
			alt: 'Meta ads'
		},
		{
			src: '/img/hp/meta-ads.svg',
			alt: 'Meta ads'
		},
		{
			src: '/img/hp/meta-ads.svg',
			alt: 'Meta ads'
		},
		{
			src: '/img/hp/meta-ads.svg',
			alt: 'Meta ads'
		}
	];
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
			<img
				src="/img/hp/marketing-digital.png"
				alt="Marketing Digital"
				class="w-full {isInViewImg ? 'animate-fade' : ''}"
			/>
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
	<div class="max-lg:hidden">
		<h3 class="mb-8 text-5 text-seance">Nos solutions</h3>
		<div class="flex justify-between">
			{#each solutions as solution, i}
				{#if isInViewImg}
					<img
						src={solution.src}
						alt={solution.alt}
						class="max-h-[4rem] max-w-[4rem] {isInViewImg ? 'animate-fade' : 'opacity-0'}"
						style="animation-delay: {500 + 200 * i}ms;"
					/>
				{/if}
			{/each}
		</div>
	</div>
</div>
	<div class="lg:flex-1">
		<Line />
		<Title first="Marketing digital" />
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
				Selon votre problématique, nous connectons les leviers pour un mix media performant. Chez
				Beavers, la pertinence d'un levier n'est pas mesure uniquement à sa performance propre mais
				à son impact dans un plan média global et son influence dans le processus de décisions. Nous
				pilotons l'intégralité de vos leviers média pour maitriser les synergies et le custumer
				journey.
			</p>
		</div>
		<div class="mt-12 lg:mt-48 grid grid-cols-1 lg:grid-cols-2 gap-8">
			{#each links as link, i}
				<Cta2 href={link.href} label={link.label} {i} {isInView} />
			{/each}
		</div>
		<div class="lg:hidden my-24">
			<h3 class="mb-8 text-5 text-seance">Nos solutions</h3>
			<div class="flex max-lg:justify-start justify-between gap-8 max-lg:flex-wrap">
				{#each solutions as solution, i}
					{#if isInViewImg}
						<img
							src={solution.src}
							alt={solution.alt}
							class="max-h-[4rem] max-w-[4rem] {isInViewImg ? 'animate-fade' : 'opacity-0'}"
							style="animation-delay: {500 + 200 * i}ms;"
						/>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
