<script lang="ts">
	import Tree1 from './Tree1.svelte';
	import Tree2 from './Tree2.svelte';
	import Tree3 from './Tree3.svelte';

	export let newClass = '';
</script>

<div class="{newClass} flex flex-col gap-48 lg:gap-96">
	<Tree1 />
	<Tree2 />
	<Tree3 />
</div>
