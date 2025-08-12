<script lang="ts">
  import { page } from '$app/stores';

	import Block1Site from "$lib/components/blocks/prod/Block1Site.svelte";
	import Block2Site from "$lib/components/blocks/prod/Block2Site.svelte";
	import Block3Site from "$lib/components/blocks/prod/Block3Site.svelte";
	import Block4Site from "$lib/components/blocks/prod/Block4Site.svelte";
  import Header2 from "$lib/components/blocks/prod/Header2.svelte";
	import PictosSite from "$lib/components/blocks/prod/PictosSite.svelte";
	import MetaFront from "$lib/components/utilities/MetaFront.svelte";
	import UseCases from "$lib/components/blocks/UseCases.svelte";

  const title = 'Création de site internet'
  const subtitle = 'Vitrine. Blog. E-commerce.'
  const intro = "Notre agence digitale crée et développe votre futur site web du début de la réflexion jusqu'à sa mise en production, clé en main. Pour nous, chaque étape est importante : la réflexion de la technologie à utiliser pour le développement, la création d'une charte graphique et d'un design moderne et épuré ainsi qu'un parcours utilisateur correspondant à votre cible pour finir avec un développement optimisé en SEO."
  const words: Array<string> = [
    'Site', 'Blog', 'Site vitrine', 'Développement', 'UX / UI', 'SEO', 'Web design', 'Site e-commerce', 'Refonte'
  ]

  const title2 = 'UX, Web Design et Développement Web'

  const meta = {
    title: "Création et refonte de sites web sur-mesure",
    description: "L'agence digitale Beavers crée votre site internet, blog, ou encore un site e-commerce. Beavers s'occupe de la refonte de votre site en gardant votre SEO."
  }

  let useCases: Array<any> = $page.data.useCases;
  let cases: Array<any> = []
  $: {
    useCases = $page.data.useCases;
    shuffle(useCases)
    cases = useCases.slice(0, 3)
  }

  function shuffle(array:Array<any>) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
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
  <UseCases {cases} firstText="Découvrez nos<br />" />
  </div>