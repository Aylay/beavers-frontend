<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
  
	import Tree from "$lib/assets/svg/Tree.svelte";
	import Sun from "$lib/assets/svg/Sun2.svelte";
	import People from "$lib/assets/svg/People.svelte";
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
  <h3 class="text-3 text-seance text-center">
    Les <span class="text-[5.7rem] leading-[3rem] text-bright font-normal font-highlight">objectifs</span> de Tree Nation
  </h3>
  <div class="flex max-lg:flex-col justify-between gap-14 mt-20 lg:mt-40">
    <div
      class="flex-1 flex flex-col gap-6 items-center animate-delay-[250ms] {isInView ? 'animate-fade' : 'opacity-0'}"
    >
      <div class="relative">
        <Shape newClass="fill-seance" />
        <Tree newClass="absolute top-5 left-1/2 transform -translate-x-1/2" />
      </div>
      <h3 class="text-5 text-center mt-4">
        <span class="text-bright">Mettre fin</span><br />à la déforestation
      </h3>
      <p class="text-6 text-center">
        Chacun des projets de Tree-Nation se bat contre les taux alarmants de déforestation dans le monde.
      </p>
    </div>
    <div
      class="flex-1 flex flex-col gap-6 items-center animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}"
    >
      <div class="relative">
        <Shape newClass="fill-seance" />
        <Sun newClass="absolute top-5 left-1/2 transform -translate-x-1/2" />
      </div>
      <h3 class="text-5 text-center mt-4">
        <span class="text-bright">Combattre</span><br />le changement climatique
      </h3>
      <p class="text-6 text-center">
        Planter des arbres a été reconnu par la communauté scientifique comme un pilier essentiel pour s'attaquer au changement climatique.
      </p>
    </div>
    <div
      class="flex-1 flex flex-col gap-6 items-center animate-delay-[750ms] {isInView ? 'animate-fade' : 'opacity-0'}"
    >
      <div class="relative">
        <Shape newClass="fill-seance" />
        <People newClass="absolute top-6 left-1/2 transform -translate-x-1/2" />
      </div>
      <h3 class="text-5 text-center mt-4">
        <span class="text-bright">Soutenir</span><br />les communautés locales
      </h3>
      <p class="text-6 text-center">
        Leurs projets ont également un impact économique positif sur les populations locales.
      </p>
    </div>
  </div>
</div>