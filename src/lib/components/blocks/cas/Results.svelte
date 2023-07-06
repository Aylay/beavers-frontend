<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import Line from '../utilities/Line.svelte';
	import Cta from '$lib/components/blocks/utilities/CTA.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

  export let resultText: string;
  export let results: Array<any>;
  export let website: string;
  export let brand: any;
  export let color: string = '';
</script>

<div
  class="big-container py-32 lg:py-40"
  use:inview={options}
  on:inview_change={handleChange}
>
  <h2 class="max-lg:w-screen text-center max-lg:transform max-lg:-translate-x-[5%] uppercase text-[calc(100vw*0.14)] max-lg:overflow-visible lg:text-[8.5rem] leading-none font-extrabold mb-4 text-bright">
    les résultats<span class="block text-outline">obtenus</span>
  </h2>
  <div class="my-8 flex justify-center">
    <Line />
  </div>
  <p class="text-5 text-center small-container mb-24">
    {@html resultText}
  </p>
  <div class="flex max-lg:flex-col justify-between gap-16">
    {#each results as result, i}
      <div class="flex-1 text-center flex flex-col gap-4 {isInView ? 'animate-fade' : 'opacity-0'}"
      style="animation-delay: {150 * i}ms;">
        <p class="text-[6rem] font-bold leading-[5rem]" style="color: {color}">
          {result.number}
        </p>
        <p class="text-6">
          {result.text}
        </p>
      </div>
    {/each}
  </div>
  <div class="flex justify-center max-lg:flex-col max-lg:items-center gap-12 mt-24 lg:mt-32">
    <div>
      <Cta label="Voir le site de {brand.name}" href={website} type="transparent" blank={true} />
    </div>
    <div>
      <Cta label="Parlons de votre projet !" href="/contactez-nous" type="seance" />
    </div>
  </div>
</div>