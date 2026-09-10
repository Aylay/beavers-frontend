<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import SvelteMarkdown from 'svelte-markdown';
	import MarkdownLink from '$lib/components/utilities/MarkdownLink.svelte';

	const mdOptions = {
		breaks: true,
		gfm: true,
		headerIds: false
	};

	const mdRenderers = { link: MarkdownLink };

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
</script>

<div
	class="big-container flex gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="flex flex-1 flex-col gap-8 {isInView ? 'animate-fade' : 'opacity-0'}">
		<p class="text-5 text-bright">Le contexte</p>
		<div class="content-style">
			<SvelteMarkdown source={context} options={mdOptions} renderers={mdRenderers} />
		</div>
	</div>
	<div
		class="flex flex-1 flex-col gap-8 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}"
	>
		<p class="text-5 text-bright">Les besoins du client</p>
		<div class="content-style">
			<SvelteMarkdown source={needs} options={mdOptions} renderers={mdRenderers} />
		</div>
	</div>
</div>
