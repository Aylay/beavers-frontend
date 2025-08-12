<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import { page } from '$app/stores';
	import Mouse from '$lib/assets/svg/Mouse.svelte';
	import ArrowBottom from '$lib/assets/svg/ArrowBottom.svelte';
	import HeaderWave from '$lib/assets/svg/HeaderWave.svelte';
	import LDTag from '$lib/components/utilities/LDTag.svelte';
	import Sun from '$lib/assets/svg/Sun.svelte';
	import Wave2 from '$lib/assets/svg/Wave2.svelte';
	import MultipleArrows from '$lib/assets/svg/MultipleArrows.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	export let client: any;
	export let title: string;
	export let imgSite: any;

	const siteURL = import.meta.env.VITE_SITE_URL;
	const strapiURL = import.meta.env.VITE_STRAPI_URL;

	let schema = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		'@id': siteURL + $page.url.pathname + '#breadcrumb',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Beavers',
				item: siteURL
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: 'Les études de cas de Beavers',
				item: siteURL + '/cas-agence'
			},
			{
				'@type': 'ListItem',
				position: 3,
				name: title.replace(/&nbsp;/g, ' '),
				item: siteURL + '/cas/' + $page.params.slug
			}
		]
	};
</script>

<LDTag {schema} />

<div
	class="relative flex h-screen items-center justify-center bg-rock"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="big-container">
		<div class="relative z-30 lg:w-2/3">
			<nav aria-label="Breadcrumb" class="max-lg:hidden">
				<ol class="mb-20 flex flex-wrap gap-5">
					<li>
						<a
							href="/"
							title="Beavers, l'agence média des castors"
							class="text-7 font-semibold text-electric transition-colors hover:text-bright"
						>
							Accueil
						</a>
					</li>
					<li class="text-7 font-bold text-bright">|</li>
					<li>
						<a
							href="/cas-agence"
							title="Les études de cas de Beavers"
							class="text-7 font-semibold text-electric transition-colors hover:text-bright"
						>
							Cas agence
						</a>
					</li>
					<li class="text-7 font-bold text-bright">|</li>
					<li>
						<a
							href="/cas/{$page.params.slug}"
							aria-current="page"
							class="pointer-events-none text-7 font-semibold text-white"
							{title}
						>
							{title}
						</a>
					</li>
				</ol>
			</nav>
			<h1 class="mb-20 text-3 font-semibold text-bright">
				{title}
			</h1>
			<div class="flex w-8 flex-col items-center gap-2">
				<Mouse newClass="h-auto w-full" color="#FFF" />
				<ArrowBottom newClass="animate-bounce" color="#FFF" />
			</div>
			<div class="max-lg:hidden">
				<Sun
					newClass="animate-once w-24 h-auto absolute left-1/2 top-full animate-ping {isInView
						? 'animate-ping animate-delay-1000'
						: 'opacity-0'}"
					color="#00FFDA"
				/>
				<Wave2 newClass="absolute -top-1/4 left-2/3 fill-seance animate-shake animate-delay-500" />
				<MultipleArrows
					newClass="absolute -bottom-1/2 left-1/4 fill-bright animate-fade animate-delay-700"
				/>
				<div
					class="absolute -top-32 -left-32 h-[2px] w-20 -rotate-45 transform animate-fade bg-bright animate-delay-[1500ms]"
				/>
				<div
					class="absolute -top-40 -left-32 h-[2px] w-20 -rotate-45 transform animate-fade bg-bright animate-delay-[1800ms]"
				/>
			</div>
		</div>
	</div>
	{#if imgSite}
		<div
			class="absolute top-[10%] right-1/3 z-20 flex h-[calc(100vh*0.8)] translate-x-1/2 transform animate-fade items-center justify-center animate-delay-[1500ms] max-lg:hidden"
		>
			<img
				src={strapiURL + imgSite.attributes.url}
				alt={imgSite.attributes.alternativeText ? imgSite.attributes.alternativeText : title}
				class="h-full w-full object-cover"
			/>
		</div>
	{/if}
	<div
		class="absolute top-0 right-0 z-10 h-full w-full transition-opacity max-lg:hidden max-lg:h-1/2 lg:inset-y-0 lg:w-1/3"
	>
		{#if client.imgBg && client.imgBg.data}
			<img
				src={strapiURL + client.imgBg.data.attributes.url}
				alt={client.imgBg.data.attributes.alternativeText
					? client.imgBg.data.attributes.alternativeText
					: client.name}
				class="h-full w-full animate-fade object-cover animate-delay-[1250ms]"
			/>
		{/if}
	</div>
	<HeaderWave />
	<div class="absolute inset-x-0 bottom-0 z-0 h-20 w-full bg-seance max-lg:hidden" />
</div>
