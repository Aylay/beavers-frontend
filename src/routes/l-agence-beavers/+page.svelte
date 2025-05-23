<script lang="ts">
  import { page } from '$app/stores';

	import Certifs from "$lib/components/blocks/agence/Certifs.svelte";
  import Experts from "$lib/components/blocks/agence/Experts.svelte";
	import People from "$lib/components/blocks/agence/People.svelte";
  import Header from "$lib/components/blocks/common/Header.svelte";
	import SubHeader from "$lib/components/blocks/common/SubHeader.svelte";
	import MetaFront from "$lib/components/utilities/MetaFront.svelte";
  import LDTag from '$lib/components/utilities/LDTag.svelte'

  const title = "L'agence"
  const subtitle = 'Humaine. À l’écoute.'

  const text1 = 'En quoi<br />sommes-nous'
  const text2 = 'différents ?'
  const text3 = "À l'heure où l'intelligence artificielle se développe, passez par une équipe humaine, qui vous accompagnera personnellement que vous soyez débutant ou expert."
  const text4 = "En tant que spécialistes dans le secteur de l'habitat, de l'ameublement et de la rénovation, nous mettons à votre disposition une expertise pointue pour transformer vos prospects en futurs clients."

  const people = [
    {
      img : '/signature/beavers-marie-claire.png',
      webp : '/signature/beavers-marie-claire.webp',
      name: 'Marie-Claire Blaizot',
      job: 'Co-fondatrice & Directrice Média',
      text: "Marie-Claire vous propose son expertise en stratégie et activation média online, après 10 ans en agence média et chez l’annonceur.<br /><br /><span class='text-electric font-semibold'>Au menu, le matin :</span> un grand bol de plans média,<br /><span class='text-electric font-semibold'>Le midi :</span> salade de pixels d’activation (à consommer sans modération)<br /><span class='text-electric font-semibold'>Le soir :</span> farandole de bilans média (Excel est son ami)"
    },
    {
      img : '/signature/beavers-lucas.png',
      webp : '/signature/beavers-lucas.webp',
      name: 'Lucas Attali',
      job: 'Co-fondateur & Directeur de Production',
      text: "Ses expériences en tant que Développeur Front-End, Product Owner, Chef de Projets et Responsable de Production, lui ont appris à penser un projet dans sa globalité sans en segmenter chaque phase. Aujourd'hui, Lucas aime travailler dans un univers fun mais toujours très bien cadré ; avec lui pas de bannière de cookies, pas de site <span class='text-electric font-semibold'>#RGPDMaster</span> !!!"
    },
    {
      img : '/signature/beavers-orane.png',
      webp : '/signature/beavers-orane.webp',
      name: 'Orane Demandre',
      job: 'Cheffe de projets Média',
      text: "Après avoir travaillé en tant que chargée de marketing et communication et avec une expérience approfondie en relation client, Orane sera très soucieuse de votre satisfaction.<br /><br />Du haut de ses 162 cm, elle sera prête à prendre des échasses pour <span class='text-electric font-semibold'>vous positionner au plus haut</span> !"
    },
    {
      img : '/img/agence/claire.png',
      webp : '/img/agence/claire.webp',
      name: 'Claire Méjean',
      job: 'UX / UI Designer',
      text: "Passionnée d'art et d'informatique depuis toujours, Claire vous accompagne en tant qu'UX / UI Designer dans le cadre du développement de vos projets numériques.<br /><br /><span class='text-electric font-semibold'>Autodidacte, touche à tout</span>, elle met à votre profit son expérience de plus de 11 ans !"
    },
    {
      img : '/img/agence/virginia.png',
      webp : '/img/agence/virginia.webp',
      name: 'Virginia Blanco',
      job: 'Rédactrice web SEO',
      text: "Amoureuse des mots, Virginia crée du contenu unique et pertinent pour propulser votre site internet. En tant que rédactrice web SEO bilingue français-espagnol et correctrice, elle s'adapte à tout projet digital dans les deux langues. Elle vous accompagne dans la mise en place d'une stratégie éditoriale afin d'obtenir le meilleur référencement possible.<br /><br /><span class='text-electric font-semibold'>Sa potion magique :</span> une écriture fluide adaptée au web associée aux techniques SEO !"
    }
  ]

  const meta = {
    title: "Beavers vous montre ses compétences et ses valeurs.",
    description: "Spécialiste du secteur habitat, Beavers pilote vos campagnes digitales, optimise votre SEO et crée des sites performants et bien référencés."
  }

  const siteURL = import.meta.env.VITE_SITE_URL

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "url": siteURL + $page.url.pathname,
    "@id": siteURL + $page.url.pathname + '#aboutpage',
    "name": "L'agence Beavers",
    "description": "L'agence Beavers, spécialiste du marketing digital dans le secteur de l'habitat, vous propose des solutions adaptées pour répondre à vos objectifs : de notoriété, de trafic et d'acquisition.",
    "inLanguage": "fr-FR",
    "creator": {
      "@type": "Organization",
      "@id": siteURL
    },
    "publisher": {
      "@type": "Organization",
      "@id": siteURL
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type":"ListItem",
          "position": 1,
          "name": "Beavers",
          "item": "https://beavers-agency.fr"
        },
        {
          "@type":"ListItem",
          "position": 2,
          "name": "L'agence",
          "item": siteURL + $page.url.pathname
        }
      ]
    },
    "isPartOf": {
      "@type": "WebSite",
      "@id": siteURL + '#website',
    }
  }
</script>

<LDTag {schema} />

<MetaFront {meta} />

<div class="flex flex-col gap-48 lg:gap-96 pb-48 lg:pb-96">
  <Header {title} {subtitle} />
  <SubHeader {text1} {text2} {text3} {text4} />
  <Experts />
  <div class="big-container grid grid-cols-1 lg:grid-cols-2 gap-32">
    {#each people as person}
    <People {person} />
    {/each}
  </div>
  <Certifs />
</div>