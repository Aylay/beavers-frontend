<script lang="ts">
  import Header from "$lib/components/blocks/common/Header.svelte";

  const title = "Oups !"
  const subtitle = 'Vous avez tout cassé ;)'
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>


<div class="flex flex-col gap-20 lg:gap-40 pb-20 lg:pb-40">
  <Header {title} {subtitle} />
  <div class="small-container content-style flex flex-col gap-8">
    <h3>Et voilà, vous êtes arrivé.e à un endroit où il ne fallait pas.</h3>
    <p>
      Reprenez vite ce que vous étiez en train de faire en repartant par exemple à partir de <a href="/" title="Beavers, l'agence média des castors">la page d'accueil</a>.
    </p>
    <p>
      Si par hasard, vous revenez sur cette page une 2ème fois (sans l'avoir voulu), n'hésitez pas à <a href="/contactez-nous" title="Contactez Beavers">nous écrire un petit message</a> pour nous faire part du problème.
    </p>
    <p>
      En vous remerciant pour votre message et toutes nos excuses pour ce contre-temps.
    </p>
  </div>
</div>