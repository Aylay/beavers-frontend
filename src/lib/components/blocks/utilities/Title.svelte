<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	export let first = '';
	export let second = '';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div class="relative">
	<span
		use:inview={options}
		on:inview_change={handleChange}
		class="absolute whitespace-nowrap left-1/2 top-0 -z-10 w-screen -translate-y-1/2 transform text-1 text-seance opacity-0 {isInView
			? 'animate-title'
			: ''}"
	>
		{second !== '' ? second.replace(/<(.|\n)*?>/g, '') : first.replace(/<(.|\n)*?>/g, '')}
	</span>
	<h2 class="w-full max-w-[48rem] text-3 text-seance">
		{@html first}
		{#if second !== ''}
			<span class="font-highlight text-[5.7rem] leading-[3rem] text-bright font-normal">
				{second ? ' ' + second : ''}
			</span>
		{/if}
	</h2>
</div>
