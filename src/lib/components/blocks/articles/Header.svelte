<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
  
	import ArrowBottom from "$lib/assets/svg/ArrowBottom.svelte";
	import Mouse from "$lib/assets/svg/Mouse.svelte";
	import Feather from '$lib/assets/svg/Feather.svelte';
	import Calendar from '$lib/assets/svg/Calendar.svelte';
	import Tag from '$lib/assets/svg/Tag.svelte';
	import Clock from '$lib/assets/svg/Clock.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

  let words: Array<string> = [
    'CNIL', 'Google Analytics', 'RGDP', 'données personnelles'
  ]

  let allWords: Array<string> = []
  for (const word of words) {
    const newWords = word.split(' ');
    allWords = allWords.concat(newWords)
  }
  allWords = allWords.concat(allWords)
  allWords = allWords.concat(allWords)
  </script>

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
            <a href="/la-pause-café" title="La pause café Beavers" class="text-7 text-seance transition-colors font-semibold hover:text-bright">
              La pause café
            </a>
          </li>
          <li class="text-7 text-bright font-bold">
            |
          </li>
          <li>
            <a href="/la-pause-café/site-internet" title="Site internet" class="text-7 text-seance transition-colors hover:text-bright font-semibold">
              Site internet
            </a>
          </li>
          <li class="text-7 text-bright font-bold">
            |
          </li>
          <li class="text-7 text-white font-semibold">
            Quelles sont les mesures d’utilisation de Google Analytics suite à la décision de la CNIL ?
          </li>
        </ul>
        <h1 class="text-3 lg:text-right mb-20">
          Quelles sont les mesures d’utilisation de Google Analytics suite à la décision de la CNIL ?
        </h1>
        <p class="mb-12 text-6 lg:text-right font-bold text-bright">
          Article mis à jour le 24 mars 2023.
        </p>
        <div class="flex flex-col items-center w-8 gap-2">
          <Mouse newClass="h-auto w-full" color="#FFF" />
          <ArrowBottom newClass="animate-bounce"  color="#FFF" />
        </div>
      </div>
      <div class="max-w-[90rem] w-full lg:relative max-lg:py-10 max-lg:px-[5%] lg:py-[calc(100vh*0.06)] bg-seance lg:pr-40 max-lg:grid max-lg:grid-cols-2 flex max-lg:justify-center justify-between gap-7 lg:before:absolute lg:before:right-0 lg:before:h-full lg:before:inset-y-0 lg:before:w-[calc(100vw*2/3)] lg:before:bg-seance lg:before:z-0">
        <div class="relative z-10 flex-1 flex flex-col items-center animate-fade animate-delay-[250ms]">
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
        <div class="relative z-10 flex-1 flex flex-col items-center animate-fade animate-delay-500">
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
        <div class="relative z-10 flex-1 flex flex-col items-center animate-fade animate-delay-[750ms]">
          <div>
            <Tag newClass="w-auto h-12 fill-bright" />
          </div>
          <p class="text-6 mt-4">
            Catégorie
          </p>
          <p class="text-6 font-bold">
            Site internet
          </p>
        </div>
        <div class="relative z-10 flex-1 flex flex-col items-center animate-fade animate-delay-1000">
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
  
  <div class="max-lg:mt-20 mt-40 flex big-container max-lg:gap-20 gap-40 max-lg:flex-col"
    use:inview={options}
    on:inview_change={handleChange}
  >
    <div class="lg:flex-1 h-[36rem] w-full lg:order-2 rounded-lg overflow-hidden">
      {#if isInView}
      <img src="/img/lise.jpg" alt="couco" class="w-full h-full object-cover {isInView ? 'animate-fade' : 'opacity-0'}" />
      {/if}
    </div>
    <div class="flex-1 lg:order-1">
      <h2 class="text-white text-6 font-semibold">
        La Commission nationale de l’informatique et des libertés (CNIL) attaque Google pour non-respect du RGPD, soit la protection des données personnelles. Google Analytics est dans le viseur, la Commission estime que le transfert des données privées des Européens vers les USA n’est pas suffisamment encadré. L’outil d’analyse d’audience proposé par Google doit être utilisé de manière à ne pas divulguer des données sensibles aux Américains sous peine de sanction. Plus de 6 entreprises françaises doivent se mettre en conformité avec la loi informatique et liberté dans un délai d’un mois.<br /><br />Dans quelles mesures peut-on encore utiliser Google Analytics suite aux exigences de la CNIL ?
      </h2>
    </div>
  
  </div>
</div>