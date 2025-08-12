<script lang="ts">
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import SvelteMarkdown from 'svelte-markdown';

	import Line from '$lib/components/blocks/utilities/Line.svelte';
	import Cta from '$lib/components/blocks/utilities/CTA.svelte';

	const mdOptions = {
		breaks: true,
		gfm: true,
		headerIds: false
	};

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

	const strapiURL = import.meta.env.VITE_STRAPI_URL;

	export let block: any;
	export let title: string;

	onMount(() => {
		addTargetBlank();
	});

	function addTargetBlank() {
		let links = document.querySelectorAll('.content-style a');

		for (const el of Array.from(links) as HTMLAnchorElement[]) {
			if (el.hostname !== window.location.hostname) el.target = '_blank';
		}
	}
</script>

{#if block.layout === 'texte'}
	<div
		class="small-container content-style flex flex-col gap-8 {isInView
			? 'animate-fade'
			: 'opacity-0'}"
		use:inview={options}
		on:inview_change={handleChange}
	>
		<SvelteMarkdown source={block.text1} options={mdOptions} />
	</div>
{/if}

{#if block.layout === 'image'}
	<div
		class="big-container relative w-full"
		use:inview={optionsImg}
		on:inview_change={handleChangeImg}
	>
		{#if isInViewImg}
			<img
				src={block.img.data.attributes.formats && block.img.data.attributes.formats.large
					? strapiURL + block.img.data.attributes.formats.large.url
					: strapiURL + block.img.data.attributes.url}
				alt={block.img.data.attributes.alternativeText
					? block.img.data.attributes.alternativeText
					: title.replace(/&nbsp;/g, ' ')}
				class="h-full w-full overflow-hidden rounded-lg object-cover {isInViewImg
					? 'animate-fade'
					: 'opacity-0'}"
			/>
		{/if}
		{#if block.IA}
			<p class="absolute right-4 bottom-4 rounded-3xl bg-seance px-6 py-2 text-7">
				Image générée par une IA
			</p>
		{/if}
		{#if block.legend}
			<div class="content-style absolute -bottom-12 w-full text-right">
				<SvelteMarkdown source={block.legend} options={mdOptions} />
			</div>
		{/if}
	</div>
{/if}

{#if block.layout === 'iframe'}
	<div
		class="iframe-div big-container w-full"
		use:inview={optionsImg}
		on:inview_change={handleChangeImg}
	>
		{#if isInViewImg}
			{@html block.iframe}
		{/if}
	</div>
{/if}

{#if block.layout === 'texte + texte'}
	<div
		class="small-container flex gap-32 max-lg:flex-col lg:gap-40"
		use:inview={options}
		on:inview_change={handleChange}
	>
		<div class="content-style flex flex-1 flex-col gap-8 {isInView ? 'animate-fade' : 'opacity-0'}">
			<SvelteMarkdown source={block.text1} options={mdOptions} />
		</div>
		<div
			class="content-style flex flex-1 flex-col gap-8 animate-delay-[250ms] {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<SvelteMarkdown source={block.text2} options={mdOptions} />
		</div>
	</div>
{/if}

{#if block.layout === 'texte + image'}
	<div
		class="big-container flex gap-32 max-lg:flex-col lg:gap-40"
		use:inview={optionsImg}
		on:inview_change={handleChangeImg}
	>
		<div
			class="content-style flex flex-1 flex-col gap-8 {isInViewImg ? 'animate-fade' : 'opacity-0'}"
		>
			<SvelteMarkdown source={block.text1} options={mdOptions} />
		</div>
		<div class="relative flex-1">
			{#if isInViewImg}
				<img
					src={block.img.data.attributes.formats && block.img.data.attributes.formats.medium
						? strapiURL + block.img.data.attributes.formats.medium.url
						: strapiURL + block.img.data.attributes.url}
					alt={block.img.data.attributes.alternativeText
						? block.img.data.attributes.alternativeText
						: title.replace(/&nbsp;/g, ' ')}
					class="h-full w-full overflow-hidden rounded-lg object-cover animate-delay-[250ms] {isInViewImg
						? 'animate-fade'
						: 'opacity-0'}"
				/>
			{/if}
			{#if block.IA}
				<p class="absolute right-4 bottom-4 rounded-3xl bg-seance px-6 py-2 text-7">
					Image générée par une IA
				</p>
			{/if}
			{#if block.legend}
				<div class="content-style absolute -bottom-12 w-full text-right">
					<SvelteMarkdown source={block.legend} options={mdOptions} />
				</div>
			{/if}
		</div>
	</div>
{/if}

{#if block.layout === 'image + texte'}
	<div
		class="big-container flex gap-32 max-lg:flex-col lg:gap-40"
		use:inview={optionsImg}
		on:inview_change={handleChangeImg}
	>
		<div class="relative flex-1 max-lg:order-2">
			{#if isInViewImg}
				<img
					src={block.img.data.attributes.formats && block.img.data.attributes.formats.medium
						? strapiURL + block.img.data.attributes.formats.medium.url
						: strapiURL + block.img.data.attributes.url}
					alt={block.img.data.attributes.alternativeText
						? block.img.data.attributes.alternativeText
						: title.replace(/&nbsp;/g, ' ')}
					class="h-full w-full overflow-hidden rounded-lg object-cover {isInViewImg
						? 'animate-fade'
						: 'opacity-0'}"
				/>
			{/if}
			{#if block.IA}
				<p class="absolute right-4 bottom-4 rounded-3xl bg-seance px-6 py-2 text-7">
					Image générée par une IA
				</p>
			{/if}
			{#if block.legend}
				<div class="content-style absolute -bottom-12 w-full max-lg:text-right">
					<SvelteMarkdown source={block.legend} options={mdOptions} />
				</div>
			{/if}
		</div>
		<div
			class="content-style flex flex-1 flex-col gap-8 animate-delay-[250ms] max-lg:order-1 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
			use:inview={options}
			on:inview_change={handleChange}
		>
			<SvelteMarkdown source={block.text1} options={mdOptions} />
		</div>
	</div>
{/if}

{#if block.layout === 'citation'}
	<div class="big-container" use:inview={options} on:inview_change={handleChange}>
		<Line />
		<div class="flex gap-8 max-lg:flex-col lg:items-center lg:justify-between lg:gap-16">
			<div class="flex-1">
				<h2
					class="text-5 font-semibold text-seance lg:text-4 {isInView
						? 'animate-fade-right'
						: 'opacity-0'}"
				>
					{@html block.citation}
				</h2>
			</div>
			{#if block.link && block.ctaLabel}
				<div class="flex">
					<Cta label={block.ctaLabel} href={block.link} type="transparent" blank />
				</div>
			{/if}
		</div>
	</div>
{/if}
