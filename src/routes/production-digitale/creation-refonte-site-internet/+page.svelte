<script lang="ts">
	import Block1Site from "$lib/components/blocks/prod/Block1Site.svelte";
	import Block2Site from "$lib/components/blocks/prod/Block2Site.svelte";
	import Block3Site from "$lib/components/blocks/prod/Block3Site.svelte";
	import Block4Site from "$lib/components/blocks/prod/Block4Site.svelte";
  import Header2 from "$lib/components/blocks/prod/Header2.svelte";
	import PictosSite from "$lib/components/blocks/prod/PictosSite.svelte";
	import MetaFront from "$lib/components/utilities/MetaFront.svelte";

  const title = 'Création de site internet'
  const subtitle = 'Site vitrine. Blog. Site e-commerce.'
  const intro = "Notre agence digitale crée et développe votre futur site web du début de la réflexion à la mise en production finale clé en main. Pour nous, chaque étape est importante : la réflexion de la technologie à utiliser pour le développement, la création d'une charte graphique et d'un design moderne et épuré ainsi qu'un parcours utilisateur correspondant à votre cible pour finir avec un développement optimisé en SEO."
  const words: Array<string> = [
    'Site', 'Blog', 'Site vitrine', 'Développement', 'UX / UI', 'SEO', 'Web design', 'Site e-commerce', 'Refonte'
  ]

  const title2 = 'UX, Web Design et Développement Web'

  const meta = {
    title: "Tous les Cas agence de l'agence digitale Beavers",
    description: "Voici une présentation de tous les case studies de l'agence digitale Beavers, spécialisée en création de sites internet et marketing digital."
  }
</script>

<MetaFront {meta} />

<div class="flex flex-col gap-48 lg:gap-96 max-lg:px-4 pb-48 lg:pb-96">
	<Header2 {title} {subtitle} {intro} {words} />
  <PictosSite title={title2} />
  <Block1Site />
  <Block2Site />
  <Block3Site />
  <Block4Site />
</div>