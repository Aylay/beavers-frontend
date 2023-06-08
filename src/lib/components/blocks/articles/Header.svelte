<script lang="ts">
	import ArrowBottom from "$lib/assets/svg/ArrowBottom.svelte";
	import Mouse from "$lib/assets/svg/Mouse.svelte";
	import Feather from '$lib/assets/svg/Feather.svelte';
	import Calendar from '$lib/assets/svg/Calendar.svelte';
	import Tag from '$lib/assets/svg/Tag.svelte';
	import Clock from '$lib/assets/svg/Clock.svelte';

  const words = [
    'CNIL', 'Google Analytics', 'RGDP', 'données personnelles'
  ]
</script>

<div class="lg:h-screen bg-rock relative overflow-hidden">
  <div class="lg:w-2/3 flex flex-col justify-end items-end h-full">
    <div class="max-w-[90rem] w-full flex flex-col items-end pr-40 mb-40">
      <ul class="flex justify-end mb-8 flex-wrap gap-y-4">
        <li class="pr-5 border-r-bright border-r-[2px]">
          <a href="/la-pause-café" title="La pause café Beavers" class="text-7 text-seance transition-colors font-semibold hover:text-bright">
            La pause café
          </a>
        </li>
        <li class="px-5 border-r-bright border-r-[2px]">
          <a href="/la-pause-café/developpement-web" title="Développement web" class="text-7 text-seance transition-colors hover:text-bright font-semibold">
            Développement web
          </a>
        </li>
        <li class="text-7 text-white font-semibold">
          Quelles sont les mesures d’utilisation de Google Analytics suite à la décision de la CNIL ?
        </li>
      </ul>
      <h1 class="text-3 text-right mb-20">
        Quelles sont les mesures d’utilisation de Google Analytics suite à la décision de la CNIL ?
      </h1>
      <p class="mb-12 text-6 text-right">
        Article mis à jour le 24 mars 2023.
      </p>
      <div class="flex flex-col items-center w-8 gap-2">
        <Mouse newClass="h-auto w-full" color="#FFF" />
        <ArrowBottom newClass="animate-bounce"  color="#FFF" />
      </div>
    </div>
    <div class="max-w-[90rem] w-full relative py-[calc(100vh*0.06)] bg-seance pr-40 flex justify-between gap-7 before:absolute before:right-0 before:h-full before:inset-y-0 before:w-[calc(100vw*2/3)] before:bg-seance before:z-0">
      <div class="relative z-10 flex-1 flex flex-col items-center">
        <div>
          <Feather newClass="w-auto h-12 fill-bright" />
        </div>
        <p class="text-6 mt-4">
          Ecrit par
        </p>
        <p class="text-6 font-bold">
          Lou Rédac
        </p>
      </div>
      <div class="relative z-10 flex-1 flex flex-col items-center">
        <div>
          <Calendar newClass="w-auto h-12 fill-bright" />
        </div>
        <p class="text-6 mt-4">
          Publié le
        </p>
        <p class="text-6 font-bold">
          17 fév 2023
        </p>
      </div>
      <div class="relative z-10 flex-1 flex flex-col items-center">
        <div>
          <Tag newClass="w-auto h-12 fill-bright" />
        </div>
        <p class="text-6 mt-4">
          Catégorie
        </p>
        <p class="text-6 font-bold">
          Média
        </p>
      </div>
      <div class="relative z-10 flex-1 flex flex-col items-center">
        <div>
          <Clock newClass="w-auto h-12 fill-bright" />
        </div>
        <p class="text-6 mt-4">
          Lecture
        </p>
        <p class="text-6 font-bold">
          2 minutes
        </p>
      </div>
    </div>
  </div>

  <div class="w-1/3 bg-bright max-h-full overflow-hidden absolute z-10 inset-y-0 right-0 flex items-center p-8">
    <div class="w-full">
      {#each words as word}
      <span class="text-1 text-opacity-50 text-white leading-none mr-4">
        {word}
      </span>
      {/each}
      {#each words as word}
      <span class="text-1 text-opacity-50 text-white leading-none mr-4">
        {word}
      </span>
      {/each}
      {#each words as word}
      <span class="text-1 text-opacity-50 text-white leading-none mr-4">
        {word}
      </span>
      {/each}
      {#each words as word}
      <span class="text-1 text-opacity-50 text-white leading-none mr-4">
        {word}
      </span>
      {/each}
    </div>
  </div>
</div>