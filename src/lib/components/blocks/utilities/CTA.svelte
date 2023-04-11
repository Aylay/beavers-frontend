<script lang="ts">
	import Hoverable from '$lib/components/utilities/Hoverable.svelte';

	export let label = '';
	export let href = '#';
	export let type = '';
	let classes = '';

	if (type === 'transparent') {
		classes = 'text-white border-bright';
	}
</script>

<Hoverable let:hovering={active}>
	<a
		class="text-6 font-bold {classes} rounded-[2.2rem] border-2 px-10 py-5 transition-colors"
		{href}
	>
		{label}
	</a>
</Hoverable>
