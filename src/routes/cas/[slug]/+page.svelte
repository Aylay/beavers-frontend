<script lang="ts">
	import Header from "$lib/components/blocks/cas/Header.svelte";
	import Intro from "$lib/components/blocks/cas/Intro.svelte";
	import Prez from "$lib/components/blocks/cas/Prez.svelte";
	import ImgFull from '$lib/components/blocks/cas/ImgFull.svelte';
	import ContextNeeds from "$lib/components/blocks/cas/ContextNeeds.svelte";
	import Goals from "$lib/components/blocks/cas/Goals.svelte";
	import Actions from "$lib/components/blocks/cas/Actions.svelte";
	import OtherUseCases from "$lib/components/blocks/cas/OtherUseCases.svelte";
	import UseCases from "$lib/components/blocks/UseCases.svelte";
	import Results from "$lib/components/blocks/cas/Results.svelte";

  const intro = "Collaboration entre l'agence Beavers & le domaine viticole Terre Rouge pour le développement de leur site internet en WordPress."
  const logo = {
    src: '/img/Imagine.png',
    alt: 'image'
  }
  const duration = '3 mois'
  const gear = 'WordPress'
  const website = 'https://google.fr'
  const brand = {
    name: 'Terre Rouge',
    description: 'Terre Rouge Vignes et Vins est un jeune domaine créé en 2015, par un couple de passionnés : Mathilde et Julien. Il est situé dans le Sud du Beaujolais, à Anse (69). Le projet de Terre Rouge est de mettre en avant ses Terroirs à travers des vins artisanaux, singuliers et naturels.'
  }
  const mainImg = {
    src: '/img/lise.jpg',
    alt: 'coucou'
  }
  const context = 'Donec ornare tellus consectetur, vulputate orci a, lacinia mi. Vivamus bibendum mi ut ipsum malesuada laoreet at at dui. Duis gravida neque sit amet rutrum accumsan. Nullam ullamcorper tortor vel odio accumsan ornare. Donec congue, justo interdum ornare lobortis, ipsum enim fermentum risus, et imperdiet sapien.'
  const needs = 'Donec ornare tellus consectetur, vulputate orci a, lacinia mi. Vivamus bibendum mi ut ipsum malesuada laoreet at at dui. Duis gravida neque sit amet rutrum accumsan. Nullam ullamcorper tortor vel odio accumsan ornare. Donec congue, justo interdum ornare lobortis, ipsum enim fermentum risus, et imperdiet sapien.'
  const goals = [
    'Lorem ipsum dolor sit amet adipiscing consectetur ?',
    'Lorem ipsum dolor sit amet adipiscing consectetur ?',
    'Lorem ipsum dolor sit amet adipiscing consectetur ?',
  ]
  const goalsImg = {
    src: '/img/lise.jpg',
    alt: 'coucou'
  }
  const actions = 'Donec ornare tellus consectetur, vulputate orci a, lacinia mi. Vivamus bibendum mi ut ipsum malesuada laoreet at at dui. Duis gravida neque sit amet rutrum accumsan. Nullam ullamcorper tortor vel odio accumsan ornare. Donec congue, justo interdum ornare lobortis, ipsum enim fermentum risus, et imperdiet sapien.'
  const actionsImg = {
    src: '/img/lise.jpg',
    alt: 'coucou'
  }
  const otherUseCases = [
    {
      title: 'Optimisation SEO de Keune Haircosmetics France',
      slug: 'coucou'
    }
  ]

const cases = [
  {
    img1: {
      src: '/img/lise.jpg',
      alt: 'image'
    },
    img2: {
      src: '/img/active.jpg',
      alt: 'image'
    },
    client: 'Lise-Laure Blaizot',
    slug: '#',
    title: 'Design et développement sur-mesure du site de l’osthéopathe D.O Lise-Laure Blaizot.',
    tags: ['Développement web', 'Marketing Digital', 'SEO'],
    website: '#',
    key1: '+20%',
    key2: 'd’utilisateurs'
  },
  {
    img1: {
      src: '/img/eflow.jpg',
      alt: 'image'
    },
    img2: {
      src: '/img/active.jpg',
      alt: 'image'
    },
    client: 'Eflow',
    slug: '#',
    title: 'Développement sur-mesure, entièrement administrable, du site Loopz avec Wordpress.',
    tags: ['Développement web'],
    website: 'https://beavers-agency.fr'
  },
  {
    img1: {
      src: '/img/lise.jpg',
      alt: 'image'
    },
    img2: {
      src: '/img/active.jpg',
      alt: 'image'
    },
    client: 'Arizona Hot Dogs',
    slug: '#',
    title: 'Gestion et recommandations SEO de la boutique en ligne Arzona.',
    tags: ['SEO'],
    key1: '+20%',
    key2: 'd’utilisateurs'
  }
];
const resultText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.'
const results = [
  {
    number: '84',
    text: 'Lorem ipsum dolor sit amet.'
  },
  {
    number: '35%',
    text: 'Lorem ipsum dolor sit amet.'
  },
  {
    number: '+ 10%',
    text: 'Lorem ipsum dolor sit amet.'
  },
  {
    number: '1048',
    text: 'Lorem ipsum dolor sit amet.'
  }
]
</script>

<div class="flex flex-col gap-32 lg:gap-40 pb-32 lg:pb-40">
  <Header />
  <Intro intro={intro} />
  <Prez logo={logo} duration={duration} gear={gear} website={website} brand={brand} />
  <ImgFull mainImg={mainImg} />
  <ContextNeeds context={context} needs={needs} />
  <Goals goals={goals} goalsImg={goalsImg} />
  <Actions actions={actions} actionsImg={actionsImg} />
  {#if otherUseCases.length > 0}
  <OtherUseCases useCases={otherUseCases} />
  {/if}
  <Results resultText={resultText} results={results} website={website} brand={brand} />
  <UseCases {cases} firstText="Découvrez d’autres<br />" />
</div>
