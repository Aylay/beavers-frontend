<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
  
	import Sea from "$lib/assets/svg/Sea.svelte";
	import Shrimp from "$lib/assets/svg/Shrimp.svelte";
	import Fish from "$lib/assets/svg/Fish.svelte";
	import Bottle from "$lib/assets/svg/Bottle.svelte";
  import Shape from "$lib/assets/svg/Shape.svelte";

  let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

</script>

<div class="big-container"
  use:inview={options}
  on:inview_change={handleChange}
>
  <p class="text-center text-bright font-highlight text-[5.7rem] leading-[3rem]">
    Le saviez-vous* ?
  </p>
  <div class="flex max-lg:flex-col justify-between gap-14 mt-20 lg:mt-40">
    <div
      class="flex-1 flex flex-col gap-6 items-center animate-delay-[250ms] {isInView ? 'animate-fade' : 'opacity-0'}"
    >
      <div class="relative">
        <Shape newClass="fill-seance" />
        <Sea newClass="absolute top-8 left-1/2 transform -translate-x-1/2" />
      </div>
      <h3 class="text-5 text-center mt-4">
        + de 8 000 000
      </h3>
      <p class="text-6 text-center">
        de tonnes de déchets plastiques se déversent chaque année dans les mers.
      </p>
    </div>
    <div
      class="flex-1 flex flex-col gap-6 items-center animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}"
    >
      <div class="relative">
        <Shape newClass="fill-seance" />
        <Shrimp newClass="absolute top-7 left-1/2 transform -translate-x-1/2 rotate-180" />
      </div>
      <h3 class="text-5 text-center mt-4">
        100 000
      </h3>
      <p class="text-6 text-center">
        mammifères marins tués chaque année.
      </p>
    </div>
    <div
      class="flex-1 flex flex-col gap-6 items-center animate-delay-[750ms] {isInView ? 'animate-fade' : 'opacity-0'}"
    >
      <div class="relative">
        <Shape newClass="fill-seance" />
        <Fish newClass="absolute top-8 left-1/2 transform -translate-x-1/2" />
      </div>
      <h3 class="text-5 text-center mt-4">
        + de 1 400
      </h3>
      <p class="text-6 text-center">
        espèces marines déjà impactées.
      </p>
    </div>
    <div
      class="flex-1 flex flex-col gap-6 items-center animate-delay-1000 {isInView ? 'animate-fade' : 'opacity-0'}"
    >
      <div class="relative">
        <Shape newClass="fill-seance" />
        <Bottle newClass="absolute top-5 left-1/2 transform -translate-x-1/2" />
      </div>
      <h3 class="text-5 text-center mt-4">
        70%
      </h3>
      <p class="text-6 text-center">
        des déchets flottants finissent par couler.
      </p>
    </div>
  </div>
  <p class="text-center text-6 mt-16">
    Source : <a href="https://www.theseacleaners.org/" target="_blank" title="The Sea Cleaners" class="text-electric underline hover:text-bright font-semibold">The Sea Cleaners</a>
  </p>
</div>