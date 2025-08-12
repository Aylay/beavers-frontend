<script lang="ts">
	import Line from '$lib/components/blocks/utilities/Line.svelte';
	import LeadForm from '$lib/components/blocks/agence/page/LeadForm.svelte';

	export let title: string;
	export let subtitle: string;
	export let intro: string;
	export let words: Array<string>;

	let allWords: Array<string> = [];
	for (const word of words) {
		const newWords = word.text.split(' ');
		allWords = allWords.concat(newWords);
	}
	allWords = allWords.concat(allWords);
</script>

<div
	class="relative flex items-center justify-center overflow-hidden bg-rock max-lg:pt-60 max-lg:pb-28 lg:h-screen"
>
	<div
		class="big-container relative z-20 flex items-center justify-between gap-16 max-lg:flex-col lg:gap-32"
	>
		<div class="flex-1">
			<Line />
			<h1 class="mb-4 text-3">
				{@html title}
			</h1>
			<h2 class="mb-16 text-4 font-semibold text-seance">
				{@html subtitle}
			</h2>
			<h3 class="mb-16 text-6 font-semibold text-bright">
				{@html intro}
			</h3>
		</div>
		<div class="w-full bg-rock py-20 lg:max-w-[73rem] lg:px-20">
			<LeadForm {title} />
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
