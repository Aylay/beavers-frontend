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
  const text3 = "Le marketing digital change chaque jour. Chez Beavers, on veille en continu sur les nouvelles tendances, outils et opportunités pour concevoir des stratégies médias performantes, pensées pour vos enjeux business."
  const text4 = 'Nous analysons votre marché, vos audiences et vos objectifs pour définir un plan d’action complet.<br />Chaque levier digital est choisi et activé selon sa pertinence : notoriété, trafic ou conversion, pour des campagnes qui transforment vraiment.'

  const meta = {
    title: "Agence Marketing Digital experte en SEA, Social Ads & Stratégie Média",
    description: "Beavers conçoit des stratégies marketing digital sur mesure : SEA, Social Ads, Display, Affiliation et YouTube Ads. Des campagnes pilotées par la data pour booster visibilité, trafic et conversions."
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