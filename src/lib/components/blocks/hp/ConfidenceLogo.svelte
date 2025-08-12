<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	export let src: string;
	export let newClass: string;
	export let href: string;
	export let title: string;
	export let blank: boolean = false;
	export let i: number;
	const delay = i * 200;
	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<a
	use:inview={options}
	on:inview_change={handleChange}
	class="flex h-[10rem] w-[20rem] items-center justify-center opacity-50 transition-opacity hover:opacity-100"
	{href}
	{title}
	target={blank ? '_blank' : '_self'}
>
	{#if isInView}
		<img
			{src}
			alt={title}
			class="{newClass} {isInView ? 'animate-fade' : ''}"
			style="animation-delay: {delay}ms;"
		/>
	{/if}
</a>
