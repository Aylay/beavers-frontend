<script lang="ts">
	import Block1Seo from "$lib/components/blocks/prod/Block1SEO.svelte";
	import Block2Seo from "$lib/components/blocks/prod/Block2SEO.svelte";
	import Block3Seo from "$lib/components/blocks/prod/Block3SEO.svelte";
	import Block4Seo from "$lib/components/blocks/prod/Block4SEO.svelte";
  import Header2 from "$lib/components/blocks/prod/Header2.svelte";
	import PictosSEO from "$lib/components/blocks/prod/PictosSEO.svelte";
	import MetaFront from "$lib/components/utilities/MetaFront.svelte";

  const title = 'SEO.<br /> Référencement Naturel.'
  const subtitle = '1ère position sur votre moteur de recherche.'
  const intro = "L'agence Beavers est spécialisée dans l'optimisation du référencement naturel afin d'atteindre les meilleures positions dans les moteurs de recherche comme Google, Yahoo ou Bing.<br />Le SEO reste un levier primordial pour toute entreprise."
  const words: Array<string> = [
    'SEO', 'Référencement Naturel', 'Position 0', 'Google', 'Bing', 'Yahoo', '1ère position', 'Données structurées', 'Audit SEO', 'Résultats de recherche'
  ]

  const title2 = 'Le SEO à la base de tout site internet'

  const meta = {
    title: "Beavers met en place toutes les optimisations pour votre SEO.",
    description: "Votre agence digitale spécialisée en référencement naturel vous propose un audit de votre SEO, des optimisations techniques, de contenu, de maillage, jusqu'au suivi à long terme."
  }
</script>

<MetaFront {meta} />

<div class="flex flex-col gap-48 lg:gap-96 pb-48 lg:pb-96">
	<Header2 {title} {subtitle} {intro} {words} />
  <PictosSEO title={title2} />
  <Block1Seo />
  <Block2Seo />
  <Block3Seo />
  <Block4Seo />
</div>