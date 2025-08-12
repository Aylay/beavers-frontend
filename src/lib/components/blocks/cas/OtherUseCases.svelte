<script lang="ts">
	import Line from '../utilities/Line.svelte';
	import Cta2 from '../utilities/CTA2.svelte';

	export let useCases: Array<any>;
</script>

<div class="big-container flex flex-col items-center">
	<Line />
	<p class="text-center text-3 text-seance">
		Nos autres <span class="font-highlight text-[5.7rem] leading-[3rem] font-normal text-bright"
			>prestations</span
		> pour ce client
	</p>
	<div class="mt-12 flex flex-col items-center gap-8">
		{#each useCases as useCase, i}
			<Cta2 href="/cas/{useCase.attributes.slug}" label={useCase.attributes.title} {i} />
		{/each}
	</div>
</div>
