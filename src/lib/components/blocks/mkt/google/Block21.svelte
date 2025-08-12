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
		<Title first="Quels sont les différents types de campagnes Google Ads&nbsp;?" />
		<h3
			class="mt-2 font-highlight text-4 text-bright lg:animate-delay-200 {isInView
				? 'lg:animate-fade-right'
				: 'lg:opacity-0'}"
		>
			Où apparaissent les publicités sur Google Ads&nbsp;?
		</h3>
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Google Ads vous permet de choisir où vos annonces seront diffusées selon vos objectifs
				marketing. En fonction des données collectées, l’algorithme Google ajuste la diffusion pour
				maximiser vos performances.
			</p>
			<p class="text-6">
				Nos experts Google Ads peuvent vous conseiller sur les emplacements les plus efficaces pour
				atteindre vos objectifs :
			</p>
			<ul class="flex flex-col gap-4 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Réseau de recherche</strong> : Utile pour capter des prospects avec une intention d’achat
					forte.
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Display et YouTube</strong> : Idéal pour du branding ou pour toucher des audiences
					en phase de découverte.
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Shopping</strong> : Essentiel pour les e-commerçants cherchant à booster leurs ventes
					en ligne.
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					Laissez l’<strong>intelligence artificielle de Google</strong> optimiser vos campagnes tout
					en bénéficiant de notre expertise pour ajuster manuellement les stratégies selon les besoins.
				</li>
			</ul>
		</div>
		<div class="mt-20 animate-delay-[1500ms] {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
	<div class="lg:flex-1">
		<Line />
		<Title first="La création publicitaire dans Google&nbsp;Ads" />
		<h3
			class="mt-2 font-highlight text-4 text-bright lg:animate-delay-200 {isInView
				? 'lg:animate-fade-right'
				: 'lg:opacity-0'}"
		>
			Facteurs de succès pour une stratégie Google Ads performante
		</h3>
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">Pour réussir sur Google Ads, plusieurs éléments doivent être maîtrisés :</p>
			<ul class="flex flex-col gap-4 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Le ciblage d’audience précis</strong> : Identifier les segments qui offrent le meilleur
					potentiel de conversion.
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Des mots clés bien choisis</strong> : Combiner des mots clés génériques et de longue
					traîne pour équilibrer trafic et coût.
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Un budget optimisé</strong> : Allouer vos ressources selon les campagnes les plus performantes.
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Des landing pages adaptées</strong> : Pages conçues pour convertir vos visiteurs en
					clients.
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Un suivi rigoureux des performances</strong> : Analyse des KPI comme le CPC, le taux
					de clics et les conversions pour ajuster vos campagnes.
				</li>
			</ul>
			<p class="text-6">
				Avec un univers digital toujours plus compétitif, la qualité de vos créations publicitaires
				est devenue essentielle pour vous démarquer.
			</p>
			<p class="text-6">
				Alors qu’il suffisait autrefois de rédiger des annonces textuelles basiques, aujourd’hui,
				l’attractivité visuelle joue un rôle clé, notamment sur le réseau Display ou YouTube.
			</p>
			<p class="text-6">
				La vidéo, longtemps perçue comme un levier de notoriété, est désormais un outil performant
				pour générer des conversions en ligne.
			</p>
			<p class="text-6">
				Chez Beavers, nous intégrons systématiquement des campagnes <strong>A/B testing</strong> pour
				évaluer les performances de différents visuels, textes ou vidéos. Ce processus garantit que vos
				campagnes Google Ads exploitent pleinement leur potentiel pour convertir et engager votre audience.
			</p>
		</div>
		<div class="mt-20 animate-delay-[1500ms] {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
</div>
