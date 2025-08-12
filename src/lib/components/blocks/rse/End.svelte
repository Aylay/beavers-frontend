<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import Line from '../utilities/Line.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div class="big-container order-3" use:inview={options} on:inview_change={handleChange}>
	<Line />
	<h2
		class="text-4 font-semibold text-seance lg:text-3 {isInView
			? 'animate-fade-right'
			: 'opacity-0'}"
	>
		En travaillant avec Beavers, en plus de collaborer avec une agence humaine et compétente, vous
		soutenez une bonne cause. Et si vous avez encore besoin d'arguments pour collaborez avec nous,
		nous saurons vous convaincre.
	</h2>
</div>
