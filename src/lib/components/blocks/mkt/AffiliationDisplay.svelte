<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Title from '$lib/components/blocks/utilities/Title.svelte';
	import Line from '$lib/components/blocks/utilities/Line.svelte';
	import Cta from '../utilities/CTA.svelte';
	import Star from '$lib/assets/svg/Star.svelte';
	import Trafic from '$lib/assets/svg/Trafic.svelte';
	import Conversion from '$lib/assets/svg/Conversion.svelte';
	import Display from '$lib/assets/svg/Display.svelte';

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
		<div class="mb-8 flex items-center gap-10">
			<div
				class="flex h-40 w-40 items-center justify-center rounded-full bg-white max-lg:h-28 max-lg:w-28"
			>
				<Trafic newClass="max-lg:h-14 h-20 w-auto" />
			</div>
			<div class="max-lg:flex-1">
				<Line />
				<Title first="Affiliation" />
			</div>
		</div>
		<p
			class="mb-8 text-6 font-semibold text-bright animate-duration-200 {isInView
				? 'animate-fade-right'
				: 'opacity-0'}"
		>
			L’affiliation est un levier puissant pour développer votre visibilité et vos ventes.<br />
			En utilisant l’audience d’une personne, d’une entreprise ou d’un média influent, vous touchez de nouveaux clients qualifiés tout en contrôlant parfaitement votre retour sur investissement.<br />
			Vos partenaires, eux, sont rémunérés à la performance : un modèle gagnant-gagnant, basé sur la confiance et les résultats.
		</p>
		<p class="mb-8 text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Chez Beavers, nous construisons et animons votre réseau d’affiliés en sélectionnant des partenaires stratégiques alignés avec votre image de marque et vos objectifs business.<br />
			Nous définissons les formats les plus efficaces selon votre secteur et votre cible : campagnes emailing, bannières display, codes promotionnels, cashback, contenus sponsorisés ou bons plans exclusifs.
		</p>
		<p class="text-6 animate-delay-700 {isInView ? 'animate-fade' : 'opacity-0'}">
			Notre accompagnement ne se limite pas à la mise en place : nous pilotons vos campagnes en continu pour optimiser la performance, suivre les conversions et ajuster les partenariats les plus rentables.<br />
			L’affiliation devient ainsi un véritable accélérateur de croissance, capable d’augmenter votre trafic qualifié et de booster votre taux de conversion, tout en renforçant la notoriété de votre marque.
		</p>
		<div class="mt-16 flex gap-20 max-lg:flex-col max-lg:gap-4">
			<div
				class="flex items-center gap-4 animate-delay-1000 {isInView ? 'animate-fade' : 'opacity-0'}"
			>
				<Trafic newClass="w-12 h-auto fill-seance" />
				<h3 class="text-5 font-bold">Trafic</h3>
			</div>
			<div
				class="flex items-center gap-4 animate-delay-[1250ms] {isInView
					? 'animate-fade'
					: 'opacity-0'}"
			>
				<Conversion newClass="w-12 h-auto fill-seance" />
				<h3 class="text-5 font-bold">Conversion</h3>
			</div>
		</div>
		<div class="mt-20 animate-delay-[1500ms] {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Créer un réseau d’affiliés" href="/contactez-nous" type="transparent" />
		</div>
	</div>
	<div class="lg:flex-1">
		<div class="mb-8 flex items-center gap-10">
			<div
				class="flex h-40 w-40 items-center justify-center rounded-full bg-white max-lg:h-28 max-lg:w-28"
			>
				<Display newClass="max-lg:h-14 h-20 w-auto fill-seance" />
			</div>
			<div class="max-lg:flex-1">
				<Line />
				<Title first="Display" />
			</div>
		</div>
		<p
			class="mb-8 text-6 font-semibold text-bright animate-duration-200 {isInView
				? 'animate-fade-right'
				: 'opacity-0'}"
		>
			Le <strong>Display</strong> est l’un des leviers les plus puissants pour faire rayonner votre marque. Grâce à des visuels percutants et un ciblage précis, vos campagnes s’affichent sur les sites fréquentés par votre audience et captent l’attention avant même la recherche.
		</p>
		<p class="mb-8 text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Diffusez vos annonces auprès de vos cibles sur ordinateur, tablette ou mobile, en programmatique ou en direct, selon vos objectifs de visibilité et de performance. Nos équipes conçoivent des visuels cohérents avec votre image de marque et optimisent chaque emplacement pour maximiser l’impact.
		</p>
		<p class="text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Formats possibles :
		</p>
		<ul class="mb-8 flex flex-col gap-4 {isInView ? 'animate-fade-right' : 'opacity-0'}">
			<li
				class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-seance before:content-['']"
			>
				<strong>Bannières publicitaires</strong> – pour gagner en notoriété et générer du trafic.
			</li>
			<li
				class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-seance before:content-['']"
			>
				<strong>Vidéos</strong> – pour raconter votre histoire et capter l’attention.
			</li>
			<li
				class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-seance before:content-['']"
			>
				<strong>Native ads</strong> – pour une intégration fluide et naturelle dans les contenus consultés.
			</li>
		</ul>
		<p class="mb-8 text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Chez Beavers, nous pilotons vos campagnes Display comme un véritable levier de croissance. En les combinant avec d’autres canaux – <strong>SEA, Social Ads, Affiliation</strong> – nous créons des synergies puissantes qui boostent votre visibilité, votre notoriété et vos conversions.<br /><br />
			Le Display devient alors bien plus qu’un simple levier de visibilité : c’est un outil clé pour renforcer votre position sur votre marché et rester dans l’esprit de vos futurs clients.
		</p>
		<div class="mt-16 flex justify-between max-lg:flex-col max-lg:gap-4">
			<div
				class="flex items-center gap-4 animate-delay-[750ms] {isInView
					? 'animate-fade'
					: 'opacity-0'}"
			>
				<Star newClass="w-12 h-auto fill-seance" />
				<h3 class="text-5 font-bold">Notoriété</h3>
			</div>
		</div>
		<div class="mt-20 animate-delay-[1500ms] {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Etudier ma stratégie display" href="/contactez-nous" type="transparent" />
		</div>
	</div>
</div>
