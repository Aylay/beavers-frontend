<script lang="ts">
  import Header from "$lib/components/blocks/common/Header.svelte";
	import MetaFront from "$lib/components/utilities/MetaFront.svelte";

  const title = "Contact"
  const subtitle = 'Votre demande a bien été envoyée, pas de panique, nos castors vont vous répondre rapidement.'

  const meta = {
    title: "Formulaire de contact envoyé à Beavers.",
    description: "Le formulaire a bien été envoyé à l'agence digitale Beavers. L'équipe de castors répond à votre demande dans les plus brefs délais."
  }
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<MetaFront {meta} />

<div class="max-lg:px-4">
  <Header {title} {subtitle} />
</div>