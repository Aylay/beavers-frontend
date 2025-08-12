<script lang="ts">
  import { page } from '$app/stores';

	import SubHeader from "$lib/components/blocks/common/SubHeader.svelte";
	import WebSite from "$lib/components/blocks/prod/WebSite.svelte";
	import SEO from "$lib/components/blocks/prod/SEO.svelte";
	import Newsletter from "$lib/components/blocks/prod/Newsletter.svelte";
  import Header from "$lib/components/blocks/prod/Header.svelte";
	import MetaFront from "$lib/components/utilities/MetaFront.svelte";
	import UseCases from "$lib/components/blocks/UseCases.svelte";

  const text1 = 'le digital<br />est en constante'
  const text2 = 'évolution.'
  const text3 = 'Faites vous accompagner par des castors professionnels pour mettre en place votre meilleure stratégie digitale.'
  const text4 = 'Que ce soit une création de site internet, une amélioration SEO de votre site actuel, envoyer une newsletter mensuelle, ou tout autre demande, décrivez-nous votre besoin digital.'

const meta = {
  title: "Production digitale : site, SEO, newsletter",
  description: "L'agence Beavers vous propose différentes offres entre la création et le développement de site internet en passant par les audit SEO et la création, développement et envoi de newsletters."
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

<div class="flex flex-col gap-20 lg:gap-40 pb-48 lg:pb-96">
  <Header />
  <div class="flex flex-col gap-32 lg:gap-96">
    <SubHeader {text1} {text2} {text3} {text4} />
    <WebSite />
    <SEO />
    <Newsletter />
    <UseCases {cases} firstText="Découvrez nos<br />" />
  </div>
</div>