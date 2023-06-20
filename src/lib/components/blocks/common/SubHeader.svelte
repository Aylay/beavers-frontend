<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

  import Cta from '$lib/components/blocks/utilities/CTA.svelte';
	import Sun from '$lib/assets/svg/Sun.svelte';
	import Wave from '$lib/assets/svg/Wave.svelte';
	import MultipleArrows2 from '$lib/assets/svg/MultipleArrows2.svelte';


	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

  export let text1: string;
  export let text2: string;
  export let text3: string;
  export let text4: string;
  export let text5: string = '';
</script>

<div
  class="small-container text-center relative"
  use:inview={options}
  on:inview_change={handleChange}
>
  <h2 class="uppercase lg:text-[8.5rem] lg:leading-none font-extrabold mb-4">
    {@html text1}<span class="block text-outline">{@html text2}</span>
  </h2>
  <p class="text-bright text-6 font-semibold pb-12 relative after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-60 after:h-[2px] after:bg-seance lg:px-8 mt-4">
    {@html text3}
  </p>
  <p class="mt-12 text-6 lg:px-8">
    {@html text4}
  </p>
  <div class="mt-20">
		<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
  </div>
  <Sun newClass="animate-once w-20 h-auto absolute right-32 -top-14 {isInView ? 'animate-ping' : 'opacity-0'}" color="#00FFDA" />
  <div
    class="absolute top-1/2 -left-32 h-auto rotate-[-45deg] w-[6.2rem] {isInView
      ? 'animate-fade'
      : 'opacity-0'}"
  >
    <Wave />
  </div>
  <MultipleArrows2 newClass="absolute bottom-0 right-0 {isInView
    ? 'animate-jump'
    : 'opacity-0'}" />
</div>