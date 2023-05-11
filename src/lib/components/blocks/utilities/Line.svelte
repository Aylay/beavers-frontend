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
</script>

<div
	use:inview={options}
	on:inview_change={handleChange}
	class="mb-8 h-[2px] origin-left bg-bright {isInView ? 'w-60 animate-line' : 'w-0'}"
/>
