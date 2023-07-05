<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

  import Header from "$lib/components/blocks/cas-agence/Header.svelte";
	import UseCase from '$lib/components/blocks/common/UseCase.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
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

<div class="flex flex-col">
  <Header />
	<div
		use:inview={options}
		on:inview_change={handleChange}
		class="big-container py-32 lg:py-64 grid max-lg:grid-cols-1 grid-cols-6 overflow-hidden transition-all delay-500 duration-700 {isInView
			? 'gap-14'
			: 'gap-0'}"
	>
		{#each cases as useCase, i}
			<UseCase {useCase} {i} />
		{/each}
	</div>
</div>