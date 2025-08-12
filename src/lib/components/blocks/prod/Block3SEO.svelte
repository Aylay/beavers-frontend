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
		<Title first="Optimisations<br />& conseils du contenu" />
		<h3
			class="mt-2 font-highlight text-4 text-bright lg:animate-delay-200 {isInView
				? 'lg:animate-fade-right'
				: 'lg:opacity-0'}"
		>
			Les mots clés de Père Castor
		</h3>
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Afin d'avoir un bon <a
					href="/la-pause-cafe/seo"
					title="Articles SEO"
					class="font-bold text-electric underline transition-colors hover:text-bright">SEO</a
				> sur votre site internet, il est important de déterminer les mots-clés sur lesquels il faut
				se positionner.
			</p>
			<p class="text-6">
				Après avoir analysé les pages de votre site et donc leur contenu textes, nous vous
				recommandons une liste de mots clés à insérer sur le site. Il sera possible que vous ayez
				besoin de créer de nouvelles pages ou de modifier certains contenus. Cette liste de mots
				clés pertinents est basée sur leur volume de recherche et son évolution, et sur la
				difficulté de s'y positionner.
			</p>
		</div>
		<div class="mt-20 animate-delay-[1500ms] {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
	<div class="lg:flex-1">
		<Line />
		<Title first="Créer & optimiser<br />le maillage" />
		<h3
			class="mt-2 font-highlight text-4 text-bright lg:animate-delay-200 {isInView
				? 'lg:animate-fade-right'
				: 'lg:opacity-0'}"
		>
			Netlinking & maillage interne
		</h3>
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				La liaison entre les pages internes de votre site et sa liaison avec les autres sites web
				sont 2 choses déterminantes pour votre SEO.
			</p>
			<p class="text-6">
				Après un état des lieux des différentes pages, nous pouvons vous proposer une liste de sites
				sur lesquels il est possible d'obtenir des liens sortants, netlinking, ainsi qu'une liste de
				vos pages sur lesquelles il est recommandé de la lier avec une autre, maillage interne.
			</p>
		</div>
		<div class="mt-20 animate-delay-[1500ms] {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
</div>
