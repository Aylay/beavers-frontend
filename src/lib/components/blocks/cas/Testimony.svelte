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
	<p class="mb-16 text-center text-3 text-seance">
		Notre client <span class="font-highlight text-[5.7rem] leading-[3rem] font-normal text-bright"
			>témoigne&nbsp;!</span
		>
	</p>
	<div class="flex flex-nowrap justify-center gap-4">
		{#each { length: testimony.note } as _, i}
			<div
				class="w-12 {isInView ? 'animate-fade' : 'opacity-0'}"
				style="animation-delay: {150 * i}ms;"
			>
				<Star newClass="w-full h-auto fill-bright" />
			</div>
		{/each}
		{#each { length: 5 - testimony.note } as _, i}
			<div
				class="w-12 {isInView ? 'animate-fade' : 'opacity-0'}"
				style="animation-delay: {150 * testimony.note + 150 * i}ms;"
			>
				<Star2 newClass="w-full h-auto" />
			</div>
		{/each}
	</div>
	<div class="small-container mt-16 text-center text-6">
		<SvelteMarkdown source={'" ' + testimony.commentaire + ' "'} options={mdOptions} />
	</div>
	<p class="mt-10 font-highlight text-4 text-bright capitalize">
		{testimony.prenom}
		{testimony.nom}
	</p>
</div>
