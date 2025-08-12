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
				Différemment de Google ads (ou search ads) où des mots-clés sont achetés aux enchères, vous
				pouvez cibler votre audience en fonction de critères socio-démographiques, de critères
				géographiques, de centres d'interêts. Vous pouvez encore activer des segments de retargeting
				qui vous permettent de retoucher vos visiteurs qui n'auraient pas converti ou encore les
				internautes déjà engagés avec vos réseaux.
			</p>
			<p class="text-6">
				Sur Twitter par exemple, vous pouvez aussi cibler les personnes qui suivent certains comptes
				/ profils. Avec Linkedin Ads, il est possible de cibler des postes ou des tailles
				d'entreprise spécifiques.
			</p>
			<p class="text-6">
				En fonction des plateformes, il est possible de cumuler deux ciblages. Par exemple cibler
				des internautes qui sont propriétaires ET qui sont parents.
			</p>
			<p class="text-6">
				Les plus grandes parteformes social ads mettent aussi à disposition des ciblages d'"audience
				network" qui permettent de toucher des internautes même au delà des plateformes en
				exploitant leurs datas sur des sites partenaires.
			</p>
		</div>
		<div class="animate-delay-700 {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
</div>
