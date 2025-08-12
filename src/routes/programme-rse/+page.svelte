<script lang="ts">
  import { page } from '$app/stores';
	import Ocean from '$lib/components/blocks/rse/Ocean.svelte';
	import Tree from '$lib/components/blocks/rse/Tree.svelte';

	import Header from "$lib/components/blocks/rse/Header.svelte";
	import End from '$lib/components/blocks/rse/End.svelte';
	import MetaFront from '$lib/components/utilities/MetaFront.svelte';

  let isOceanActive: boolean = $page.data.isOceanActive;

  const meta = {
    title: "Beavers s'engage auprès d'associations environnementales.",
    description: "Votre agence digitale reverse 2% de son chiffres d'affaires à deux associations pour la protection de l'environnement : The Ocean Cleanup et Tree-Nation. "
  }
</script>

<MetaFront {meta} />

<div class="flex flex-col gap-48 lg:gap-96 pb-48 lg:pb-96">
  <Header bind:isOceanActive />
  <Ocean newClass={isOceanActive ? 'order-1' : 'order-2'} />
  <Tree newClass={isOceanActive ? 'order-2' : 'order-1'} />
  <End />
</div>