<script lang="ts">
	import Switch from "$lib/assets/svg/Switch.svelte";
	import Mouse from "$lib/assets/svg/Mouse.svelte";
	import ArrowBottom from "$lib/assets/svg/ArrowBottom.svelte";
	import Hoverable from '$lib/components/utilities/Hoverable.svelte';

  export let isOceanActive : boolean = true;
</script>

<div class="h-[calc(100vh-64px)] lg:h-screen relative flex justify-center items-center bg-rock">
  <div class="big-container flex flex-col items-center relative z-40 lg:z-20">
    <Hoverable newClass="rounded-full" let:hovering={active}>
      <button
        class="w-24 h-24 rounded-full flex justify-center items-center max-lg:transform max-lg:rotate-90 cursor-pointer transition-colors {active ? 'bg-seance lg:bg-bright' : 'bg-seance'}"
        on:click={() => isOceanActive = !isOceanActive}
      >
      
        <Switch newClass=" w-14 h-auto animate-jump animate-infinite {active ? 'fill-white lg:fill-seance' : 'fill-white'}" />
      </button>
    </Hoverable>
    <h1 class="text-center text-2 mt-10 max-lg:hidden">
      <span class="block {!isOceanActive ? 'text-outline' : ''}">
        Beavers x The Ocean Cleanup
      </span>
      <span class="block {isOceanActive ? 'text-outline' : ''}">
        Beavers x Tree-Nation
      </span>
    </h1>
    <div class="w-full flex gap-40 mt-20 max-lg:hidden">
      <div class="flex flex-col items-end flex-1 {isOceanActive ? 'opacity-0 invisible' : 'animate-fade'}">
        <p class="text-6 font-semibold text-bright text-right">
          Beavers s'engage auprès de Tree-Nation pour reverser 2% de son chiffre d'affaires à l'association.
        </p>
        <div class="flex flex-col items-center w-8 mt-[calc(100vh*0.08)] gap-2">
          <Mouse newClass="h-auto w-full" color="#FFF" />
          <ArrowBottom newClass="animate-bounce"  color="#FFF" />
        </div>
      </div>
      <div class="flex flex-col flex-1 {isOceanActive ? 'animate-fade' : 'opacity-0 invisible'}">
        <p class="text-6 font-semibold text-bright">
          Beavers s'engage auprès de The Ocean CleanUp pour reverser 2% de son chiffre d'affaires à l'association.
        </p>
        <div class="flex flex-col items-center w-8 mt-[calc(100vh*0.08)] gap-2">
          <Mouse newClass="h-auto w-full" color="#FFF" />
          <ArrowBottom newClass="animate-bounce"  color="#FFF" />
        </div>
      </div>
    </div>
  </div>
  <div class="w-full lg:w-1/2 max-lg:h-1/2 absolute h-full top-0 lg:inset-y-0 left-0 z-10 transition-opacity {isOceanActive ? 'opacity-100' : 'opacity-[0.15]'}">
    <img src="/img/soutiens/the-ocean-cleanup.jpg" alt="The Ocean Cleanup" class="w-full h-full object-cover">
  </div>
  <div class="w-full lg:w-1/2 max-lg:h-1/2 absolute h-full bottom-0 lg:inset-y-0 left-0 lg:left-auto lg:right-0 z-10 transition-opacity {isOceanActive ? 'opacity-[0.15]' : 'opacity-100'}">
    <img src="/img/soutiens/tree-nation.jpg" alt="Tree Nation" class="w-full h-full object-cover">
  </div>

  <div class="lg:hidden absolute top-0 inset-x-0 w-full z-20 h-1/2 transition-opacity flex flex-col justify-center gap-4 items-center px-4 {!isOceanActive ? 'opacity-100' : 'opacity-0'}">
    <h2 class="text-1-m text-center">
      Beavers x Tree-Nation
    </h2>
    <p class="text-6 font-semibold text-bright text-center">
      Beavers s'engage auprès de Tree-Nation pour reverser 2% de son chiffre d'affaires à l'association.
    </p>
  </div>

  <div class="lg:hidden absolute bottom-0 inset-x-0 w-full z-20 h-1/2 transition-opacity flex flex-col justify-center gap-4 items-center px-4 {isOceanActive ? 'opacity-100' : 'opacity-0'}">
    <h2 class="text-1-m text-center">
      Beavers x The Ocean Cleanup
    </h2>
    <p class="text-6 font-semibold text-bright text-center">
      Beavers s'engage auprès de The Ocean CleanUp pour reverser 2% de son chiffre d'affaires à l'association.
    </p>
  </div>
</div>