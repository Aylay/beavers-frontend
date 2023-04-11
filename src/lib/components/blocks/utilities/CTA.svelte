<script lang="ts">
	import Hoverable from '$lib/components/utilities/Hoverable.svelte';

	export let label = '';
	export let href = '';
	export let type = '';
	let classes = '';

	if (type === 'transparent') {
		classes = 'text-white border-bright';
	}
</script>

<Hoverable let:hovering={active}>
	{#if href === ''}
		<div
			class="text-6 font-bold {classes} inline-block rounded-[3rem] border-2 px-10 py-4 transition-colors"
		>
			{label}
		</div>
	{:else}
		<a
			class="text-6 font-bold {classes} rounded-[3rem] border-2 px-10 py-4 transition-colors"
			{href}
		>
			{label}
		</a>
	{/if}
</Hoverable>
