<script lang="ts">
  import { page } from '$app/stores';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
  import { DateTime } from "luxon";
	import SvelteMarkdown from 'svelte-markdown';
  
	import ArrowBottom from "$lib/assets/svg/ArrowBottom.svelte";
	import Mouse from "$lib/assets/svg/Mouse.svelte";
	import Feather from '$lib/assets/svg/Feather.svelte';
	import Calendar from '$lib/assets/svg/Calendar.svelte';
	import Tag from '$lib/assets/svg/Tag.svelte';
	import Clock from '$lib/assets/svg/Clock.svelte';
	import LDTag from '$lib/components/utilities/LDTag.svelte'

  const mdOptions = {
    breaks: true,
    gfm: true,
    headerIds: false
  };

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

  const strapiURL = import.meta.env.VITE_STRAPI_URL;

  export let words: Array<string>;
  export let category: any;
  export let img: any;
  export let title: string;
  export let intro: string;
  export let publishedDate: string;
  export let updatedDate: string;
  export let author: string;
  export let readingTime: number;
  export let IA: boolean = false;
  let allWords: Array<string> = []

  $: {
    allWords = []
    for (const word of words) {
      const newWords = word.split(' ');
      allWords = allWords.concat(newWords)
    }
    allWords = allWords.concat(allWords)
    allWords = allWords.concat(allWords)
  }

  
  const siteURL = import.meta.env.VITE_SITE_URL

  let schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": siteURL + $page.url.pathname + '#breadcrumb',
    "itemListElement": [
      {
        "@type":"ListItem",
        "position": 1,
        "name": "Beavers",
        "item": siteURL
      },
      {
        "@type":"ListItem",
        "position": 2,
        "name": "La pause cafe",
        "item": siteURL + '/la-pause-cafe'
      },
      {
        "@type":"ListItem",
        "position": 3,
        "name": category.title,
        "item": siteURL + '/la-pause-cafe/' + category.slug
      },
      {
        "@type":"ListItem",
        "position": 4,
        "name": title.replace(/&nbsp;/g, ' '),
        "item": siteURL + '/la-pause-cafe/' + category.slug + '/' + $page.params.slug
      },
    ]
  }

</script>

<LDTag {schema} />

<div>
  <div class="lg:h-screen bg-rock relative overflow-hidden max-lg:pt-60">
    <div class="lg:w-2/3 flex flex-col justify-end items-end h-full">
      <div class="max-w-[90rem] w-full flex flex-col lg:items-end lg:pr-40 mb-16 lg:mb-[calc(100vh*0.1)] max-lg:px-[5%]">
        <nav aria-label="Breadcrumb" class="max-lg:hidden">
          <ol class="max-lg:hidden flex justify-end mb-20 flex-wrap gap-5">
            <li>
              <a href="/" title="Beavers, l'agence média des castors" class="text-7 text-electric transition-colors font-semibold hover:text-bright">
                Accueil
              </a>
            </li>
            <li class="text-7 text-bright font-bold">
              |
            </li>
            <li>
              <a href="/la-pause-cafe" title="La pause café Beavers" class="text-7 text-electric transition-colors font-semibold hover:text-bright">
                La pause café
              </a>
            </li>
            <li class="text-7 text-bright font-bold">
              |
            </li>
            <li>
              <a href="/la-pause-cafe/{category.slug}" title={category.title} class="text-7 text-electric transition-colors hover:text-bright font-semibold">
                {category.title}
              </a>
            </li>
            <li class="text-7 text-bright font-bold">
              |
            </li>
            <li>
              <a href="/la-pause-cafe/{category.slug}/{$page.params.slug}" aria-current="page" class="text-7 text-white font-semibold pointer-events-none" title={title.replace(/&nbsp;/g, ' ')}>
                {@html title.replace(' ?', '&nbsp;?')}
              </a>
            </li>
          </ol>
        </nav>
        <h1 class="text-3 lg:text-right mb-20">
          {@html title.replace(' ?', '&nbsp;?')}
        </h1>
        {#if updatedDate !== ''}
        <p class="mb-12 text-6 lg:text-right font-bold text-bright">
          Article mis à jour le {updatedDate}.
        </p>
        {/if}
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
            {author}
          </p>
        </div>
        <div class="relative z-10 flex-1 flex flex-col items-center animate-fade animate-delay-500">
          <div>
            <Calendar newClass="w-auto h-12 fill-bright" />
          </div>
          <p class="text-6 mt-4">
            Publié le
          </p>
          <time datetime={DateTime.fromFormat(publishedDate, 'dd LLL yyyy', { locale: "fr" }).toFormat('yyyy-LL-dd', { locale: "fr" })} class="text-6 font-bold">
            {publishedDate}
          </time>
        </div>
        <div class="relative z-10 flex-1 flex flex-col items-center animate-fade animate-delay-[750ms]">
          <div>
            <Tag newClass="w-auto h-12 fill-bright" />
          </div>
          <p class="text-6 mt-4">
            Catégorie
          </p>
          <p class="text-6 font-bold">
            {category.title}
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
            {readingTime} minute{readingTime > 1 ? 's' : ''}
          </p>
        </div>
      </div>
    </div>
  
    <div class="max-lg:hidden w-1/3 bg-bright max-h-full overflow-hidden absolute z-0 inset-y-0 right-0 flex items-center ">
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
  
  <div class="max-lg:mt-20 mt-40 flex big-container items-center max-lg:gap-20 gap-40 max-lg:flex-col"
    use:inview={options}
    on:inview_change={handleChange}
  >
    <div class="lg:flex-1 h-[36rem] w-full lg:order-2 relative">
      {#if isInView}
        <img
          src={img.formats && img.formats.medium ? strapiURL + img.formats.medium.url : strapiURL + img.url}
          alt={img.alternativeText ? img.alternativeText : title.replace(/&nbsp;/g, ' ')} class="w-full h-full object-cover rounded-lg overflow-hidden {isInView ? 'animate-fade' : 'opacity-0'}"
        />
      {/if}
      {#if IA}
      <p class="absolute bottom-4 right-4 rounded-3xl bg-seance px-6 py-2 text-7">Image générée par une IA</p>
      {/if}
    </div>
    <div class="flex-1 lg:order-1">
      <h2 class="content-style">
        <SvelteMarkdown source={intro} options={mdOptions} />
      </h2>
    </div>
  </div>
</div>