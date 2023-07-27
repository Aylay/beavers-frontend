<script lang="ts">
  import Header from "$lib/components/blocks/common/Header.svelte";
	import MetaFront from "$lib/components/utilities/MetaFront.svelte";

  const title = "Newsletter"
  const subtitle = "Merci ! Nos castors préparent l'envoi de votre newsletter."

  const meta = {
    title: "Confirmation d'inscription à la newsletter Beavers.",
    description: "L'inscription à la newsletter de l'agence digitale Beavers a été finalisée. Recevez toutes les dernières actus, les derniers articles et les dernières publications des réseaux sociaux de Beavers."
  }
</script>

<MetaFront {meta} />

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="max-lg:px-4">
  <Header {title} {subtitle} />
</div>