<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Clock from '$lib/assets/svg/Clock.svelte';
	import Gear from '$lib/assets/svg/Gear.svelte';
	import Website from '$lib/assets/svg/Website.svelte';

	const strapiURL = import.meta.env.VITE_STRAPI_URL;

  let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

  export let client: any;
  export let duration: string;
  export let gear: string;
  export let website: string;

</script>

<div class="big-container flex gap-20 lg:gap-40 max-lg:flex-col"
  use:inview={options}
  on:inview_change={handleChange}
>
  <div class="flex-1 flex max-lg:flex-col gap-20">
    <div class="lg:w-72">
      {#if isInView}
      <img src={strapiURL + client.logo.data.attributes.url} alt={client.logo.data.attributes.alternativeText ? client.logo.data.attributes.alternativeText : client.name} class="max-w-[50%] lg:max-w-[12rem] lg:max-h-[10rem] w-full h-auto mx-auto {isInView ? 'animate-fade' : 'opacity-0'}">
      {/if}
    </div>
    <div class="flex-1 lg:pl-10 lg:border-l-[2px] border-l-jagger flex flex-col gap-8 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
      <p class="text-5 text-bright">
        Le projet
      </p>
      {#if duration}
      <div class="flex gap-8 items-center fill-seance">
        <Clock newClass="w-12 h-auto" />
        <p class="flex-1 text-6 font-semibold">
          {duration}
        </p>
      </div>
      {/if}
      {#if gear}
      <div class="flex gap-8 items-center fill-seance">
        <Gear newClass="w-12 h-auto" />
        <p class="flex-1 text-6 font-semibold">
          {gear}
        </p>
      </div>
      {/if}
      {#if website}
      <div class="flex gap-8 items-center fill-seance">
        <Website newClass="w-12 h-auto" />
        <a href={website} target="_blank" class="flex-1 text-6 font-semibold underline hover:text-bright transition-colors text-seance" title="Site {client.name}">
          Visiter le site
        </a>
      </div>
      {/if}
    </div>
  </div>
  <div class="flex-1 lg:pl-10 lg:border-l-[2px] border-l-jagger flex flex-col gap-8 animate-delay-1000 {isInView ? 'animate-fade' : 'opacity-0'}">
    <p class="text-5 text-bright">
      A propos de {client.name}
    </p>
    <p class="text-6">
      {@html client.description}
    </p>
  </div>
</div>