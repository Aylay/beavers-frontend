<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Title from '$lib/components/blocks/utilities/Title.svelte';
	import Line from '$lib/components/blocks/utilities/Line.svelte';
	import Cta from '$lib/components/blocks/utilities/CTA.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div
	class="big-container flex gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="lg:flex-1">
		<Line />
		<Title first="Quels sont les différents placements social ads&nbsp;?" />
		<h3
			class="mt-2 font-highlight text-4 text-bright lg:animate-delay-200 {isInView
				? 'lg:animate-fade-right'
				: 'lg:opacity-0'}"
		>
			Où apparaissent les publicités&nbsp;?
		</h3>
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Les plateformes sociales offrent une grande variété de <strong>placements publicitaires</strong>, à choisir selon vos <strong>objectifs</strong> et le <strong>comportement de vos audiences</strong>.
			</p>
			<p class="text-6">
				La plupart des outils — Meta Ads, TikTok Ads, LinkedIn Campaign Manager ou Pinterest Ads — proposent un mode de diffusion automatique.<br />
				L’algorithme teste alors différents emplacements et privilégie ceux qui <strong>génèrent les meilleurs résultats</strong> selon votre objectif : visibilité, engagement ou conversion.
			</p>
			<p class="text-6">
				Chez Beavers, nous combinons l’analyse des données et l’expérience terrain pour recommander les placements les plus pertinents&nbsp;:
			</p>
			<ul class="flex flex-col gap-4">
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					le <strong>fil d’actualité (newsfeed)</strong>, idéal pour la performance et la conversion ;
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					les <strong>stories et reels</strong>, formats immersifs parfaits pour le <strong>branding</strong> et la mémorisation ;
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					les <strong>colonnes latérales</strong> ou <strong>placements contextuels</strong> (Discover, Marketplace, etc.), utiles pour la répétition et la visibilité complémentaire.
				</li>
			</ul>
			<p class="text-6">
				Chaque plateforme possède ses spécificités : <strong>Instagram favorise le visuel</strong>, <strong>TikTok l’instantanéité</strong>, <strong>LinkedIn la précision B2B</strong>.<br />
				Notre rôle est d’<strong>ajuster la diffusion</strong> pour tirer le meilleur parti de chaque environnement tout en optimisant votre budget média.
			</p>
		</div>
		<div class="mt-20 animate-delay-[1500ms] {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
	<div class="lg:flex-1">
		<Line />
		<Title first="La création" />
		<h3
			class="mt-2 font-highlight text-4 text-bright lg:animate-delay-200 {isInView
				? 'lg:animate-fade-right'
				: 'lg:opacity-0'}"
		>
			Facteur du succès pour une bonne stratégie social ads performante
		</h3>
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Dans un environnement saturé de contenus, la <strong>création publicitaire</strong> est devenue un levier central de performance. Les réseaux sociaux sont des espaces ultra-compétitifs où seules les campagnes les plus percutantes parviennent à capter l’attention.
			</p>
			<p class="text-6">
				Autrefois perçue comme secondaire, la <strong>qualité visuelle</strong> est aujourd’hui décisive. Trop d’annonceurs négligent encore cette étape et investissent peu dans leurs assets créatifs, alors qu’ils influencent directement le taux de clics, le <strong>coût par conversion</strong> et la <strong>mémorisation de marque</strong>.
			</p>
			<p class="text-6">
				Une bonne stratégie Social Ads repose sur la <strong>variété</strong> et l’<strong>expérimentation</strong>. L’<strong>A/B testing</strong> permet de comparer plusieurs visuels, vidéos ou accroches afin d’identifier les combinaisons les plus performantes. Le contenu qui plaît le plus n’est pas toujours celui qui convertit le mieux.
			</p>
			<p class="text-6">
				La <strong>vidéo</strong>, longtemps considérée comme un simple levier de notoriété, s’impose désormais comme un outil de conversion directe. Les formats <strong>UGC</strong>, les <strong>mises en scène produits</strong> ou les <strong>reels dynamiques</strong> créent une expérience plus authentique et impactante, capable d’engager et de déclencher l’action.
			</p>
			<p class="text-6">
				Chez Beavers, nous plaçons la création au cœur de chaque stratégie Social Ads : chaque visuel, chaque message et chaque test a pour objectif d’optimiser les performances tout en valorisant la marque.
			</p>
		</div>
		<div class="mt-20 animate-delay-[1500ms] {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
</div>
