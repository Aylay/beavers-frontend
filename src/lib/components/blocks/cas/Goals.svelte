<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

  const strapiURL = import.meta.env.VITE_STRAPI_URL;

  let isInView: boolean;
  const options: Options = {
    unobserveOnEnter: true,
    rootMargin: '50px'
  };

  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView = detail.inView;
  };

  export let goals: Array<any>;
  export let goalsImg: any
  export let title: string;
</script> 

<div class="big-container flex items-center gap-32 lg:gap-40 max-lg:flex-col"
  use:inview={options}
  on:inview_change={handleChange}
>
  <div class="flex-1">
    <p class="text-5 text-bright">
      Les objectifs à atteindre
    </p>
    <div class="mt-8 flex flex-col gap-16 lg:w-3/4">
      {#each goals as goal, i}
      <div
        class="flex max-lg:flex-col cursor-pointer lg:items-center max-lg:gap-6 gap-12 {isInView ? 'animate-fade-right' : 'opacity-0'}"
        style="animation-delay: {150 * i}ms;"
      >
        <p class="w-32 text-[5rem] font-semibold leading-none text-seance">
          0{i + 1}<span class="text-bright">.</span>
        </p>
        <p class="flex-1 text-6 font-semibold">
          {goal.text}
        </p>
      </div>
      {/each}
    </div>
  </div>
  <div class="max-lg:w-full lg:flex-1 h-[36rem] lg:h-[55rem] flex flex-col gap-8">
    {#if isInView}
    <img 
      src={strapiURL + goalsImg.url}
      alt={goalsImg.alternativeText ? goalsImg.alternativeText : title}
      class="w-full h-full object-cover rounded-lg overflow-hidden {isInView ? 'animate-fade' : 'opacity-0'}"
      style="animation-delay: {150 * (goals.length) + 150}ms;"
    />
    {/if}
  </div>
</div>