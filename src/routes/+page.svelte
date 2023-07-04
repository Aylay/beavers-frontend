<script lang="ts">
	import Articles from '$lib/components/blocks/Articles.svelte';
	import Confidence from '$lib/components/blocks/hp/Confidence.svelte';
	import Manifesto from '$lib/components/blocks/hp/Manifesto1.svelte';
	import Manifesto2 from '$lib/components/blocks/hp/Manifesto2.svelte';
	import MarketingDigital from '$lib/components/blocks/hp/MarketingDigital.svelte';
	import ProductionDigitale from '$lib/components/blocks/hp/ProductionDigitale.svelte';
	import Why from '$lib/components/blocks/hp/Why.svelte';
	import Header from '$lib/components/blocks/hp/Header.svelte';
	import Support from '$lib/components/blocks/hp/Support.svelte';
	import UseCases from '$lib/components/blocks/UseCases.svelte';
	import Testimonies from '$lib/components/blocks/hp/Testimonies.svelte';

	const titleFirst = 'Les 3 derniers articles<br />de la'
	const titleSecond = 'pause café'
	const newsUrl = '/la-pause-cafe'
	const articles = [
		{
			img: {
				src: '/img/lise.jpg',
				alt: 'image'
			},
			tag: 'Marketing Digital',
			slug: '#',
			title: 'Tout savoir sur le short YouTube : un allié pour votre marketing digital',
			date: '10 avril 2023',
			description:
				'Les Shorts YouTube ont fait leur apparition en 2021 pour concurrencer TikTok. Depuis, la plateforme récompense ses créateurs ayant un grand nombre de vues dans le cadre de son programme de monétisation. Comment intégrer Shorts YouTube dans sa stratégie digitale ?'
		},
		{
			img: {
				src: '/img/lise.jpg',
				alt: 'image'
			},
			tag: 'Site internet',
			slug: '#',
			title: 'Tout savoir sur le Green UX | Faire un site écolo, c’est possible !',
			date: '20 mars 2023',
			description:
				'Limiter l’impact environnemental en créant un site web écolo, c’est réalisable. Le Green UX permet de mettre en place des techniques visant à épurer tant que possible un site Internet. Simplicité et bon référencement peuvent faire bon ménage.'
		},
		{
			img: {
				src: '/img/lise.jpg',
				alt: 'image'
			},
			tag: 'Marketing Digital',
			slug: '#',
			title:
				'Retour sur le WAICF, l’évènement mondial à ne pas rater sur l’intelligence artificielle',
			date: '09 mars 2023',
			description:
				"Huawei, IBM, la gendarmerie nationale mais encore des centaines de start-up se sont données rendez-vous au WAICF pour présenter leurs utilisations de l’IA et ses perspectives. Des exposants plus intrigants les uns que les autres, notre journée passée sur l'événement n’aura pas été assez longue pour tous les rencontrer. Nous viendrons plus préparées l’année prochaine."
		}
	];

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
</script>

<div class="flex flex-col gap-48 lg:gap-96 max-lg:px-4 pb-48 lg:pb-96">
	<Header />
	<ProductionDigitale />
	<MarketingDigital />
	<Why />
	<UseCases {cases} />
	<Confidence />
	<Manifesto />
	<Manifesto2 />
	<Testimonies />
	<Support />
	<Articles {articles} titleFirst={titleFirst} titleSecond={titleSecond} newsUrl={newsUrl} />
</div>
