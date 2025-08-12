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
			Utilisez l’audience d’une personne ou d’une entreprise pour convertir. Vous obtenez des
			clients de confiance, et en échange, l’affilié reçoit une commission pour le partage de votre
			marque auprès de ses fans.
		</p>
		<p class="mb-8 text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Déployez un réseau d'affiliés ciblés spécifiquement dans le domaine de l'habitat qui pourront
			promouvoir votre marque avec brio. Rémunérez-les en fonction de leurs résultats à travers des
			supports emailing, bannières, coupon, cashback, bon plan... et devenez la référence
			incontournable dans le secteur de l'habitat avec Beavers !
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
			Pour faire sensation dans le secteur de l'habitat, utilisez le display pour communiquer sur
			votre marque ou vos services grâce à des visuels attrayants insérés au sein d'un site
			internet.
		</p>
		<p class="mb-8 text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Affichez votre offre auprès de votre audience cible du secteur de l'habitat, sur ordinateur ou
			sur mobile, en programmatique ou non, avec différents formats&nbsp;:
		</p>
		<ul class="mb-8 flex flex-col gap-4 {isInView ? 'animate-fade-right' : 'opacity-0'}">
			<li
				class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-seance before:content-['']"
			>
				Bannières publicitaires
			</li>
			<li
				class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-seance before:content-['']"
			>
				Vidéos
			</li>
			<li
				class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-seance before:content-['']"
			>
				Native ads
			</li>
		</ul>
		<p class="mb-8 text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Diffusez vos publicités auprès de vos prospects du secteur de l'habitat pour augmenter votre
			notoriété et devenir "top of mind". Le display est davantage un levier de visibilité, mais
			couplé à d'autres leviers, il peut rapidement devenir une carte indispensable dans une
			stratégie d'acquisition pour dominer le secteur de l'habitat !
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
