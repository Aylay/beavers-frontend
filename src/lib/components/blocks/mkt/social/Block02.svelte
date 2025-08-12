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
					<source srcset="/img/mkt/social-ads-2.webp" type="image/webp" />
					<source srcset="/img/mkt/social-ads-2.png" type="image/png" />
					<img
						src="/img/mkt/social-ads-2.png"
						alt="Picto Instagram sous fond rose"
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
				Ce sont des <strong>publications sponsorisées</strong>. Une marque va donc acheter le fait
				de pouvoir vous montrer son message. Il ne s'agit pas forcément de marque que vous suivez
				déjà.
			</p>
			<p class="text-6">
				En fonction de l'annonceur et de son objectif, différents leviers et social ads seront
				activés. Par exemple, pour un annonceur BtoB, on favorisera Linkedin Ads et pour un
				annonceur du secteur de la décoration ou de l'ameublement, on lancera des stratégies
				Instagram Ads ou Pinterest Ads.
			</p>
			<p class="text-6">
				Chaque cas est différent et notre <a
					href="/l-agence-beavers/agence-social-ads"
					title="Agence Social Ads Beavers"
					class="font-bold text-electric underline transition-colors hover:text-bright"
					>agence social ads</a
				>
				étudie l'annonceur et son besoin afin de déterminer
				<strong>quelle stratégie mettre en place</strong>.
			</p>
		</div>
		<div class="animate-delay-700 {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
</div>
