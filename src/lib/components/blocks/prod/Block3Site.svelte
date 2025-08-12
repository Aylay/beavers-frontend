<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Title from '$lib/components/blocks/utilities/Title.svelte';
	import Line from '$lib/components/blocks/utilities/Line.svelte';
	import Cta from '../utilities/CTA.svelte';

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
		<Title first="Création de site e-commerce" />
		<h3
			class="mt-2 font-highlight text-4 text-bright lg:animate-delay-200 {isInView
				? 'lg:animate-fade-right'
				: 'lg:opacity-0'}"
		>
			Générez des ventes en ligne
		</h3>
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Vous avez des produits, physiques et / ou digitaux, à proposer à des clients ? Le site
				e-commerce est l'outil de vente en ligne qu'il vous faut.
			</p>
			<p class="text-6">
				Nous proposons des sites e-commerce sur mesure, optimisé en <a
					href="/la-pause-cafe/seo"
					title="Articles SEO"
					class="font-bold text-electric underline transition-colors hover:text-bright">SEO</a
				>, pensé mobile-first (plus de 50 % des ventes se font aujourd'hui sur mobile), ayant un
				parcours utilisateur réfléchi pour votre cible.
			</p>
			<p class="text-6">L'agence Beavers développe ses sites e-commerce sur mesure :</p>
			<ul class="flex flex-col gap-4">
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					avec le service Shopify ;
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					avec la stack Svelte + CMS Strapi + <a
						href="https://stripe.com/fr"
						title="Stripe"
						target="_blank"
						class="font-bold text-electric underline transition-colors hover:text-bright">Stripe</a
					>, s'il y a peu de produits à mettre en vente.
				</li>
			</ul>
		</div>
		<div class="mt-20 animate-delay-[1500ms] {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
	<div class="lg:flex-1">
		<Line />
		<Title first="Refonte de site internet" />
		<h3
			class="mt-2 font-highlight text-4 text-bright lg:animate-delay-200 {isInView
				? 'lg:animate-fade-right'
				: 'lg:opacity-0'}"
		>
			Améliorez votre design en gardant votre référencement
		</h3>
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Vous êtes déjà en possession d'un site internet et vous avez besoin de mettre le design au
				goût du jour ou d'améliorer les performances de celui-ci ?
			</p>
			<p class="text-6">
				L'agence Beavers propose la refonte de votre site internet tout en gardant le SEO déjà
				existant en mettant en place, si besoin, un plan de redirection, afin de migrer de l'ancien
				au nouveau site sans perdre de place sur les moteurs de recherche.
			</p>
		</div>
		<div class="mt-20 animate-delay-[1500ms] {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
</div>
