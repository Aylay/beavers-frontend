<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	
  import UseCase from "../common/UseCase.svelte";
  import Line from "../utilities/Line.svelte";
	import Cta2 from '../utilities/CTA2.svelte';

  let isInView: boolean;
  const options: Options = {
    unobserveOnEnter: true,
    rootMargin: '-50px'
  };

  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView = detail.inView;
  };

  export let useCases: Array<any>;
</script>

<div class="big-container flex flex-col items-center">
  <Line />
  <p class="text-3 text-seance">
    Nos autres <span class="font-highlight text-[5.7rem] leading-[3rem] text-bright">prestations</span> pour ce client
  </p>
  <div class="mt-12 flex flex-col items-center gap-8">
    {#each useCases as useCase, i}
      <Cta2 href="/cas/{useCase.slug}" label={useCase.title} {i} {isInView} />
    {/each}
  </div>
</div>