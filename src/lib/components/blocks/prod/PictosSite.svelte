<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Google from "$lib/assets/svg/Google.svelte";
	import Medal from "$lib/assets/svg/Medal.svelte";
	import Search2 from "$lib/assets/svg/Search2.svelte";
	import Graph from "$lib/assets/svg/Graph.svelte";
  import Shape from "$lib/assets/svg/Shape.svelte";
  import Line from "../utilities/Line.svelte";

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

  export let title: string;
</script>

<div class="big-container"
  use:inview={options}
  on:inview_change={handleChange}
>
  <div class="flex flex-col justify-center items-center">
    <Line color="bg-seance" />
    <h2 class="text-center text-bright text-3">
      {title}
    </h2>
  </div>
  <div class="flex justify-between lg:mt-40">
    <div
      class="flex-1 flex flex-col gap-10 items-center animate-delay-[250ms] {isInView ? 'animate-fade' : 'opacity-0'}"
    >
      <div class="relative">
        <Shape newClass="fill-seance" />
        <Medal newClass="absolute top-5 left-1/2 transform -translate-x-1/2" />
      </div>
      <h3 class="text-5 text-center">
        Une approche<br />mobile-first
      </h3>
    </div>
    <div
      class="flex-1 flex flex-col gap-10 items-center animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}"
    >
      <div class="relative">
        <Shape newClass="fill-seance" />
        <Google newClass="absolute top-7 left-1/2 transform -translate-x-1/2" />
      </div>
      <h3 class="text-5 text-center">
        Un design personnalisé
      </h3>
    </div>
    <div
      class="flex-1 flex flex-col gap-10 items-center animate-delay-[750ms] {isInView ? 'animate-fade' : 'opacity-0'}"
    >
      <div class="relative">
        <Shape newClass="fill-seance" />
        <Search2 newClass="absolute top-5 left-1/2 transform -translate-x-1/2" />
      </div>
      <h3 class="text-5 text-center">
        Un développement<br />sur mesure
      </h3>
    </div>
    <div
      class="flex-1 flex flex-col gap-10 items-center animate-delay-1000 {isInView ? 'animate-fade' : 'opacity-0'}"
    >
      <div class="relative">
        <Shape newClass="fill-seance" />
        <Google newClass="absolute top-7 left-1/2 transform -translate-x-1/2" />
      </div>
      <h3 class="text-5 text-center">
        Une optimisation SEO
      </h3>
    </div>
    <div
      class="flex-1 flex flex-col gap-10 items-center animate-delay-[1250ms] {isInView ? 'animate-fade' : 'opacity-0'}"
    >
      <div class="relative">
        <Shape newClass="fill-seance" />
        <Graph newClass="absolute top-4 left-1/2 transform -translate-x-1/2" />
      </div>
      <h3 class="text-5 text-center">
        Un parcours<br />utilisateur optimisé
      </h3>
    </div>
  </div>
</div>