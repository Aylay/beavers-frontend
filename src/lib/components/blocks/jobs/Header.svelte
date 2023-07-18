<script lang="ts">
  import { page } from '$app/stores';
	import ArrowBottom from "$lib/assets/svg/ArrowBottom.svelte";
	import Mouse from "$lib/assets/svg/Mouse.svelte";
	import Clock from '$lib/assets/svg/Clock.svelte';
	import Contract from '$lib/assets/svg/Contract.svelte';
	import Pin from '$lib/assets/svg/Pin.svelte';
	import LDTag from '$lib/components/utilities/LDTag.svelte'

  export let title: string;
  export let contract: string;
  export let localisation: string;
  export let when: string;
  export let words: Array<string>;

  let allWords: Array<string> = []
  for (const word of words) {
    const newWords = word.split(' ');
    allWords = allWords.concat(newWords)
  }
  allWords = allWords.concat(allWords)
  allWords = allWords.concat(allWords)
  
  const siteURL = import.meta.env.VITE_SITE_URL

  let schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type":"ListItem",
        "position": 1,
        "name": "Beavers",
        "item": siteURL
      },
      {
        "@type":"ListItem",
        "position": 1,
        "name": "Jobs",
        "item": siteURL + '/jobs'
      },
      {
        "@type":"ListItem",
        "position": 2,
        "name": title,
        "item": siteURL + '/jobs/' + $page.params.slug 
      },
    ]
  }
</script>

<LDTag {schema} />

<div>
  <div class="lg:h-screen bg-rock relative overflow-hidden max-lg:pt-60">
    <div class="lg:w-2/3 flex flex-col justify-end items-end h-full">
      <div class="max-w-[90rem] w-full flex flex-col lg:items-end lg:pr-40 mb-16 lg:mb-[calc(100vh*0.1)] max-lg:px-[5%]">
        <ul class="max-lg:hidden flex justify-end mb-20 flex-wrap gap-5">
          <li>
            <a href="/" title="Beavers, l'agence média des castors" class="text-7 text-seance transition-colors font-semibold hover:text-bright">
              Accueil
            </a>
          </li>
          <li class="text-7 text-bright font-bold">
            |
          </li>
          <li>
            <a href="/jobs" title="Les jobs chez Beavers" class="text-7 text-seance transition-colors font-semibold hover:text-bright">
              Jobs
            </a>
          </li>
          <li class="text-7 text-bright font-bold">
            |
          </li>
          <li class="text-7 text-white font-semibold">
            {title}
          </li>
        </ul>
        <h1 class="text-3 lg:text-right mb-20">
          {title}
        </h1>
        <div class="flex flex-col items-center w-8 gap-2">
          <Mouse newClass="h-auto w-full" color="#FFF" />
          <ArrowBottom newClass="animate-bounce"  color="#FFF" />
        </div>
      </div>
      <div class="max-w-[90rem] w-full lg:relative max-lg:py-10 max-lg:px-[5%] lg:py-[calc(100vh*0.06)] bg-seance lg:pr-40 max-lg:grid max-lg:grid-cols-2 flex max-lg:justify-center justify-between gap-7 lg:before:absolute lg:before:right-0 lg:before:h-full lg:before:inset-y-0 lg:before:w-[calc(100vw*2/3)] lg:before:bg-seance lg:before:z-0">
        <div class="relative z-10 flex-1 flex flex-col items-center animate-fade animate-delay-[250ms]">
          <div>
            <Contract newClass="w-auto h-12 fill-bright" />
          </div>
          <p class="text-6 mt-4">
            Contrat
          </p>
          <p class="text-6 font-bold">
            {contract}
          </p>
        </div>
        <div class="relative z-10 flex-1 flex flex-col items-center animate-fade animate-delay-500">
          <div>
            <Pin newClass="w-auto h-12 fill-bright" />
          </div>
          <p class="text-6 mt-4">
            Mission
          </p>
          <p class="text-6 font-bold">
            {localisation}
          </p>
        </div>
        <div class="relative z-10 flex-1 flex flex-col items-center animate-fade animate-delay-[750ms]">
          <div>
            <Clock newClass="w-auto h-12 fill-bright" />
          </div>
          <p class="text-6 mt-4">
            A pourvoir
          </p>
          <p class="text-6 font-bold">
            {when}
          </p>
        </div>
      </div>
    </div>
  
    <div class="max-lg:hidden w-1/3 bg-bright max-h-full overflow-hidden absolute z-10 inset-y-0 right-0 flex items-center ">
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
</div>