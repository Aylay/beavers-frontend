<script lang="ts">
	import Ocean1 from './Ocean1.svelte';
	import Ocean2 from './Ocean2.svelte';
	import Ocean3 from './Ocean3.svelte';

	export let newClass = '';
</script>

<div class="{newClass} flex flex-col gap-48 lg:gap-96">
	<Ocean1 />
	<Ocean2 />
	<Ocean3 />
</div>
