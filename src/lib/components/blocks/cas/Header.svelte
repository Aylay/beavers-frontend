<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

  import { page } from '$app/stores';
	import Mouse from "$lib/assets/svg/Mouse.svelte";
	import ArrowBottom from "$lib/assets/svg/ArrowBottom.svelte";
	import HeaderWave from "$lib/assets/svg/HeaderWave.svelte";
	import LDTag from '$lib/components/utilities/LDTag.svelte'
	import Sun from '$lib/assets/svg/Sun.svelte';
	import Wave2 from '$lib/assets/svg/Wave2.svelte';
	import MultipleArrows from '$lib/assets/svg/MultipleArrows.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

  export let client: any;
  export let title: string;
  export let imgSite: any;
  
  const siteURL = import.meta.env.VITE_SITE_URL
  const strapiURL = import.meta.env.VITE_STRAPI_URL;

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
        "name": "Les études de cas de Beavers",
        "item": siteURL + '/cas-agence'
      },
      {
        "@type":"ListItem",
        "position": 3,
        "name": title.replace(/&nbsp;/g, ' '),
        "item": siteURL + '/cas/' + $page.params.slug
      },
    ]
  }
</script>

<LDTag {schema} />

<div class="h-screen relative flex justify-center items-center bg-rock"
  use:inview={options}
  on:inview_change={handleChange}
>
  <div class="big-container">
    <div class="lg:w-2/3 relative z-30">
      <nav aria-label="Breadcrumb" class="max-lg:hidden">
        <ol class="flex mb-20 flex-wrap gap-5">
          <li>
            <a href="/" title="Beavers, l'agence média des castors" class="text-7 text-electric transition-colors font-semibold hover:text-bright">
              Accueil
            </a>
          </li>
          <li class="text-7 text-bright font-bold">
            |
          </li>
          <li>
            <a href="/cas-agence" title="Les études de cas de Beavers" class="text-7 text-electric transition-colors font-semibold hover:text-bright">
              Cas agence
            </a>
          </li>
          <li class="text-7 text-bright font-bold">
            |
          </li>
          <li>
            <a href="/cas/{$page.params.slug}" aria-current="page" class="text-7 text-white font-semibold pointer-events-none" {title}>
              {title}
            </a>
          </li>
        </ol>
      </nav>
      <h1 class="text-3 mb-20 text-bright font-semibold">
        {title}
      </h1>
      <div class="flex flex-col items-center w-8 gap-2">
        <Mouse newClass="h-auto w-full" color="#FFF" />
        <ArrowBottom newClass="animate-bounce"  color="#FFF" />
      </div>
      <div class="max-lg:hidden">
        <Sun newClass="animate-once w-24 h-auto absolute left-1/2 top-full animate-ping {isInView ? 'animate-ping animate-delay-1000' : 'opacity-0'}" color="#00FFDA" />
        <Wave2 newClass="absolute -top-1/4 left-2/3 fill-seance animate-shake animate-delay-500" />
        <MultipleArrows newClass="absolute -bottom-1/2 left-1/4 fill-bright animate-fade animate-delay-700" />
        <div class="absolute -left-32 -top-32 h-[2px] w-20 -rotate-45 transform bg-bright animate-delay-[1500ms] animate-fade" />
        <div class="absolute -left-32 -top-40 h-[2px] w-20 -rotate-45 transform bg-bright animate-delay-[1800ms] animate-fade" />
      </div>
    </div>
  </div>
  {#if imgSite}
  <div class="absolute top-[10%] h-[calc(100vh*0.8)] right-1/3 z-20 transform translate-x-1/2 flex items-center justify-center animate-fade animate-delay-[1500ms] max-lg:hidden">
    <img
      src={strapiURL + imgSite.attributes.url}
      alt={imgSite.attributes.alternativeText ? imgSite.attributes.alternativeText : title}
      class="w-full h-full object-cover"
    />
  </div>
  {/if}
  <div class="w-full lg:w-1/3 max-lg:h-1/2 absolute h-full top-0 lg:inset-y-0 right-0 z-10 transition-opacity max-lg:hidden">
    {#if client.imgBg && client.imgBg.data}
    <img
      src={strapiURL + client.imgBg.data.attributes.url}
      alt={client.imgBg.data.attributes.alternativeText ? client.imgBg.data.attributes.alternativeText : client.name}
      class="w-full h-full object-cover animate-fade animate-delay-[1250ms]"
    />
    {/if}
  </div>
  <HeaderWave />
  <div class="absolute bottom-0 h-20 w-full bg-seance inset-x-0 z-0 max-lg:hidden" />
</div>