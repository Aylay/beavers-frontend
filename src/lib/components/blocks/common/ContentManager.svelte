<script lang="ts">
	import ContentManagerBlock from './ContentManagerBlock.svelte';

	export let content: Array<any>;
	export let title: string;
</script>

<div class="flex flex-col gap-32 lg:gap-40">
	{#each content as block}
		<ContentManagerBlock {block} {title} />
	{/each}
</div>
