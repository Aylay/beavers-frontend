<script lang="ts">
  import { page } from '$app/stores';
	import Ocean from '$lib/components/blocks/rse/Ocean.svelte';
	import Tree from '$lib/components/blocks/rse/Tree.svelte';

	import Header from "$lib/components/blocks/rse/Header.svelte";
	import End from '$lib/components/blocks/rse/End.svelte';

  let isOceanActive: boolean = $page.data.isOceanActive;
</script>

<div class="flex flex-col gap-48 lg:gap-96 max-lg:px-4 pb-48 lg:pb-96">
  <Header bind:isOceanActive />
  <Ocean newClass={isOceanActive ? 'order-1' : 'order-2'} />
  <Tree newClass={isOceanActive ? 'order-2' : 'order-1'} />
  <End />
</div>