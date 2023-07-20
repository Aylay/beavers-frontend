<script lang="ts">
	import SubHeader from "$lib/components/blocks/common/SubHeader.svelte";
	import AffiliationDisplay from "$lib/components/blocks/mkt/AffiliationDisplay.svelte";
	import Google from "$lib/components/blocks/mkt/Google.svelte";
  import Header from "$lib/components/blocks/mkt/Header.svelte";
	import Influence from "$lib/components/blocks/mkt/Influence.svelte";
	import Social from "$lib/components/blocks/mkt/Social.svelte";
	import MetaFront from "$lib/components/utilities/MetaFront.svelte";

  const text1 = 'le digital<br />est en constante'
  const text2 = 'évolution.'
  const text3 = 'Suivre les dernières tendances vous prend trop temps ? Vous ne savez plus comment vous y prendre ? Beavers est là pour vous accompagner. '
  const text4 = 'Obtenez un plan média incluant une stratégie complète basée sur une analyse de votre entreprise selon vos besoins. Nous sélectionnons et activons les leviers digitaux les plus pertinents pour répondre à vos objectifs : de notoriété, de trafic, ou de conversion.'

  const meta = {
    title: "Tous les Cas agence de l'agence digitale Beavers",
    description: "Voici une présentation de tous les case studies de l'agence digitale Beavers, spécialisée en création de sites internet et marketing digital."
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
    <Influence />
  </div>
</div>