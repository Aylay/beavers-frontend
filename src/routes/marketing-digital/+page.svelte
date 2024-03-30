<script lang="ts">
  import { page } from '$app/stores';

	import SubHeader from "$lib/components/blocks/common/SubHeader.svelte";
	import AffiliationDisplay from "$lib/components/blocks/mkt/AffiliationDisplay.svelte";
	import Google from "$lib/components/blocks/mkt/Google.svelte";
  import Header from "$lib/components/blocks/mkt/Header.svelte";
	// import Influence from "$lib/components/blocks/mkt/Influence.svelte";
	import Social from "$lib/components/blocks/mkt/Social.svelte";
	import MetaFront from "$lib/components/utilities/MetaFront.svelte";
	import UseCases from "$lib/components/blocks/UseCases.svelte";

  const text1 = 'le digital<br />est en constante'
  const text2 = 'évolution.'
  const text3 = "Vous suivez les dernières tendances pour améliorer votre offre dans le secteur de l'habitat, Beavers suit pour vous celles dans le secteur du digital."
  const text4 = 'Obtenez un plan média incluant une stratégie complète basée sur une analyse de votre entreprise selon vos besoins. Nous sélectionnons et activons les leviers digitaux les plus pertinents pour répondre à vos objectifs : de notoriété, de trafic, ou de conversion.'

  const meta = {
    title: "Touchez vos prospects, générez des visites ou des ventes.",
    description: "L'agence média digitale Beavers vous propose le meilleur mix média pour activer les bons leviers auprès de la bonne audience au bon moment."
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
    <Google />
    <Social />
    <AffiliationDisplay />
    <!-- <Influence /> -->
    <UseCases {cases} firstText="Découvrez nos<br />" />
  </div>
</div>