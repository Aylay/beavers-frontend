<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Line from './utilities/Line.svelte';
	import Title from './utilities/Title.svelte';
	import Cta from './utilities/CTA.svelte';
	import UseCase from './common/UseCase.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-200px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

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

<div class="big-container">
	<Line />
	<div class="flex max-lg:flex-col max-lg:gap-8 lg:items-end lg:justify-between">
		<div class="flex-1">
			<Title first="Nos dernières<br />" second="études de cas" />
		</div>
		<Cta label="Tout voir" href="/cas-agence" type="transparent" />
	</div>
	<div
		use:inview={options}
		on:inview_change={handleChange}
		class="mt-16 grid grid-cols-3 overflow-hidden transition-all delay-500 duration-700 {isInView
			? 'gap-14'
			: 'gap-0'}"
	>
		{#each cases as useCase}
			<UseCase {useCase} />
		{/each}
	</div>
</div>
