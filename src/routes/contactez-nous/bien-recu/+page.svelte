<script lang="ts">
  import Header from "$lib/components/blocks/common/Header.svelte";
	import MetaFront from "$lib/components/utilities/MetaFront.svelte";

  const title = "Contact"
  const subtitle = 'Nous avons bien reçu votre demande et y répondrons dans les plus brefs délais.'

  const meta = {
    title: "Tous les Cas agence de l'agence digitale Beavers",
    description: "Voici une présentation de tous les case studies de l'agence digitale Beavers, spécialisée en création de sites internet et marketing digital."
  }
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<MetaFront {meta} />

<div class="max-lg:px-4">
  <Header {title} {subtitle} />
</div>