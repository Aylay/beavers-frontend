<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import ArrowBottom from "$lib/assets/svg/ArrowBottom.svelte";
	import Mouse from "$lib/assets/svg/Mouse.svelte";
	import HeaderWave from '$lib/assets/svg/HeaderWave.svelte';
	import Bing from '$lib/assets/svg/social/Bing.svelte';
	import GAds from '$lib/assets/svg/social/GAds.svelte';
	import LinkedIn from '$lib/assets/svg/social/LinkedIn.svelte';
	import Meta from '$lib/assets/svg/social/Meta.svelte';
	import Tiktok from '$lib/assets/svg/social/Tiktok.svelte';
	import YouTube from '$lib/assets/svg/social/YouTube.svelte';
	import Pinterest from '$lib/assets/svg/social/Pinterest.svelte';
	import Sun from '$lib/assets/svg/Sun.svelte';
	import MultipleArrows from '$lib/assets/svg/MultipleArrows.svelte';
	import Wave2 from '$lib/assets/svg/Wave2.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div class="h-screen bg-rock"
  use:inview={options}
  on:inview_change={handleChange}
>
  <div class="big-container flex h-full items-center justify-center relative z-10">
    <div class="lg:w-1/2">
      <h1 class="text-1-m lg:text-2 max-lg:text-bright">
        Marketing<br />digital
      </h1>
      <h2 class="text-3 lg:hidden mt-16">Acquisition. Notoriété.</h2>
      <div class="flex flex-col items-center w-8 mt-[calc(100vh*0.1)] gap-2">
        <Mouse newClass="h-auto w-full" color="#FFF" />
        <ArrowBottom newClass="animate-bounce"  color="#FFF" />
      </div>
    </div>
    <div class="lg:w-1/2 flex justify-center max-lg:hidden">
      <div class="w-[47rem] h-[41rem] relative">
        <Sun newClass="animate-once w-20 h-auto absolute right-full top-0 animate-ping {isInView ? 'animate-ping animate-delay-500' : 'opacity-0'}" color="#8013BD" />
        <Sun newClass="animate-once w-24 h-auto absolute right-0 top-full animate-ping {isInView ? 'animate-ping animate-delay-1000' : 'opacity-0'}" color="#00FFDA" />
        <MultipleArrows newClass="absolute -bottom-20 left-1/4 fill-bright animate-fade animate-delay-700" />
        <div class="absolute -left-40 bottom-1/4 h-[2px] w-20 -rotate-45 transform bg-bright animate-delay-[1500ms] animate-fade" />
        <div class="absolute -left-40 bottom-[calc(25%-2rem)] h-[2px] w-20 -rotate-45 transform bg-bright animate-delay-[1800ms] animate-fade" />
        <div class="absolute right-1/4 -top-16 h-[2px] w-20 -rotate-45 transform bg-seance animate-delay-[2100ms] animate-fade" />
        <div class="absolute right-1/4 top-[-6rem] h-[2px] w-20 -rotate-45 transform bg-seance animate-delay-[2400ms] animate-fade" />
        <Wave2 newClass="absolute top-0 left-1/2 fill-bright animate-shake animate-delay-1000 transform -translate-x-1/2" />
        <Wave2 newClass="absolute top-[85%] left-full fill-seance animate-shake animate-delay-500" />

        <div class="absolute top-0 right-0 w-40 h-40 flex justify-center items-center bg-white rounded-3xl">
          <Pinterest newClass="h-24 w-auto animate-fade animate-infinite animate-duration-[4000ms] animate-ease-in-out" />
        </div>
        <div class="absolute top-1/2 right-0 w-40 h-40 flex justify-center items-center bg-white rounded-3xl">
          <Tiktok newClass="h-24 w-auto animate-fade animate-infinite animate-duration-[4000ms] animate-ease-in-out animate-delay-[1250ms]" />
        </div>
        <div class="absolute top-[12rem] left-0 w-40 h-40 flex justify-center items-center bg-white rounded-3xl">
          <Bing newClass="h-24 w-auto animate-fade animate-infinite animate-duration-[4000ms] animate-ease-in-out animate-delay-500" />
        </div>
        <div class="absolute top-[6rem] left-1/4 w-40 h-40 flex justify-center items-center bg-white rounded-3xl">
          <GAds newClass="w-24 h-auto animate-fade animate-infinite animate-duration-[4000ms] animate-delay-1000 animate-ease-in-out" />
        </div>
        <div class="absolute top-1/2 left-1/4 w-40 h-40 flex justify-center items-center bg-white rounded-3xl">
          <LinkedIn newClass="h-24 w-auto animate-fade animate-infinite animate-duration-[4000ms] animate-ease-in-out animate-delay-[250ms]" />
        </div>
        <div class="absolute top-[12rem] right-1/4 w-40 h-40 flex justify-center items-center bg-white rounded-3xl">
          <Meta newClass="w-24 h-auto animate-fade animate-infinite animate-duration-[4000ms] animate-ease-in-out animate-delay-[1500ms]" />
        </div>
        <div class="absolute bottom-0 right-1/4 w-40 h-40 flex justify-center items-center bg-white rounded-3xl">
          <YouTube newClass="h-24 w-auto animate-fade animate-infinite animate-duration-[4000ms] animate-ease-in-out animate-delay-[750ms]" />
        </div>
      </div>
    </div>
  </div>
  <div class="absolute bottom-24 w-full z-20 max-lg:hidden">
    <div class="big-container">
      <h2 class="text-3">Acquisition. Notoriété.</h2>
    </div>
  </div>
  <HeaderWave />
  <div class="absolute bottom-0 h-20 w-full bg-seance inset-x-0 z-0 max-lg:hidden" />
</div>