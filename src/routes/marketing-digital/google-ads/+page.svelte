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
  const intro = "La publicité Google Ads est un pilier incontournable dans toute stratégie de marketing digital.<br />Que ce soit via le réseau de recherche, le display ou YouTube, elle offre des solutions puissantes pour atteindre vos objectifs.<br />Ce levier webmarketing vous permet de toucher une audience ciblée, d'accroître votre visibilité en ligne et de générer un trafic qualifié vers votre site internet.<br />Grâce à des campagnes bien pensées, Google Ads renforce votre notoriété et vous positionne efficacement face à vos concurrents, tout en optimisant votre retour sur investissement."
  const words: Array<string> = [
    'Social Ads', 'Instagram', 'LinkedIn', 'Pinterest', 'Social media', 'Webmarketing', 'Meta Ads', 'Publicités sponsorisées', 'Twitter', 'Facebook'
  ]

  const title2 = 'Les fondamentaux de Google Ads'

  const meta = {
    title: "Boostez votre stratégie digitale avec Google Ads",
    description: "Augmentez votre visibilité et vos conversions avec nos campagnes Google Ads optimisées : stratégie, gestion, reporting et résultats."
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
  <End text="Pour chaque annonceur, nous créons des stratégies sur mesure alignées sur leurs objectifs d’acquisition, de notoriété ou de ventes. Avec Google Ads, nous activons les leviers les plus adaptés pour atteindre vos cibles et maximiser vos performances en ligne." />
  <UseCases {cases} firstText="Découvrez nos<br />" />
  </div>