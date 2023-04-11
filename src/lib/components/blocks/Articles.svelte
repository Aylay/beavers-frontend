<script lang="ts">

	import Line from './utilities/Line.svelte';
	import Title from './utilities/Title.svelte';
	import Cta from './utilities/CTA.svelte';
	import Article from './Article.svelte';

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
</script>

<div class="big-container">
	<Line />
	<div class="flex max-lg:flex-col max-lg:gap-8 lg:items-end lg:justify-between">
		<div class="flex-1">
			<Title first="Les 3 derniers articles<br />de la" second="pause café" />
		</div>
		<Cta label="Tout voir" href="/cas-agence" type="transparent" />
	</div>
	<div class="mt-16 grid grid-cols-3 gap-14">
		{#each articles as article, i}
			<Article {article} {i} />
		{/each}
	</div>
</div>
