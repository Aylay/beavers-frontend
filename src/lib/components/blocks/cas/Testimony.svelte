<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import SvelteMarkdown from 'svelte-markdown';

	import Line from '../utilities/Line.svelte';
	import Star from '$lib/assets/svg/Star.svelte';
	import Star2 from '$lib/assets/svg/Star2.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	const mdOptions = {
		breaks: true,
		gfm: true,
		headerIds: false
	};

  export let testimony: any;
</script>

<div
  class="big-container flex flex-col items-center"
  use:inview={options}
  on:inview_change={handleChange}
>
	<Line />
  <p class="text-3 text-seance mb-16 text-center">
    Notre client <span class="font-highlight text-[5.7rem] leading-[3rem] text-bright font-normal">témoigne&nbsp;!</span>
  </p>
	<div class="flex justify-center gap-4 flex-nowrap">
		{#each {length: testimony.note} as _, i}
		<div
			class="w-12 {isInView ? 'animate-fade' : 'opacity-0'}"
			style="animation-delay: {150 * i}ms;"
		>
			<Star newClass="w-full h-auto fill-bright" />
		</div>
		{/each}
		{#each {length: 5 - testimony.note} as _, i}
		<div
			class="w-12 {isInView ? 'animate-fade' : 'opacity-0'}"
			style="animation-delay: {150 * testimony.note + 150 * i}ms;"
		>
			<Star2 newClass="w-full h-auto" />
		</div>
		{/each}
	</div>
	<div class="small-container text-6 text-center mt-16">
		<SvelteMarkdown source={'" ' + testimony.commentaire + ' "'} options={mdOptions} />
	</div>
	<p class="font-highlight capitalize text-bright mt-10 text-4">{testimony.prenom} {testimony.nom}</p>
</div>