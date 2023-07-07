<script lang="ts">
  import { page } from '$app/stores';

	import Header from "$lib/components/blocks/soutiens/Header.svelte";

  let isOceanActive: boolean = $page.data.isOceanActive;
</script>

<div class="flex flex-col gap-48 lg:gap-96 max-lg:px-4 pb-48 lg:pb-96">
  <Header bind:isOceanActive />
</div>