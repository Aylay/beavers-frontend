<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Line from "$lib/components/blocks/utilities/Line.svelte";
	import LeadForm from "$lib/components/blocks/lp/LeadForm.svelte";
	import Star from '$lib/assets/svg/Star.svelte';
	import Trafic from '$lib/assets/svg/Trafic.svelte';
	import Conversion from '$lib/assets/svg/Conversion.svelte';

  const words = [
    'Habitat', 'Ameublement', 'Rendez-vous', 'Demande de devis', 'Informations'
  ]

  const title = 'Agence digitale spécialisée <span class="font-highlight text-[5.7rem] leading-[3rem] text-bright font-normal">Habitat</span>'

  let allWords: Array<string> = []
  for (const word of words) {
    const newWords = word.split(' ');
    allWords = allWords.concat(newWords)
  }
  allWords = allWords.concat(allWords)
  allWords = allWords.concat(allWords)

  let isInView: boolean;
  const options: Options = {
    unobserveOnEnter: true,
    rootMargin: '-50px'
  };

  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView = detail.inView;
  };
</script>

<div class="lg:h-screen bg-rock relative overflow-hidden max-lg:pt-60 max-lg:pb-28 flex justify-center items-center"
use:inview={options}
on:inview_change={handleChange}>
  <div class="big-container items-center bg-rock relative z-20 flex justify-between gap-16 lg:gap-32 max-lg:flex-col">
    <div class="flex-1">
      <Line />
      <h1 class="text-3 text-seance">
        {@html title}
      </h1>
      <h2 class="text-5 lg:text-4 lg:leading-tight mt-8">
        Nous propulsons les pros de l'habitat<br /><span class="text-bright-turquoise">vers leur réussite digitale</span>
      </h2>
      <div class="flex flex-col gap-12 justify-between mt-16">
        <div class="flex gap-4 items-center animate-delay-[750ms] {isInView
          ? 'animate-fade'
          : 'opacity-0'}">
          <Star newClass="w-12 h-auto fill-seance" />
          <h3 class="font-bold text-5">Notoriété</h3>
        </div>
        <div class="flex gap-4 items-center animate-delay-1000 {isInView
          ? 'animate-fade'
          : 'opacity-0'}">
          <Trafic newClass="w-12 h-auto" fill="#8013BD" />
          <h3 class="font-bold text-5">Trafic</h3>
        </div>
        <div class="flex gap-4 items-center animate-delay-[1250ms] {isInView
          ? 'animate-fade'
          : 'opacity-0'}">
          <Conversion newClass="w-12 h-auto fill-seance" />
          <h3 class="font-bold text-5">Conversion</h3>
        </div>
      </div>
    </div>
    <div class="py-20 lg:px-20 lg:max-w-[73rem] w-full" id="lp-habitat">
      <LeadForm />
    </div>
  </div>
  <div class="max-lg:hidden w-1/3 bg-bright max-h-full overflow-hidden absolute z-0 inset-y-0 right-0 flex items-center">
    <div class="w-full transform scale-105">
      {#each allWords as word, i}
      <span 
        class="text-1 text-bright-turquoise tracking-wider leading-none break-all animate-fade" 
        style="animation-delay: {150 * i}ms;"
      >
        {word}
      </span>
      {/each}
    </div>
  </div>
</div>