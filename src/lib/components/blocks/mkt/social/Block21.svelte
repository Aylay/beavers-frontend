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
				Vous aurez la possibilité de sélectionner des placements différents en fonction de vos <strong
					>objectifs</strong
				> et des plateformes.
			</p>
			<p class="text-6">
				En général, les plateformes vous incitent à tester tous les placements et à laisser
				l'algorithme faire son travail en favorisant la diffusion sur le placement qui génère les
				meilleurs résultats en fonction de vos objectifs.
			</p>
			<p class="text-6">
				En fonction de votre objectif, nos experts social ads peuvent recommander de plus ou moins
				pousser la diffusion sur le placement en newsfeed qui est le plus commun mais également de
				plus en plus dans les stories ou les reels (principalement sur Facebook ads et Instagram
				ads, très interessant pour du branding) en colonne de droite, ou dans les sections discover
				ou marketplace.
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
			Facteur du succès pour une bonne stratégie social ads
		</h3>
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				La création est devenue très importante pour se démarquer dans un univers compétitifs très
				fort et sur des réseaux à forte pression publicitaire.
			</p>
			<p class="text-6">
				Alors qu'il y a quelques années de ça, <a
					href="/la-pause-cafe/media/importance-contenu-visuel-secteur-habitat-statregies-communication-digitale-optimale"
					title="L'importance du contenu visuel dans le secteur de l’habitat : Stratégies pour une communication digitale optimale"
					class="font-bold text-electric underline transition-colors hover:text-bright"
					>l'attractivité du visuel</a
				> et/ou de la vidéo n'était pas forcément le point essentiel d'une bonne stratégie social ads,
				aujourd'hui c'est un élément à ne pas négliger. C'est parfois l'un des éléments qui est un peu
				pris à la légère par les annonceurs, qui par souci d'économies, investissent peu dans leur création
				publicitaire.
			</p>
			<p class="text-6">
				Dans toute bonne stratégie publicitaire sur les social ads, l'<strong>AB testing</strong> est
				nécessaire. On entend par AB test, le test de plusieurs visuels ou de plusieurs vidéos, avec
				différents axes ou différentes accroches. Le média qui nous plait le plus n'est pas forcément
				celui qui va avoir les meilleures performances.
			</p>
			<p class="text-6">
				La vidéo émerge de plus en plus. Alors qu'elle n'était considérée que comme un levier de
				notoriété, elle peut permettre aujourd'hui de générer directement des conversions en ligne
				(veillez à une bonne expérience utilisateur avec des visuels attractifs, par exemple des <a
					href="/la-pause-cafe/media/bonnes-pratiques-ugc-decoller-entreprise"
					title="Les bonnes pratiques de l’UGC pour faire décoller votre entreprise"
					class="font-bold text-electric underline transition-colors hover:text-bright"
					>publicités type UGC</a
				> ou des mises en scène de l'utilisation du produit).
			</p>
		</div>
		<div class="mt-20 animate-delay-[1500ms] {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
</div>
