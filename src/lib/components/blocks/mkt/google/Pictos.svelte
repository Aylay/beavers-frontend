<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Mobile from "$lib/assets/svg/Mobile.svelte";
	import Pencil from "$lib/assets/svg/Pencil.svelte";
	import Trafic from '$lib/assets/svg/Trafic.svelte';
  import Thumb from '$lib/assets/svg/Thumb.svelte';
  import Shape from "$lib/assets/svg/Shape.svelte";
  import Line from "$lib/components/blocks/utilities/Line.svelte";

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
  <div class="flex max-lg:flex-wrap max-lg:gap-12 justify-between mt-20 lg:mt-40">
    <div
      class="flex-1 flex flex-col gap-10 items-center animate-delay-[250ms] {isInView ? 'animate-fade' : 'opacity-0'}"
    >
      <div class="relative">
        <Shape newClass="fill-seance" />
        <Thumb newClass="absolute top-7 left-1/2 transform -translate-x-1/2 fill-white max-w-[3.2rem] h-auto" />
      </div>
      <h3 class="text-5 text-center">
        Fonctionnement
      </h3>
    </div>
    <div
      class="flex-1 flex flex-col gap-10 items-center animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}"
    >
      <div class="relative">
        <Shape newClass="fill-seance" />
        <Mobile newClass="absolute top-5 left-1/2 transform -translate-x-1/2 fill-white" />
      </div>
      <h3 class="text-5 text-center">
        Types de campagnes
      </h3>
    </div>
    <div
      class="flex-1 flex flex-col gap-10 items-center animate-delay-[750ms] {isInView ? 'animate-fade' : 'opacity-0'}"
    >
      <div class="relative">
        <Shape newClass="fill-seance" />
        <Pencil newClass="absolute top-7 left-1/2 transform -translate-x-1/2" />
      </div>
      <h3 class="text-5 text-center">
        Création d'annonces
      </h3>
    </div>
    <div
      class="flex-1 flex flex-col gap-10 items-center animate-delay-1000 {isInView ? 'animate-fade' : 'opacity-0'}"
    >
      <div class="relative">
        <Shape newClass="fill-seance" />
        <Trafic newClass="absolute top-6 left-1/2 transform -translate-x-1/2" fill="#FFF" />
      </div>
      <h3 class="text-5 text-center">
        Ciblage
      </h3>
    </div>
  </div>
</div>