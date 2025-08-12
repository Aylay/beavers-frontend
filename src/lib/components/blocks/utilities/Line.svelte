<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-10px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	export let color: string = 'bg-bright';
</script>

<div
	use:inview={options}
	on:inview_change={handleChange}
	class="mb-8 h-[2px] origin-left {color} {isInView ? 'animate-line w-40' : 'w-0'}"
/>
