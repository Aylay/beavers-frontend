<script lang="ts">
	import Line from '../utilities/Line.svelte';
	import Title from '../utilities/Title.svelte';
	import ConfidenceLogo from './ConfidenceLogo.svelte';

	const logos = [
		{
			src: '/img/clients/ffrandonnee.svg',
			newClass: 'h-full w-auto',
			href: '/cas/campagnes-social-media-sea-site-e-commerce-application-mobile-ffrandonnee',
			title: 'Fédération Française de la Randonnée Pédestre'
		},
		{
			src: '/img/clients/v-zug.svg',
			newClass: 'h-full w-auto',
			href: '/cas/creation-gestion-publications-reseaux-sociaux-v-zug',
			title: 'V-ZUG'
		},
		{
			src: '/img/clients/adn-clim.svg',
			newClass: 'w-full h-auto',
			href: '/cas/adn-clim-ameliore-visibilite-creation-site-web',
			title: 'ADN Clim'
		},
		{
			src: '/img/clients/cafes-richard.svg',
			newClass: 'w-full h-auto',
			href: '/cas/sea-social-media-landing-page-cafes-richard',
			title: 'Cafés Richard'
		},
		{
			src: '/img/clients/keune.svg',
			newClass: 'w-full h-auto',
			href: '/cas/gestion-strategie-sea-keune-haircosmetics',
			title: 'Keune Haircosmetics'
		},
		{
			src: '/img/clients/moncarro.svg',
			newClass: 'w-full h-auto',
			href: '/cas/audit-recommandations-strategie-sea-moncarro',
			title: 'Moncarro'
		}
	];
</script>

<div class="big-container">
	<Line />
	<Title first="Ils nous font" second="confiance" />
	<div class="mt-5 w-full lg:max-w-[calc(50%-75px)]">
		<p class="text-6">
			Ces clients font appel à Beavers pour mettre en place une stratégie de communication digitale efficace.
		</p>
	</div>
	<div class="mt-24 flex max-lg:flex-wrap items-center justify-center lg:justify-between gap-20">
		{#each logos as logo, i}
			<ConfidenceLogo src={logo.src} newClass={logo.newClass} {i} href={logo.href} title={logo.title} />
		{/each}
	</div>
</div>
