<script lang="ts">
	import { page } from '$app/stores';
	import ArrowBottom from '$lib/assets/svg/ArrowBottom.svelte';
	import Mouse from '$lib/assets/svg/Mouse.svelte';
	import Clock from '$lib/assets/svg/Clock.svelte';
	import Contract from '$lib/assets/svg/Contract.svelte';
	import Pin from '$lib/assets/svg/Pin.svelte';
	import LDTag from '$lib/components/utilities/LDTag.svelte';

	export let title: string;
	export let contract: string;
	export let localisation: string;
	export let when: string;
	export let words: Array<string>;

	let allWords: Array<string> = [];
	for (const word of words) {
		const newWords = word.split(' ');
		allWords = allWords.concat(newWords);
	}
	allWords = allWords.concat(allWords);
	allWords = allWords.concat(allWords);

	const siteURL = import.meta.env.VITE_SITE_URL;

	let schema = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
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
				name: 'Jobs',
				item: siteURL + '/jobs'
			},
			{
				'@type': 'ListItem',
				position: 3,
				name: title,
				item: siteURL + '/jobs/' + $page.params.slug
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
								href="/jobs"
								title="Les jobs chez Beavers"
								class="text-7 font-semibold text-electric transition-colors hover:text-bright"
							>
								Jobs
							</a>
						</li>
						<li class="text-7 font-bold text-bright">|</li>
						<li>
							<a
								href={siteURL + '/jobs/' + $page.params.slug}
								aria-current="page"
								class="pointer-events-none text-7 font-semibold text-white"
								{title}
							>
								{title}
							</a>
						</li>
					</ol>
				</nav>
				<h1 class="mb-20 text-3 lg:text-right">
					{title}
				</h1>
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
						<Contract newClass="w-auto h-12 fill-bright" />
					</div>
					<p class="mt-4 text-6">Contrat</p>
					<p class="text-6 font-bold">
						{contract}
					</p>
				</div>
				<div class="relative z-10 flex flex-1 animate-fade flex-col items-center animate-delay-500">
					<div>
						<Pin newClass="w-auto h-12 fill-bright" />
					</div>
					<p class="mt-4 text-6">Mission</p>
					<p class="text-6 font-bold">
						{localisation}
					</p>
				</div>
				<div
					class="relative z-10 flex flex-1 animate-fade flex-col items-center animate-delay-[750ms]"
				>
					<div>
						<Clock newClass="w-auto h-12 fill-bright" />
					</div>
					<p class="mt-4 text-6">A pourvoir</p>
					<p class="text-6 font-bold">
						{when}
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
</div>
