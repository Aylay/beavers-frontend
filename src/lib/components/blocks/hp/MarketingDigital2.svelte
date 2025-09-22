<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Cta2 from '../utilities/CTA2.svelte';
	import Wave from '$lib/assets/svg/Wave.svelte';
	import Bing from '$lib/assets/svg/social/Bing.svelte';
	import GAds from '$lib/assets/svg/social/GAds.svelte';
	import LinkedIn from '$lib/assets/svg/social/LinkedIn.svelte';
	import Meta from '$lib/assets/svg/social/Meta.svelte';
	import Tiktok from '$lib/assets/svg/social/Tiktok.svelte';
	import YouTube from '$lib/assets/svg/social/YouTube.svelte';
	import Pinterest from '$lib/assets/svg/social/Pinterest.svelte';
	import Apple from '$lib/assets/svg/social/Apple.svelte';

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
			href: '/marketing-digital/google-ads',
			label: 'Search ads'
		},
		{
			href: '/marketing-digital/social-ads',
			label: 'Social ads'
		},
		{
			href: '/marketing-digital',
			label: 'Affiliation'
		},
		{
			href: '/marketing-digital',
			label: 'Display'
		}
	];
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
					<source srcset="/img/hp/md-2.webp" type="image/webp" />
					<source srcset="/img/hp/md-2.png" type="image/png" />
					<img
						src="/img/hp/md-2.png"
						alt="Smartphone posé dans une tasse orange sur un bureau, objet du quotidien détourné"
						class="w-full overflow-hidden rounded-lg {isInViewImg ? 'animate-fade' : 'opacity-0'}"
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
				class="absolute right-10 -bottom-8 h-auto w-[6.2rem] {isInView
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
				Chaque problématique est unique et mérite une approche personnalisée. Chez Beavers, nous connectons les bons leviers – Search Ads, Social Ads, Display, Affiliation – pour bâtir un mix média cohérent et puissant. Notre rôle ne se limite pas à l’activation : nous pilotons l’ensemble de vos canaux avec une vision globale, afin de maximiser les synergies et fluidifier le parcours client. <br /><br />
				Grâce à une méthodologie rigoureuse et des reportings transparents, nous vous aidons à prendre les bonnes décisions au bon moment, pour que chaque euro investi contribue réellement à votre performance et à votre croissance.
			</p>
		</div>
		<div class="mt-12 grid grid-cols-1 gap-8 lg:mt-24 lg:grid-cols-2">
			{#each links as link, i}
				<Cta2 href={link.href} label={link.label} {i} {isInView} />
			{/each}
		</div>
		<div class="mt-24">
			<h3 class="mb-8 text-5 text-seance">Nos solutions</h3>
			<div class="flex justify-between gap-8 max-lg:flex-wrap max-lg:justify-start">
				<Pinterest
					newClass="h-16 w-auto animate-delay-[250ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}"
					fill="#333743"
				/>
				<Bing
					newClass="h-16 w-auto animate-delay-[500ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}"
					fill="#545B6E"
				/>
				<GAds
					newClass="h-16 w-auto animate-delay-[750ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}"
					fill1="#444A5A"
					fill2="#30343F"
					fill3="#393F4D"
				/>
				<LinkedIn
					newClass="h-16 w-auto animate-delay-[1000ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}"
					fill1="#292B37"
					fill2="#0B0211"
				/>
				<Tiktok
					newClass="h-16 w-auto animate-delay-[1250ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}"
					fill1="#292B37"
					fill2="#414757"
					fill3="#414757"
				/>
				<Apple
					newClass="h-16 w-auto animate-delay-[1500ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}"
					fill="#2D313C"
				/>
				<Meta
					newClass="w-16 h-auto animate-delay-[1750ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}"
					fill="#2D313C"
				/>
				<YouTube
					newClass="w-16 h-auto animate-delay-[2000ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}"
					fill1="#2E323D"
					fill2="#0B0211"
				/>
			</div>
		</div>
	</div>
</div>
