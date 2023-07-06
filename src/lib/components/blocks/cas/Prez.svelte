<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Clock from '$lib/assets/svg/Clock.svelte';
	import Gear from '$lib/assets/svg/Gear.svelte';
	import Website from '$lib/assets/svg/Website.svelte';

  let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

  export let logo: any;
  export let duration: string;
  export let gear: string;
  export let website: string;
  export let brand: any;
	export let color: string = '';
</script>

<div class="big-container flex gap-20 lg:gap-40 max-lg:flex-col"
  use:inview={options}
  on:inview_change={handleChange}
>
  <div class="flex-1 flex max-lg:flex-col gap-20">
    <div class="lg:w-72">
      <img src={logo.src} alt={logo.alt} class="max-w-[50%] lg:max-w-[12rem] lg:max-h-[10rem] w-full h-auto mx-auto {isInView ? 'animate-fade' : 'opacity-0'}">
    </div>
    <div class="flex-1 lg:pl-10 lg:border-l-[2px] border-l-jagger flex flex-col gap-8 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
      <p class="text-5 text-bright">
        Le projet
      </p>
      {#if duration}
      <div class="flex gap-8 items-center" style="fill: {color}">
        <Clock newClass="w-auto h-12" />
        <p class="text-6 font-semibold">
          {duration}
        </p>
      </div>
      {/if}
      {#if gear}
      <div class="flex gap-8 items-center" style="fill: {color}">
        <Gear newClass="w-auto h-12" />
        <p class="text-6 font-semibold">
          {gear}
        </p>
      </div>
      {/if}
      {#if website}
      <div class="flex gap-8 items-center" style="fill: {color}">
        <Website newClass="w-auto h-12" />
        <a href={website} target="_blank" class="text-6 font-semibold underline hover:no-underline" style="color: {color}">
          Visiter le site
        </a>
      </div>
      {/if}
    </div>
  </div>
  <div class="flex-1 lg:pl-10 lg:border-l-[2px] border-l-jagger flex flex-col gap-8 animate-delay-1000 {isInView ? 'animate-fade' : 'opacity-0'}">
    <p class="text-5 text-bright">
      A propos de {brand.name}
    </p>
    <p class="text-6">
      {@html brand.description}
    </p>
  </div>
</div>