<script lang="ts">
	import Switch from "$lib/assets/svg/Switch.svelte";
	import Mouse from "$lib/assets/svg/Mouse.svelte";
	import ArrowBottom from "$lib/assets/svg/ArrowBottom.svelte";
	import Hoverable from '$lib/components/utilities/Hoverable.svelte';

  export let isOceanActive : boolean = true;
</script>

<div class="h-screen relative flex justify-center items-center bg-rock">
  <div class="big-container flex flex-col items-center relative z-20">
    <Hoverable newClass="rounded-full" let:hovering={active}>
      <div
        class="w-24 h-24 rounded-full flex justify-center items-center cursor-pointer transition-colors {active ? 'bg-bright' : 'bg-seance'}"
        on:click={() => isOceanActive = !isOceanActive}
      >
      
        <Switch newClass=" w-14 h-auto animate-jump {active ? 'fill-seance animate-infinite' : 'fill-white'}" />
      </div>
    </Hoverable>
    <h1 class="text-center text-2 mt-10">
      <span class="block {!isOceanActive ? 'text-outline' : ''}">
        Beavers x The Ocean Cleanup
      </span>
      <span class="block {isOceanActive ? 'text-outline' : ''}">
        Beavers x Tree-Nation
      </span>
    </h1>
    <div class="w-full flex gap-40 mt-20">
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
  <div class="w-1/2 absolute h-full inset-y-0 left-0 z-10 transition-opacity  {isOceanActive ? 'opacity-100' : 'opacity-[0.15]'}">
    <img src="/img/soutiens/the-ocean-cleanup.jpg" alt="The Ocean Cleanup" class="w-full h-full object-cover">
  </div>
  <div class="w-1/2 absolute h-full inset-y-0 right-0 z-10 transition-opacity  {isOceanActive ? 'opacity-[0.15]' : 'opacity-100'}">
    <img src="/img/soutiens/tree-nation.jpg" alt="Tree Nation" class="w-full h-full object-cover">
  </div>
</div>