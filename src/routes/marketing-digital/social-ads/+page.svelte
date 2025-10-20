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
  const intro = "Les Social Ads sont devenues un pilier incontournable du marketing digital. Facebook, Instagram, TikTok, LinkedIn, Pinterest ou X offrent chacun des opportunités uniques pour renforcer votre visibilité et générer des résultats concrets.<br />Ce levier permet de toucher des millions d’utilisateurs grâce à des campagnes ciblées, adaptées à chaque audience et à chaque objectif.<br />Activer les bons canaux, au bon moment, c’est construire une stratégie qui renforce votre notoriété, stimule le trafic qualifié et optimise la conversion."
  const words: Array<string> = [
    'Social Ads',
    'Meta Ads',
    'Instagram',
    'Facebook',
    'TikTok',
    'LinkedIn',
    'Pinterest',
    'Publicités sponsorisées',
    'Campagnes digitales',
    'Audience ciblée'
  ];

  const title2 = 'Le B.A.-BA des social ads'

  const meta = {
    title: "Social Ads : activez les bons leviers sur les réseaux sociaux",
    description: "Les Social Ads permettent d’atteindre vos audiences cibles sur Facebook, Instagram, Pinterest, TikTok ou LinkedIn. Créez des campagnes efficaces pour développer notoriété, trafic et conversions."
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
  <End text="Chaque annonceur bénéficie d’une stratégie Social Ads sur mesure, pensée selon ses objectifs : notoriété, trafic ou conversion.<br />Nous activons les leviers les plus performants et les plateformes les plus pertinentes pour renforcer votre présence sur les réseaux sociaux et maximiser vos performances digitales." />
  <UseCases {cases} firstText="Découvrez nos<br />" />
  </div>