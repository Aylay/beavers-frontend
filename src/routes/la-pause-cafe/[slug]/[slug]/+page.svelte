<script>
	import Header from "$lib/components/blocks/articles/Header.svelte";
	import Newsletter from '$lib/components/blocks/layout/Newsletter.svelte';
	import Articles from '$lib/components/blocks/Articles.svelte';
	import Share from "$lib/components/blocks/articles/Share.svelte";

	const titleFirst = 'Nos autres articles de la catégorie'
	const titleSecond = 'média'
	const newsUrl = '/la-pause-cafe/media'
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
	const author = {
		img: {
			alt: 'lol',
			src: '/img/lou.png'
		},
		name: 'Lou Rédac',
		job: 'Rédactrice Web SEO',
		text: 'Créatrice de contenu web, correctrice littéraire, autrice de poésie bilingue.'
	}
</script>

<div class="flex flex-col gap-32 lg:gap-40 pb-32 lg:pb-40">
<Header />
<Share {author} />
<Newsletter isArticle={true} />
<Articles {articles} titleFirst={titleFirst} titleSecond={titleSecond} newsUrl={newsUrl} />
</div>
