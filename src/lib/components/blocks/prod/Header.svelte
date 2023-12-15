<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import ArrowBottom from "$lib/assets/svg/ArrowBottom.svelte";
	import Mouse from "$lib/assets/svg/Mouse.svelte";
	import HeaderWave from '$lib/assets/svg/HeaderWave.svelte';
	import Sun from '$lib/assets/svg/Sun.svelte';
	import Wave2 from '$lib/assets/svg/Wave2.svelte';
	import Evo from '$lib/assets/svg/Evo.svelte';
	import Cookie from '$lib/assets/svg/Cookie.svelte';

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
      number: '2 480',
      text: 'Visites',
      percent: '40%'
    },
    {
      number: '120',
      text: "Mots clés",
      percent: '80%'
    }
  ]
  
    const line11: string = '<script lang="'
    const line12: string = '">'
    const line21: string = '.log("'
    const line22: string = '");'
    const line31 = '<';
    const line32 = 'script>';
</script>

<div class="h-screen bg-rock"
  use:inview={options}
  on:inview_change={handleChange}
>
  <div class="big-container flex h-full items-center justify-center relative z-10">
    <div class="lg:w-1/2">
      <h1 class="text-1-m lg:text-2 max-lg:text-bright">
        Production<br />digitale
      </h1>
      <h2 class="text-3 lg:hidden mt-16">Site internet. SEO. Newsletters.</h2>
      <div class="flex flex-col items-center w-8 mt-[calc(100vh*0.1)] gap-2">
        <Mouse newClass="h-auto w-full" color="#FFF" />
        <ArrowBottom newClass="animate-bounce"  color="#FFF" />
      </div>
    </div>
    <div class="lg:w-1/2 flex justify-center max-lg:hidden">
      <div class="w-[60rem] h-[60rem] relative">
        <Sun newClass="animate-once w-20 h-auto absolute left-1/3 top-[15%] animate-ping {isInView ? 'animate-ping animate-delay-500' : 'opacity-0'}" color="#8013BD" />
        <Sun newClass="animate-once w-24 h-auto absolute right-0 bottom-16 animate-ping {isInView ? 'animate-ping animate-delay-1000' : 'opacity-0'}" color="#00FFDA" />
        <div class="absolute left-0 bottom-[calc(50%-4rem)] h-[2px] w-20 -rotate-45 transform bg-bright animate-delay-[1500ms] animate-fade" />
        <div class="absolute left-0 bottom-[calc(50%-6rem)] h-[2px] w-20 -rotate-45 transform bg-bright animate-delay-[1800ms] animate-fade" />
        <div class="absolute right-[20%] top-0 h-[2px] w-20 -rotate-45 transform bg-seance animate-delay-[2100ms] animate-fade" />
        <div class="absolute right-[20%] top-8 h-[2px] w-20 -rotate-45 transform bg-seance animate-delay-[2400ms] animate-fade" />
        <Wave2 newClass="absolute top-1/4 left-1/2 fill-bright animate-shake animate-delay-1000 transform -translate-x-1/2" />
        <Wave2 newClass="absolute top-1/2 left-2/3 fill-seance animate-shake animate-delay-500" />

        <p class="absolute max-w-[36rem] w-full bg-jaguar top-1/3 left-0 p-6 text-7 animate-fade animate-delay-[1500ms] font-medium">
          {line11}<span class="text-bright">ts</span>{line12}<br />
          <span class="block pl-10"><span class="text-electric">console</span>{line21}<span class="text-bright">Bienvenue</span> chez les <span class="text-electric">castors</span>{line22}</span>
          {line31}<span class="text-bright">/</span>{line32}
        </p>

        <div class="absolute w-full max-w-[42rem] top-2/3 transform -translate-y-1/2 -translate-x-1/2 left-1/2 flex rounded-2xl bg-white py-6 animate-fade animate-delay-1000">
          {#each infos as info}
          <div class="flex-col flex-1 gap-2 flex items-center px-10 first:border-0 border-l border-jaguar border-opacity-20">
            <p class="text-seance text-5 leading-none font-bold">
              {info.number}
            </p>
            <p class="font-bold text-black leading-none text-7 text-center">
              {info.text}
            </p>
            <div class="w-8 h-[1px] bg-jaguar my-2" />
            <div class="flex gap-2 justify-center items-center">
              <Evo />
              <p class="text-caribbean text-7 font-bold">
                {info.percent}
              </p>
            </div>
          </div>
          {/each}
        </div>

        <div class="absolute top-[8%] left-0 w-28 h-28 flex justify-center items-center bg-white rounded-3xl">
          <Cookie newClass="h-12 w-auto animate-fade animate-infinite animate-duration-[4000ms] animate-ease-in-out animate-delay-[250ms]" />
        </div>
        <p class="absolute top-[20%] right-0 w-28 h-28 flex justify-center items-center bg-white rounded-3xl">
          <span class="text-6 text-seance font-semibold animate-fade animate-infinite animate-duration-[4000ms] animate-ease-in-out animate-delay-[750ms]">
            .fr
          </span>
        </p>
      </div>
    </div>
  </div>
  <div class="absolute bottom-24 w-full z-20 max-lg:hidden">
    <div class="big-container">
      <h2 class="text-3">Site internet. SEO. Newsletters.</h2>
    </div>
  </div>
  <HeaderWave />
  <div class="absolute bottom-0 h-20 w-full bg-seance inset-x-0 z-0 max-lg:hidden" />
</div>