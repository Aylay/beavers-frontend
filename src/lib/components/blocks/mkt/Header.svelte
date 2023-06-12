<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import ArrowBottom from "$lib/assets/svg/ArrowBottom.svelte";
	import Mouse from "$lib/assets/svg/Mouse.svelte";
	import HeaderWave from '$lib/assets/svg/HeaderWave.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div class="lg:h-screen bg-rock relative after:w-1/3 after:bg-bright after:h-full after:absolute after:inset-y-0 after:right-0">
  <div class="big-container flex flex-col h-full justify-center relative z-10">
    <div class="lg:w-1/2">
      <h1 class="text-2">
        Marketing<br />digital
      </h1>
      <div class="flex flex-col items-center w-8 mt-[calc(100vh*0.1)] gap-2">
        <Mouse newClass="h-auto w-full" color="#FFF" />
        <ArrowBottom newClass="animate-bounce"  color="#FFF" />
      </div>
    </div>
  </div>
  <div class="absolute bottom-24 w-full z-20">
    <div class="big-container">
      <h2 class="text-3">Acquisition. Notoriété.</h2>
    </div>
  </div>
  <HeaderWave />
  <div class="absolute bottom-0 h-20 w-full bg-seance inset-x-0 z-0" />
</div>