<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Google from "$lib/assets/svg/Google.svelte";
	import Mobile from "$lib/assets/svg/Mobile.svelte";
	import Pencil from "$lib/assets/svg/Pencil.svelte";
	import Code from "$lib/assets/svg/Code.svelte";
	import Cursor from "$lib/assets/svg/Cursor.svelte";
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
  <div class="flex max-lg:flex-wrap max-lg:gap-12 justify-between mt-20 lg:mt-40">
    <div
      class="flex-1 flex flex-col gap-10 items-center animate-delay-[250ms] {isInView ? 'animate-fade' : 'opacity-0'}"
    >
      <div class="relative">
        <Shape newClass="fill-seance" />
        <Mobile newClass="absolute top-5 left-1/2 transform -translate-x-1/2 fill-white" />
      </div>
      <h3 class="text-5 text-center">
        Mobile-first
      </h3>
    </div>
    <div
      class="flex-1 flex flex-col gap-10 items-center animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}"
    >
      <div class="relative">
        <Shape newClass="fill-seance" />
        <Pencil newClass="absolute top-7 left-1/2 transform -translate-x-1/2" />
      </div>
      <h3 class="text-5 text-center">
        Design personnalisé
      </h3>
    </div>
    <div
      class="flex-1 flex flex-col gap-10 items-center animate-delay-[750ms] {isInView ? 'animate-fade' : 'opacity-0'}"
    >
      <div class="relative">
        <Shape newClass="fill-seance" />
        <Code newClass="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-x-1/2" />
      </div>
      <h3 class="text-5 text-center">
        Développement<br />sur mesure
      </h3>
    </div>
    <div
      class="flex-1 flex flex-col gap-10 items-center animate-delay-1000 {isInView ? 'animate-fade' : 'opacity-0'}"
    >
      <div class="relative">
        <Shape newClass="fill-seance" />
        <Cursor newClass="absolute top-8 left-1/2 transform -translate-x-1/2" />
      </div>
      <h3 class="text-5 text-center">
        Parcours<br />utilisateur
      </h3>
    </div>
    <div
      class="flex-1 flex flex-col gap-10 items-center animate-delay-[1250ms] {isInView ? 'animate-fade' : 'opacity-0'}"
    >
      <div class="relative">
        <Shape newClass="fill-seance" />
        <Google newClass="absolute top-7 left-1/2 transform -translate-x-1/2" />
      </div>
      <h3 class="text-5 text-center">
        Optimisation<br />SEO
      </h3>
    </div>
  </div>
</div>