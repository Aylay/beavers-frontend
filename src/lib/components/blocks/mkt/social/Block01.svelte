<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Title from '$lib/components/blocks/utilities/Title.svelte';
	import Line from '$lib/components/blocks/utilities/Line.svelte';
	import Plus from '$lib/assets/svg/Plus.svelte';

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

	const pluss: Array<string> = [
		'bottom-32 left-0 lg:-left-16',
		'bottom-32 left-16 lg:left-0',
		'bottom-16 left-0 lg:-left-16',
		'bottom-16 left-16 lg:left-0',
		'bottom-16 left-32 lg:left-16',
		'bottom-16 left-48 lg:left-32',
		'bottom-16 left-60 lg:left-48',
		'bottom-0 left-0 lg:-left-16',
		'bottom-0 left-16 lg:left-0',
		'bottom-0 left-32 lg:left-16',
		'bottom-0 left-48 lg:left-32',
		'bottom-0 left-60 lg:left-48'
	];
</script>

<div
	class="big-container flex items-center gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="flex-1">
		<Line />
		<Title first="Les social ads, qu'est-ce que c'est&nbsp;?" />
		<h3
			class="mt-2 font-highlight text-4 text-bright lg:animate-delay-200 {isInView
				? 'lg:animate-fade-right'
				: 'lg:opacity-0'}"
		>
			Une première approche
		</h3>
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Les <a
						href="/la-pause-cafe/media/social-ads-signification-astuces-campagne-reussie"
						title="Qu’est-ce que le social Ads ? Signification et astuces pour une campagne réussie"
						class="font-bold text-electric underline transition-colors hover:text-bright"
						><strong>social ads</strong></a
					> (ou publicités sur les réseaux sociaux) désignent l’ensemble des campagnes sponsorisées diffusées sur des plateformes comme <strong>Meta (Facebook & Instagram), TikTok, Pinterest, LinkedIn ou X</strong>.<br />
					Elles permettent aux marques de <strong>développer leur notoriété</strong>, <strong>renforcer leur image</strong>, <strong>générer du trafic qualifié</strong> et <strong>stimuler la conversion</strong>.
			</p>
			<p class="text-6">
				Chaque plateforme propose ses propres formats et logiques de diffusion : stories, carrousels, vidéos, posts interactifs… Les annonceurs peuvent ainsi adapter leurs messages selon les usages, les audiences et les objectifs.
			</p>
			<p class="text-6">
				Les Social Ads reposent sur un principe simple : <strong>acheter un espace publicitaire</strong> au sein du flux d’utilisateurs.<br />
				Comme pour un spot télévisé ou une affiche dans la rue, la marque paie pour placer son message devant une audience choisie — mais ici, la diffusion est <strong>personnalisée et mesurable en temps réel</strong>.
			</p>
		</div>
	</div>
	<div class="relative flex flex-1 items-center justify-center max-lg:hidden">
		<div
			class="relative w-full lg:max-w-[45rem]"
			use:inview={optionsImg}
			on:inview_change={handleChangeImg}
		>
			{#if isInViewImg}
				<picture>
					<source srcset="/img/mkt/social-ads.webp" type="image/webp" />
					<source srcset="/img/mkt/social-ads.png" type="image/png" />
					<img
						src="/img/mkt/social-ads.png"
						alt="Plusieurs téléphones qui entourent une bulle avec un coeur et des chiffres"
						class="w-full {isInViewImg ? 'animate-fade' : ''}"
					/>
				</picture>
			{/if}
			{#each pluss as plus, i}
				<div
					class="absolute h-auto w-[1.8rem] {plus} {isInView ? 'animate-fade' : 'opacity-0'}"
					style="animation-delay: {500 + 200 * i}ms;"
				>
					<Plus />
				</div>
			{/each}
		</div>
	</div>
</div>
