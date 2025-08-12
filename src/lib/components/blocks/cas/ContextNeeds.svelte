<script lang="ts">
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import SvelteMarkdown from 'svelte-markdown';

	const mdOptions = {
		breaks: true,
		gfm: true,
		headerIds: false
	};

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	export let context: string;
	export let needs: string;

	onMount(() => {
		addTargetBlank();
	});

	function addTargetBlank() {
		let links = document.querySelectorAll('.content-style a');

		for (const el of Array.from(links) as HTMLAnchorElement[]) {
			if (el.hostname !== window.location.hostname) el.target = '_blank';
		}
	}
</script>

<div
	class="big-container flex gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="flex flex-1 flex-col gap-8 {isInView ? 'animate-fade' : 'opacity-0'}">
		<p class="text-5 text-bright">Le contexte</p>
		<div class="content-style">
			<SvelteMarkdown source={context} options={mdOptions} />
		</div>
	</div>
	<div
		class="flex flex-1 flex-col gap-8 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}"
	>
		<p class="text-5 text-bright">Les besoins du client</p>
		<div class="content-style">
			<SvelteMarkdown source={needs} options={mdOptions} />
		</div>
	</div>
</div>
