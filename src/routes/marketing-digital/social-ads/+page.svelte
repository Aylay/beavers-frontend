<script lang="ts">
  import { page } from '$app/stores';

	import Block01 from "$lib/components/blocks/mkt/social/Block01.svelte";
	import Block02 from '$lib/components/blocks/mkt/social/Block02.svelte';
	import Block11 from "$lib/components/blocks/mkt/social/Block11.svelte";
	import Block12 from '$lib/components/blocks/mkt/social/Block12.svelte';
	import Block21 from "$lib/components/blocks/mkt/social/Block21.svelte";
	import Block31 from "$lib/components/blocks/mkt/social/Block31.svelte";
	import Block32 from '$lib/components/blocks/mkt/social/Block32.svelte';
  import Header2 from "$lib/components/blocks/mkt/Header2.svelte";
	import Pictos from "$lib/components/blocks/mkt/social/Pictos.svelte";
	import MetaFront from "$lib/components/utilities/MetaFront.svelte";
	import UseCases from "$lib/components/blocks/UseCases.svelte";
	import End from '$lib/components/blocks/mkt/social/End.svelte';

  const title = 'Social Ads'
  const subtitle = 'Visibilité. Trafic. Conversions.'
  const intro = "L'activation des social ads est devenue incontournable dans une stratégie marketing digitale. Facebook, Instagram, Pinterest, TikTok, etc. sont des leviers d'acquisiton web qui permettent de toucher différentes audiences avec différentes stratégies digitales.<br />C'est un levier webmarketing important qui permet de toucher des millions d'utilisateurs.<br />Créer une campagne sur un ou différents réseaux vous permet d'être présent à l'esprit de vos prospects, de travailler votre e-notoriété et de générer du trafic qualifié vers votre site."
  const words: Array<string> = [
    'Social Ads', 'Instagram', 'LinkedIn', 'Pinterest', 'Social media', 'Webmarketing', 'Meta Ads', 'Publicités sponsorisées', 'Twitter', 'Facebook'
  ]

  const title2 = 'Le B.A.-BA des social ads'

  const meta = {
    title: "Beavers met en place votre stratégie social ads",
    description: "Boostez votre visibilité sur les réseaux sociaux avec des campagnes publicitaires stratégiques : Meta, Pinterest, TikTok et LinkedIn."
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
  <End text="Pour chaque annonceur nous mettons en place des stratégies personnalisées en fonction des objectifs d'acquisition de trafic, de notoriété ou de vente.<br />Nous activons les social ads et les leviers les plus pertinents pour votre stratégie marketing sur les réseaux sociaux." />
  <UseCases {cases} firstText="Découvrez nos<br />" />
  </div>