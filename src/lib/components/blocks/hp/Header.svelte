<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import ArrowBottom from "$lib/assets/svg/ArrowBottom.svelte";
  import HeaderWave from "$lib/assets/svg/HeaderWave.svelte";
	import Mouse from "$lib/assets/svg/Mouse.svelte";
	import ProductionDigitale from "$lib/assets/svg/ProductionDigitale.svelte";
	import MarketingDigital from "$lib/assets/svg/MarketingDigital.svelte";
	import Hoverable from "$lib/components/utilities/Hoverable.svelte";
	import Wave from '$lib/assets/svg/Wave2.svelte';
	import Sun from '$lib/assets/svg/Sun.svelte';
	import MultipleArrows from '$lib/assets/svg/MultipleArrows.svelte';
	import Search from '$lib/assets/svg/Search.svelte';
	import Plane from '$lib/assets/svg/Plane.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

  const infos = [
    {
      number: '68',
      text: 'Commandes',
      percent: '25%'
    },
    {
      number: '4,5%',
      text: 'Taux de conversion',
      percent: '10%'
    },
    {
      number: '51 000€',
      text: 'Revenus',
      percent: '37%'
    }
  ]
</script>

<div class="lg:h-screen bg-rock relative">
  <div class="big-container">
    <div class="lg:w-1/2 pt-[calc(100vh*0.22)] pr-8 relative z-10">
      <h1 class="text-2">
        Le digital à pleines dents !
      </h1>
      <h2 class="text-6 font-bold text-bright mt-6 pr-12">
        L'agence Beavers, spécialisée en création de sites internet, SEO et média en ligne, mobilise les compétences dont vous avez besoin dans le développement de votre écosystème digital.
      </h2>
      <div class="flex flex-col items-center w-8 mt-[calc(100vh*0.08)] gap-2">
        <Mouse newClass="h-auto w-full" color="#FFF" />
        <ArrowBottom newClass="animate-bounce"  color="#FFF" />
      </div>
      <div class="absolute -bottom-10 right-1/4 h-auto w-[6.2rem] animate-delay-[1500ms] animate-shake animate-twice">
        <Wave />
      </div>
      <div class="absolute -right-10 bottom-1/4 h-[2px] w-20 -rotate-45 transform bg-bright animate-delay-[1500ms] animate-fade" />
      <div class="absolute -right-10 bottom-[calc(25%-2rem)] h-[2px] w-20 -rotate-45 transform bg-bright animate-delay-[1800ms] animate-fade" />
    </div>
  </div>
  <div class="absolute bottom-12 w-full z-20">
    <div class="big-container flex gap-16">
      <Hoverable let:hovering={active}>
        <a
          href="/production-digitale"
          title="Production digitale"
          class="flex gap-5 p-10 border-[2px] transition-colors rounded-sm items-center animate-fade animate-delay-300 {active ? 'bg-white border-white' : 'bg-transparent border-bright'}"
        >
          <ProductionDigitale newClass="transition-colors {active ? 'fill-seance' : 'fill-bright'}" />
          <span class="text-5 transition-colors {active ? 'text-black' : 'text-white'}">
            Production<br />digitale
          </span>
        </a>
      </Hoverable>
      <Hoverable let:hovering={active}>
        <a
          href="/marketing-digital"
          title="Marketing digital"
          class="flex gap-5 p-10 border-[2px] transition-colors rounded-sm items-center animate-fade animate-delay-700 {active ? 'bg-white border-white' : 'bg-transparent border-bright'}"
        >
          <MarketingDigital newClass="transition-colors {active ? 'fill-seance' : 'fill-bright'}" />
          <span class="text-5 transition-colors {active ? 'text-black' : 'text-white'}">
            Marketing<br />digital
          </span>
        </a>
      </Hoverable>
    </div>
  </div>
  <div class="lg:w-1/2 absolute right-0 inset-y-0 lg:h-screen flex items-center z-20"
	use:inview={options}
	on:inview_change={handleChange}>
    <div class="relative">
      <img src="/img/hp/mockup.png" alt="Mockup page d'accueil" class="max-w-[80%] w-full h-auto {isInView ? 'animate-fade' : 'opacity-0'}">
      <div class="absolute left-1/4 -top-32">
        <Sun newClass="animate-once w-20 h-auto {isInView ? 'animate-ping' : 'opacity-0'}" color="#00FFDA" />
      </div>
      <div class="absolute -top-36 left-3/4">
        <MultipleArrows newClass="fill-bright animate-fade animate-delay-700" />
      </div>
      <div class="absolute p-4 bg-white rounded-2xl -top-44 left-[40%] animate-fade animate-delay-1000">
        <p class="font-bold text-6 text-black mb-2">Newsletter</p>
        <div class="flex justify-between rounded-xl border-opacity-20 border-[2px] border-jaguar items-center w-96 px-4">
          <p class="text-rock text-7 font-semibold text-opacity-50">Votre email</p>
          <div class="py-4 border-l border-jaguar border-opacity-20 pl-2">
            <Plane />
          </div>
        </div>
      </div>
      <div class="absolute flex w-96 rounded-3xl bg-white justify-between items-center py-4 px-6 left-8 top-1/4 animate-fade animate-delay-1000">
        <p class="text-jaguar text-7">
          Rechercher
        </p>
        <Search />
      </div>
      <div class="absolute bottom-32 right-16 flex rounded-2xl bg-white py-6 animate-fade animate-delay-1000">
        {#each infos as info}
        <div class="flex-col gap-1 flex items-center px-10 first:border-0 border-l border-jaguar border-opacity-20">
          <p class="text-seance text-5 leading-none font-bold">
            {info.number}
          </p>
          <p class="font-bold text-black leading-none text-7">
            {info.text}
          </p>
          <div class="w-8 h-[1px] bg-jaguar my-2" />
          <div class="flex gap-2 justify-center">
            <p class="text-bright text-7 font-bold">
              {info.percent}
            </p>
          </div>
        </div>
        {/each}
      </div>
    </div>
  </div>
  <HeaderWave />
  <div class="absolute bottom-0 h-16 w-full bg-seance inset-x-0 z-0" />
</div>