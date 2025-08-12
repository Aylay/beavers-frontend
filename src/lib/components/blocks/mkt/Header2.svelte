<script lang="ts">
	import ArrowBottom from '$lib/assets/svg/ArrowBottom.svelte';
	import Mouse from '$lib/assets/svg/Mouse.svelte';

	export let title: string;
	export let subtitle: string;
	export let intro: string;
	export let words: Array<string>;

	let allWords: Array<string> = [];
	for (const word of words) {
		const newWords = word.split(' ');
		allWords = allWords.concat(newWords);
	}
	allWords = allWords.concat(allWords);
</script>

<div>
	<div class="relative overflow-hidden bg-rock max-lg:pt-60 lg:h-screen">
		<div
			class="big-container relative z-20 flex flex-col items-center justify-center max-lg:pb-20 lg:h-screen"
		>
			<div class="flex w-full flex-col">
				<div class="flex w-full">
					<div class="flex flex-col lg:w-1/2 lg:pr-20">
						<ul class="mb-20 flex flex-wrap gap-5 max-lg:hidden">
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
									href="/marketing-digital"
									title="Marketing digital des castors"
									class="text-7 font-semibold text-electric transition-colors hover:text-bright"
								>
									Marketing digital
								</a>
							</li>
							<li class="text-7 font-bold text-bright">|</li>
							<li class="text-7 font-semibold text-white">
								{title.replace(/<(.|\n)*?>/g, '')}
							</li>
						</ul>
						<h1 class="mb-4 text-3">
							{@html title}
						</h1>
						<h2 class="mb-16 text-4 font-semibold text-seance">
							{@html subtitle}
						</h2>
						<h3 class="mb-16 text-6 font-semibold text-bright">
							{@html intro}
						</h3>
						<div class="flex w-8 flex-col items-center gap-2">
							<Mouse newClass="h-auto w-full" color="#FFF" />
							<ArrowBottom newClass="animate-bounce" color="#FFF" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<div
			class="absolute inset-y-0 right-0 z-0 flex max-h-full w-1/2 items-center overflow-hidden bg-seance max-lg:hidden"
		>
			<div class="w-full scale-105 transform">
				{#each allWords as word, i}
					<span
						class="animate-fade text-1 leading-none tracking-wider break-all text-purple"
						style="animation-delay: {150 * i}ms;"
					>
						{word}
					</span>
				{/each}
			</div>
		</div>
	</div>
</div>
