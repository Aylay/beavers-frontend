<script lang="ts">
	import Line from './utilities/Line.svelte';
	import Title from './utilities/Title.svelte';
	import ConfidenceLogo from './ConfidenceLogo.svelte';

	const logos = [
		{
			src: '/img/Imagine.png',
			alt: 'image'
		},
		{
			src: '/img/Imagine.png',
			alt: 'image'
		},
		{
			src: '/img/Imagine.png',
			alt: 'image'
		},
		{
			src: '/img/Imagine.png',
			alt: 'image'
		},
		{
			src: '/img/Imagine.png',
			alt: 'image'
		},
		{
			src: '/img/Imagine.png',
			alt: 'image'
		}
	];
</script>

<div class="big-container">
	<Line />
	<Title first="Ils nous font" second="confiance" />
	<div class="mt-5 w-full max-w-[calc(50%-75px)]">
		<p class="text-6">
			Ces clients nous accordent une pleine confiance quant à la réalisation de leurs objectifs. Que
			ce soit pour de la production digitale ou du marketing digital, nous répondons toujours
			présents à tous ces clients.
		</p>
	</div>
	<div class="mt-24 flex items-center justify-between">
		{#each logos as logo, i}
			<ConfidenceLogo src={logo.src} alt={logo.alt} {i} />
		{/each}
	</div>
</div>
