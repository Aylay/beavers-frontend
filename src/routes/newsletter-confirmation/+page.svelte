<script lang="ts">
  import Header from "$lib/components/blocks/common/Header.svelte";

  const title = "Newsletter"
  const subtitle = 'Vous avez été inscrit.e à notre newsletter mensuelle'
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="max-lg:px-4">
  <Header {title} {subtitle} />
</div>