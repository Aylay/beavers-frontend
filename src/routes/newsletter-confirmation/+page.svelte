<script lang="ts">
  import Header from "$lib/components/blocks/common/Header.svelte";
	import MetaFront from "$lib/components/utilities/MetaFront.svelte";

  const title = "Newsletter"
  const subtitle = 'Vous avez été inscrit.e à notre newsletter mensuelle'

  const meta = {
    title: "Tous les Cas agence de l'agence digitale Beavers",
    description: "Voici une présentation de tous les case studies de l'agence digitale Beavers, spécialisée en création de sites internet et marketing digital."
  }
</script>

<MetaFront {meta} />

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="max-lg:px-4">
  <Header {title} {subtitle} />
</div>