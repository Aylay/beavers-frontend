<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Wave from '$lib/assets/svg/Wave.svelte';
	import Cta from '$lib/components/blocks/utilities/CTA.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	let isInViewImg: boolean;
	const optionsImg: Options = {
		unobserveOnEnter: true,
		rootMargin: '50px'
	};

	const handleChangeImg = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInViewImg = detail.inView;
	};
</script>

<div
	class="big-container flex items-center gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="relative flex flex-col gap-28 lg:flex-1">
		<div
			class="relative mx-auto w-full lg:max-w-[45rem]"
			use:inview={optionsImg}
			on:inview_change={handleChangeImg}
		>
			{#if isInViewImg}
				<picture>
					<source srcset="/img/mkt/social-ads-8.webp" type="image/webp" />
					<source srcset="/img/mkt/social-ads-8.png" type="image/png" />
					<img
						src="/img/mkt/social-ads-8.png"
						alt="Main robotisée"
						class="w-full {isInViewImg ? 'animate-fade' : ''}"
					/>
				</picture>
			{/if}
			<div
				class="absolute top-20 left-0 h-auto w-[7.5rem] animate-delay-500 lg:-left-20 {isInView
					? 'animate-shake'
					: 'opacity-0'}"
			>
				<Wave color="#00FFDA" />
			</div>
			<div
				class="absolute right-10 bottom-0 h-auto w-[6.2rem] {isInView
					? 'animate-shake'
					: 'opacity-0'}"
			>
				<Wave />
			</div>
		</div>
	</div>
	<div class="lg:flex-1">
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Contrairement à <strong>Google Ads</strong>, qui repose sur l’achat de mots-clés, les <strong>Social Ads</strong> s’appuient sur des <strong>critères socio-démographiques, géographiques, comportementaux et contextuels</strong>.<br />
				Vous pouvez également activer des <strong>segments de retargeting</strong> pour recibler vos visiteurs, ou des <strong>audiences similaires (lookalike)</strong> pour élargir votre portée à des profils proches de vos clients existants.
			</p>
			<p class="text-6">
				Chaque plateforme possède ses spécificités&nbsp;:
			</p>
			<ul class="flex flex-col gap-4">
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>LinkedIn Ads</strong> permet de cibler selon le <strong>poste, la fonction ou la taille d’entreprise</strong> ;
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Twitter/X Ads</strong> autorise le ciblage par <strong>abonnements à des comptes spécifiques</strong> ;
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					<strong>Meta Ads</strong> (Facebook & Instagram) combine des données comportementales, d’intérêts et de démographie pour une approche complète.
				</li>
			</ul>
			<p class="text-6">
				Il est également possible de <strong>croiser plusieurs critères</strong> — par exemple, cibler les propriétaires qui sont aussi parents — ou d’étendre la diffusion via les <strong>audience networks</strong>, qui s’appuient sur les données collectées au-delà des plateformes sociales elles-mêmes.
			</p>
		</div>
		<div class="animate-delay-700 {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
</div>
