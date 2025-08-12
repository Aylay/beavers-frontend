<script lang="ts">
	import { page } from '$app/stores';

	import Arrow from '$lib/assets/svg/Arrow.svelte';
	import Hoverable from '$lib/components/utilities/Hoverable.svelte';

	export let pageNumber: number = 1;
	export let slug: string = '';
	let pageCount: number = $page.data.pageCount;

	$: pageCount = $page.data.pageCount;
</script>

<div class="big-container flex items-center justify-center gap-16 pb-32 lg:pb-64">
	{#if pageNumber > 1}
		<Hoverable let:hovering={active}>
			<a
				href="/la-pause-cafe{slug !== '' ? '/' + slug : ''}{pageNumber === 2
					? ''
					: '/page/' + (pageNumber - 1)}"
				class="flex items-center gap-2"
				title="Page précédente"
			>
				<Arrow newClass="transition-colors rotate-180 {active ? 'fill-bright' : 'fill-seance'}" />
			</a>
		</Hoverable>
	{/if}
	<p class="text-6">Page {pageNumber} / {pageCount}</p>
	{#if pageCount !== pageNumber}
		<Hoverable let:hovering={active}>
			<a
				href="/la-pause-cafe{slug !== '' ? '/' + slug : ''}/page/{pageNumber + 1}"
				class="flex items-center gap-2"
				title="Page suivante"
			>
				<Arrow newClass="transition-colors {active ? 'fill-bright' : 'fill-seance'}" />
			</a>
		</Hoverable>
	{/if}
</div>
