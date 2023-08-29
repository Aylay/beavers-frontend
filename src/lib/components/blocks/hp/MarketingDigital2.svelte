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
	import Waze from '$lib/assets/svg/social/Waze.svelte';
	import YouTube from '$lib/assets/svg/social/YouTube.svelte';
	import Pinterest from '$lib/assets/svg/social/Pinterest.svelte';

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
		},
		{
			href: '/marketing-digital',
			label: 'Influence'
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
			<Pinterest newClass="h-16 w-auto animate-delay-[250ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}" fill="#333743" />
			<Bing newClass="h-16 w-auto animate-delay-[500ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}" fill="#545B6E" />
			<GAds newClass="h-16 w-auto animate-delay-[750ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}" fill1="#444A5A" fill2="#30343F" fill3="#393F4D" />
			<LinkedIn newClass="h-16 w-auto animate-delay-[1000ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}" fill1="#292B37" fill2="#0B0211" />
			<Tiktok newClass="h-16 w-auto animate-delay-[1250ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}" fill1="#292B37" fill2="#414757" fill3="#414757" />
			<Waze newClass="h-16 w-auto animate-delay-[1500ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}" fill="#7E87A6" />
			<Meta newClass="w-16 h-auto animate-delay-[1750ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}" fill="#2D313C" />
			<YouTube newClass="w-16 h-auto animate-delay-[2000ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}" fill1="#2E323D" fill2="#0B0211" />
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
				Selon votre problématique, nous connectons les leviers pour un mix média performant. Chez Beavers, la pertinence d'un levier n'est pas liée uniquement à sa performance mais à son impact dans un plan média global et son influence dans le processus de décision. Nous pilotons l'intégralité de vos leviers média pour maitriser les synergies et le parcours client.
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
				<Pinterest newClass="h-16 w-auto animate-delay-[250ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}" fill="#333743" />
				<Bing newClass="h-16 w-auto animate-delay-[500ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}" fill="#545B6E" />
				<GAds newClass="h-16 w-auto animate-delay-[750ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}" fill1="#444A5A" fill2="#30343F" fill3="#393F4D" />
				<LinkedIn newClass="h-16 w-auto animate-delay-[1000ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}" fill1="#292B37" fill2="#0B0211" />
				<Tiktok newClass="h-16 w-auto animate-delay-[1250ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}" fill1="#292B37" fill2="#414757" fill3="#414757" />
				<Waze newClass="h-16 w-auto animate-delay-[1500ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}" fill="#7E87A6" />
				<Meta newClass="w-16 h-auto animate-delay-[1750ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}" fill="#2D313C" />
				<YouTube newClass="w-16 h-auto animate-delay-[2000ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}" fill1="#2E323D" fill2="#0B0211" />
			</div>
		</div>
	</div>
</div>
