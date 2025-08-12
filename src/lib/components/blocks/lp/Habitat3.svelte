<script lang="ts">
	import ConfidenceLogo from '../hp/ConfidenceLogo.svelte';
	import Line from '../utilities/Line.svelte';
	import Title from '../utilities/Title.svelte';

	const logos = [
		{
			src: '/img/lp/elle-decoration.svg',
			newClass: 'w-full h-auto',
			href: 'https://www.elle.fr/Deco',
			title: 'Elle Déco'
		},
		{
			src: '/img/lp/journal-maison.svg',
			newClass: 'w-full h-auto',
			href: 'https://www.lejournaldelamaison.fr/',
			title: 'Le Journal de la Maison'
		},
		{
			src: '/img/lp/ad-magazine.svg',
			newClass: 'w-full h-auto',
			href: 'https://www.admagazine.fr/',
			title: 'AD Magazine'
		},
		{
			src: '/img/lp/maison-travaux.svg',
			newClass: 'h-auto w-full',
			href: 'https://www.maison-travaux.fr/',
			title: 'Maison et Travaux'
		},
		{
			src: '/img/lp/rustica.svg',
			newClass: 'w-full h-auto',
			href: 'https://www.rustica.fr/',
			title: 'Rustica'
		},
		{
			src: '/img/lp/deco.svg',
			newClass: 'w-full h-auto',
			href: 'https://www.deco.fr/',
			title: 'Déco.fr'
		}
	];

	function scrollToForm() {
		const lpHabitat = document.getElementById('lp-habitat');

		if (lpHabitat) {
			window.scrollTo({
				top: getOffsetTop(lpHabitat),
				behavior: 'smooth'
			});
		}
	}

	function getOffsetTop(element: any): number {
		if (!element) return 0;
		return getOffsetTop(element.offsetParent) + element.offsetTop;
	}
</script>

<div class="big-container">
	<div class="flex items-center gap-16 max-lg:flex-col lg:gap-40">
		<div class="flex-1">
			<Line />
			<Title first="Interlocuteur privilégié auprès des partenaires média spécialisés" />
			<h3 class="mt-2 font-highlight text-4 text-bright-turquoise">
				Elle Déco / Rustica / AD Magazine / Travaux.com
			</h3>
		</div>
		<div class="flex-1">
			<p class="text-6">
				Pas si facile de rentrer en contact avec des médias spécialisés. Depuis 10 ans, nous avons
				tissé des liens avec les différentes régies qui commercialisent les espaces publicitaires.
				Nous avons les contacts pour vous aider à être visible sur des éditeurs de qualité dans
				votre domaine d’activité (AD Magazine, Le Figaro, Déco.fr, Rustica, Maison & Travaux, GQ,
				ELLE Déco, Journal de la maison, etc.) afin de booster votre notoriété et votre
				référencement.
			</p>
			<button
				class="mt-12 rounded-[3rem] border-2 border-bright bg-transparent px-10 py-4 text-6 font-bold text-white transition-colors duration-300 hover:bg-bright hover:text-black"
				on:click={() => scrollToForm()}
			>
				Demande de devis
			</button>
		</div>
	</div>
	<div class="mt-24 flex items-center justify-center gap-20 max-lg:flex-wrap lg:justify-between">
		{#each logos as logo, i}
			<ConfidenceLogo
				src={logo.src}
				newClass={logo.newClass}
				{i}
				href={logo.href}
				title={logo.title}
				blank={true}
			/>
		{/each}
	</div>
</div>
