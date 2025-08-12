<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	export let person: any;
</script>

<div use:inview={options} on:inview_change={handleChange}>
	<picture>
		<source srcset={person.webp} type="image/webp" />
		<source srcset={person.img} type="image/png" />
		<img
			src={person.img}
			alt="{person.name} - {person.job}"
			class="w-full max-w-[21rem] {isInView ? 'animate-fade' : 'opacity-0'}"
		/>
	</picture>
	<h3 class="mt-12 text-4 font-semibold text-seance">
		{person.name}
	</h3>
	<h4 class="mt-2 font-highlight text-4 text-bright">
		{person.job}
	</h4>
	<p class="mt-8 text-6">
		{@html person.text}
	</p>
</div>
