<script lang="ts">
  import { page } from '$app/stores';

	import Block01 from "$lib/components/blocks/mkt/google/Block01.svelte";
	import Block02 from '$lib/components/blocks/mkt/google/Block02.svelte';
	import Block11 from "$lib/components/blocks/mkt/google/Block11.svelte";
	import Block12 from '$lib/components/blocks/mkt/google/Block12.svelte';
	import Block21 from "$lib/components/blocks/mkt/google/Block21.svelte";
	import Block31 from "$lib/components/blocks/mkt/google/Block31.svelte";
	import Block32 from '$lib/components/blocks/mkt/google/Block32.svelte';
  import Header2 from "$lib/components/blocks/mkt/Header2.svelte";
	import Pictos from "$lib/components/blocks/mkt/google/Pictos.svelte";
	import MetaFront from "$lib/components/utilities/MetaFront.svelte";
	import UseCases from "$lib/components/blocks/UseCases.svelte";
	import End from '$lib/components/blocks/mkt/google/End.svelte';

  const title = 'Google Ads'
  const subtitle = 'Visibilité. Trafic. Conversions.'
  const intro = "La publicité Google Ads est un pilier central de toute stratégie de marketing digital performante.<br />Grâce à son écosystème complet — Search, Display, YouTube, Discovery et Performance Max — elle permet de capter l’attention de vos audiences au bon moment et sur les bons supports.<br /><br />Chez Beavers, nous concevons des campagnes SEA pensées pour la performance : générer un trafic qualifié, booster votre visibilité en ligne et transformer vos visiteurs en clients.<br />Pilotées par la data, nos stratégies maximisent votre retour sur investissement tout en renforçant la notoriété et la compétitivité de votre marque."
  const words: Array<string> = [
    'Google Ads',
    'SEA',
    'Réseau de recherche',
    'Display',
    'YouTube Ads',
    'Performance Max',
    'Remarketing',
    'Annonces Shopping',
    'Stratégie d’enchères',
    'Trafic qualifié'
  ];

  const title2 = 'Les fondamentaux de Google Ads'

  const meta = {
    title: "Campagnes Google Ads sur mesure – Stratégie SEA et performance digitale",
    description: "Créez des campagnes Google Ads performantes avec Beavers. De la stratégie d’enchères à la création publicitaire, nous optimisons chaque levier SEA pour générer trafic, conversions et rentabilité."
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
  <Pictos title={title2} />
  <Block01 />
  <Block02 />
  <Block11 />
  <Block12 />
  <Block21 />
  <Block31 />
  <Block32 />
  <End text="Chez Beavers, chaque stratégie Google Ads est conçue sur mesure pour répondre à vos objectifs : générer de nouveaux clients, renforcer votre notoriété ou développer vos ventes.<br />En combinant analyse, créativité et pilotage data-driven, nous activons les leviers les plus performants pour atteindre vos audiences et maximiser durablement vos résultats." />
  <UseCases {cases} firstText="Découvrez nos<br />" />
  </div>