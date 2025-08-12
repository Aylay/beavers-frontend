<script lang="ts">
	import ArrowBottom from '$lib/assets/svg/ArrowBottom.svelte';
	import Mouse from '$lib/assets/svg/Mouse.svelte';

	let words: Array<string> = [
		'Keune Haircosmetcs',
		'Cafés Richard',
		'Terre Rouge',
		'Imagine 2050',
		'Caffé Roma',
		'Lise Laure Blaizot'
	];

	let allWords: Array<string> = [];
	for (const word of words) {
		const newWords = word.split(' ');
		allWords = allWords.concat(newWords);
	}
	allWords = allWords.concat(allWords);
</script>

<div>
	<div class="relative overflow-hidden bg-rock max-lg:pt-60 max-lg:pb-28 lg:h-screen">
		<div class="big-container relative z-20 flex flex-col items-center justify-center lg:h-screen">
			<div class="flex w-full flex-col max-lg:gap-8">
				<h1 class="text-outline text-1-m lg:text-center lg:text-1">Etudes de cas</h1>
				<h2 class="text-4 font-semibold lg:text-center lg:text-3">
					Stratégie. Réalisation. Satisfaction.
				</h2>
				<div class="flex w-full justify-end lg:mt-32">
					<div class="lg:w-1/2 lg:pl-20">
						<h2 class="mb-16 text-left text-6 font-semibold text-bright">
							Ils ont fait appel à Beavers pour leurs projets digitaux, et voici ce que nos castors
							ont construit pour répondre à leurs demandes.
						</h2>
						<div class="flex w-8 flex-col items-center gap-2">
							<Mouse newClass="h-auto w-full" color="#FFF" />
							<ArrowBottom newClass="animate-bounce" color="#FFF" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<div
			class="absolute inset-y-0 left-0 z-0 flex max-h-full w-1/2 items-center overflow-hidden bg-seance max-lg:hidden"
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
