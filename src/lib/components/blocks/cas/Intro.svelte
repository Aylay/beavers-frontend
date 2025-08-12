<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Line from '../utilities/Line.svelte';

	export let intro: string = '';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div class="big-container" use:inview={options} on:inview_change={handleChange}>
	<Line />
	<h2
		class="text-4 font-semibold text-seance lg:text-3 {isInView
			? 'animate-fade-right'
			: 'opacity-0'}"
	>
		{intro}
	</h2>
</div>
