<script lang="ts">
  import Header from "$lib/components/blocks/common/Header.svelte";
	import MetaFront from "$lib/components/utilities/MetaFront.svelte";

  const title = "Newsletter"
  const subtitle = "Vous n'avez pas été inscrit.e... Nos castors sont prêts à vous envoyer leur newsletter mensuelle avec parcimonie."

const meta = {
  title: "Inscription à la newsletter non finalisée",
  description: "L'inscription à la newsletter n'a pas été finalisée. Les castors rédigent leur prochaine newsletter dans l'attente de vous revoir bientôt. "
}
</script>

<MetaFront {meta} />

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="max-lg:px-4">
  <Header {title} {subtitle} />
</div>