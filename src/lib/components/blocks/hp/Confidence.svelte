<script lang="ts">
	import Line from '../utilities/Line.svelte';
	import Title from '../utilities/Title.svelte';
	import ConfidenceLogo from './ConfidenceLogo.svelte';

	const logos = [
		{
			src: '/img/clients/keune.svg',
			newClass: 'w-full h-auto',
			href: '#',
			title: 'Keune Haircosmetics'
		},
		{
			src: '/img/clients/v-zug.svg',
			newClass: 'h-full w-auto',
			href: '#',
			title: 'V-ZUG'
		},
		{
			src: '/img/clients/imagine-2050.svg',
			newClass: 'h-full w-auto',
			href: '#',
			title: 'Imagine 2050'
		},
		{
			src: '/img/clients/we-van.png',
			newClass: 'w-full h-auto',
			href: '#',
			title: 'We Van'
		},
		{
			src: '/img/clients/ki.svg',
			newClass: 'w-full h-auto',
			href: '#',
			title: 'Ki Lyon'
		},
		{
			src: '/img/clients/cafes-richard.svg',
			newClass: 'w-full h-auto',
			href: '#',
			title: 'Cafés Richard'
		}
	];
</script>

<div class="big-container">
	<Line />
	<Title first="Ils nous font" second="confiance" />
	<div class="mt-5 w-full lg:max-w-[calc(50%-75px)]">
		<p class="text-6">
			Ces clients nous accordent une pleine confiance quant à la réalisation de leurs objectifs. Que
			ce soit pour de la production digitale ou du marketing digital, nous répondons toujours
			présents à tous ces clients.
		</p>
	</div>
	<div class="mt-24 flex max-lg:flex-wrap items-center justify-between gap-20">
		{#each logos as logo, i}
			<ConfidenceLogo src={logo.src} alt={logo.alt} newClass={logo.newClass} {i} href={logo.href} title={logo.title} />
		{/each}
	</div>
</div>
