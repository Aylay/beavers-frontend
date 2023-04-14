<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	export let src: string;
	export let alt: string;
	export let i: number;
	const delay = i * 200;
	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-200px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div use:inview={options} on:inview_change={handleChange} class="max-h-[10rem] max-w-[20rem]">
	{#if isInView}
		<img {src} {alt} class={isInView ? 'animate-fade' : ''} style="animation-delay: {delay}ms;" />
	{/if}
</div>
