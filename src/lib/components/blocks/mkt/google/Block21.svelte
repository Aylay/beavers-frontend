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
				Google Ads vous offre la possibilité de choisir <strong>où et comment vos annonces apparaissent</strong>, selon vos objectifs marketing et la maturité de votre audience.<br />
				Grâce à la data et à l’intelligence artificielle, la plateforme ajuste la diffusion en temps réel pour maximiser la performance et garantir la meilleure visibilité possible.
			</p>
			<p class="text-6">
				Chez Beavers, nos experts Google Ads vous accompagnent dans la sélection et l’optimisation des formats les plus efficaces pour atteindre vos objectifs :
			</p>
			<ul class="flex flex-col gap-4 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Réseau de recherche (Search)</strong> : idéal pour <strong>capter les intentions d’achat</strong>. Vos annonces s’affichent directement sur les résultats de recherche Google lorsque vos prospects recherchent vos produits ou services.
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Display et YouTube Ads</strong> : parfaits pour <strong>développer la notoriété de votre marque</strong> et <strong>toucher des audiences en phase de découverte</strong> à travers des visuels ou vidéos percutants.
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Shopping Ads</strong> : incontournables pour les <strong>e-commerçants</strong>, ces annonces mettent en avant vos produits avec image, prix et nom du vendeur, directement dans Google.
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Campagnes Performance Max</strong> : l’IA de Google unifie Search, Display, YouTube, Discover et Gmail pour une <strong>diffusion intelligente et automatisée</strong>, pilotée par vos objectifs de conversion.
				</li>
			</ul>
			<p class="text-6">
				Combinée à notre expertise humaine, cette intelligence artificielle devient un levier stratégique : nous ajustons vos paramètres, affinons vos audiences et optimisons vos budgets pour tirer le meilleur parti de chaque format.
			</p>
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
			<p class="text-6">Pour performer sur Google Ads, chaque détail compte. Une stratégie efficace repose sur l’équilibre entre <strong>analyse, créativité et optimisation continue</strong>.</p>
			<p class="text-6">Voici les leviers essentiels à maîtriser :</p>
			<ul class="flex flex-col gap-4 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Un ciblage d’audience précis</strong> : identifier les segments à forte valeur ajoutée pour maximiser la conversion.
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Des mots-clés intelligemment sélectionnés</strong> : associer mots-clés génériques et longue traîne pour trouver le bon équilibre entre volume et rentabilité.
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Une allocation budgétaire maîtrisée</strong> : investir là où le potentiel de performance est le plus fort, tout en optimisant le retour sur investissement.
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Des landing pages orientées conversion</strong> : claires, rapides et alignées avec la promesse de l’annonce.
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Un suivi rigoureux des KPI</strong> : analyse du CPC, CTR, taux de conversion et Quality Score pour ajuster vos campagnes en continu.
				</li>
			</ul>
			<p class="text-6">
				Dans un environnement digital ultra-concurrentiel, la <strong>qualité créative</strong> devient un facteur différenciant.<br />
				Les annonces textuelles ne suffisent plus : les visuels, formats interactifs et vidéos jouent désormais un rôle clé, notamment sur <strong>Display</strong> et <strong>YouTube</strong>.
			</p>
			<p class="text-6">
				La vidéo, autrefois dédiée à la notoriété, s’impose aujourd’hui comme un <strong>levier d’acquisition à part entière</strong>, capable de générer des conversions directes.
			</p>
			<p class="text-6">
				Chez Beavers, nous intégrons systématiquement l’<strong>A/B testing</strong> dans nos campagnes afin d’identifier les combinaisons les plus performantes : visuels, messages, CTA ou formats.<br />
				Ce travail de précision garantit que chaque campagne Google Ads exprime tout son potentiel, en captant l’attention et en convertissant efficacement votre audience.
			</p>
		</div>
		<div class="mt-20 animate-delay-[1500ms] {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
</div>
