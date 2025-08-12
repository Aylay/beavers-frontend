<script lang="ts">
	import { page } from '$app/stores';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import { DateTime } from 'luxon';
	import SvelteMarkdown from 'svelte-markdown';

	import ArrowBottom from '$lib/assets/svg/ArrowBottom.svelte';
	import Mouse from '$lib/assets/svg/Mouse.svelte';
	import Feather from '$lib/assets/svg/Feather.svelte';
	import Calendar from '$lib/assets/svg/Calendar.svelte';
	import Tag from '$lib/assets/svg/Tag.svelte';
	import Clock from '$lib/assets/svg/Clock.svelte';
	import LDTag from '$lib/components/utilities/LDTag.svelte';

	const mdOptions = {
		breaks: true,
		gfm: true,
		headerIds: false
	};

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	const strapiURL = import.meta.env.VITE_STRAPI_URL;

	export let words: Array<string>;
	export let category: any;
	export let img: any;
	export let title: string;
	export let intro: string;
	export let publishedDate: string;
	export let updatedDate: string;
	export let author: string;
	export let readingTime: number;
	export let IA: boolean = false;
	let allWords: Array<string> = [];

	$: {
		allWords = [];
		for (const word of words) {
			const newWords = word.split(' ');
			allWords = allWords.concat(newWords);
		}
		allWords = allWords.concat(allWords);
		allWords = allWords.concat(allWords);
	}

	const siteURL = import.meta.env.VITE_SITE_URL;

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
				name: 'La pause cafe',
				item: siteURL + '/la-pause-cafe'
			},
			{
				'@type': 'ListItem',
				position: 3,
				name: category.title,
				item: siteURL + '/la-pause-cafe/' + category.slug
			},
			{
				'@type': 'ListItem',
				position: 4,
				name: title.replace(/&nbsp;/g, ' '),
				item: siteURL + '/la-pause-cafe/' + category.slug + '/' + $page.params.slug
			}
		]
	};
</script>

<LDTag {schema} />

<div>
	<div class="relative overflow-hidden bg-rock max-lg:pt-60 lg:h-screen">
		<div class="flex h-full flex-col items-end justify-end lg:w-2/3">
			<div
				class="mb-16 flex w-full max-w-[90rem] flex-col max-lg:px-[5%] lg:mb-[calc(100vh*0.1)] lg:items-end lg:pr-40"
			>
				<nav aria-label="Breadcrumb" class="max-lg:hidden">
					<ol class="mb-20 flex flex-wrap justify-end gap-5 max-lg:hidden">
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
								href="/la-pause-cafe"
								title="La pause café Beavers"
								class="text-7 font-semibold text-electric transition-colors hover:text-bright"
							>
								La pause café
							</a>
						</li>
						<li class="text-7 font-bold text-bright">|</li>
						<li>
							<a
								href="/la-pause-cafe/{category.slug}"
								title={category.title}
								class="text-7 font-semibold text-electric transition-colors hover:text-bright"
							>
								{category.title}
							</a>
						</li>
						<li class="text-7 font-bold text-bright">|</li>
						<li>
							<a
								href="/la-pause-cafe/{category.slug}/{$page.params.slug}"
								aria-current="page"
								class="pointer-events-none text-7 font-semibold text-white"
								title={title.replace(/&nbsp;/g, ' ')}
							>
								{@html title.replace(' ?', '&nbsp;?')}
							</a>
						</li>
					</ol>
				</nav>
				<h1 class="mb-20 text-3 lg:text-right">
					{@html title.replace(' ?', '&nbsp;?')}
				</h1>
				{#if updatedDate !== ''}
					<p class="mb-12 text-6 font-bold text-bright lg:text-right">
						Article mis à jour le {updatedDate}.
					</p>
				{/if}
				<div class="flex w-8 flex-col items-center gap-2">
					<Mouse newClass="h-auto w-full" color="#FFF" />
					<ArrowBottom newClass="animate-bounce" color="#FFF" />
				</div>
			</div>
			<div
				class="flex w-full max-w-[90rem] justify-between gap-7 bg-seance max-lg:grid max-lg:grid-cols-2 max-lg:justify-center max-lg:px-[5%] max-lg:py-10 lg:relative lg:py-[calc(100vh*0.06)] lg:pr-40 lg:before:absolute lg:before:inset-y-0 lg:before:right-0 lg:before:z-0 lg:before:h-full lg:before:w-[calc(100vw*2/3)] lg:before:bg-seance"
			>
				<div
					class="relative z-10 flex flex-1 animate-fade flex-col items-center animate-delay-[250ms]"
				>
					<div>
						<Feather newClass="w-auto h-12 fill-bright" />
					</div>
					<p class="mt-4 text-6">Ecrit par</p>
					<p class="text-6 font-bold">
						{author}
					</p>
				</div>
				<div class="relative z-10 flex flex-1 animate-fade flex-col items-center animate-delay-500">
					<div>
						<Calendar newClass="w-auto h-12 fill-bright" />
					</div>
					<p class="mt-4 text-6">Publié le</p>
					<time
						datetime={DateTime.fromFormat(publishedDate, 'dd LLL yyyy', { locale: 'fr' }).toFormat(
							'yyyy-LL-dd',
							{ locale: 'fr' }
						)}
						class="text-6 font-bold"
					>
						{publishedDate}
					</time>
				</div>
				<div
					class="relative z-10 flex flex-1 animate-fade flex-col items-center animate-delay-[750ms]"
				>
					<div>
						<Tag newClass="w-auto h-12 fill-bright" />
					</div>
					<p class="mt-4 text-6">Catégorie</p>
					<p class="text-6 font-bold">
						{category.title}
					</p>
				</div>
				<div
					class="relative z-10 flex flex-1 animate-fade flex-col items-center animate-delay-1000"
				>
					<div>
						<Clock newClass="w-auto h-12 fill-bright" />
					</div>
					<p class="mt-4 text-6">Lecture</p>
					<p class="text-6 font-bold">
						{readingTime} minute{readingTime > 1 ? 's' : ''}
					</p>
				</div>
			</div>
		</div>

		<div
			class="absolute inset-y-0 right-0 z-0 flex max-h-full w-1/3 items-center overflow-hidden bg-bright max-lg:hidden"
		>
			<div class="w-full scale-105 transform">
				{#each allWords as word, i}
					<span
						class="animate-fade text-1 leading-none tracking-wider break-all text-bright-turquoise"
						style="animation-delay: {150 * i}ms;"
					>
						{word}
					</span>
				{/each}
			</div>
		</div>
	</div>

	<div
		class="big-container mt-40 flex items-center gap-40 max-lg:mt-20 max-lg:flex-col max-lg:gap-20"
		use:inview={options}
		on:inview_change={handleChange}
	>
		<div class="relative h-[36rem] w-full lg:order-2 lg:flex-1">
			{#if isInView}
				<img
					src={img.formats && img.formats.medium
						? strapiURL + img.formats.medium.url
						: strapiURL + img.url}
					alt={img.alternativeText ? img.alternativeText : title.replace(/&nbsp;/g, ' ')}
					class="h-full w-full overflow-hidden rounded-lg object-cover {isInView
						? 'animate-fade'
						: 'opacity-0'}"
				/>
			{/if}
			{#if IA}
				<p class="absolute right-4 bottom-4 rounded-3xl bg-seance px-6 py-2 text-7">
					Image générée par une IA
				</p>
			{/if}
		</div>
		<div class="flex-1 lg:order-1">
			<h2 class="content-style">
				<SvelteMarkdown source={intro} options={mdOptions} />
			</h2>
		</div>
	</div>
</div>
