<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Cta from '../utilities/CTA.svelte';
	import Quote from '$lib/assets/svg/Quote.svelte';

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

	const tops = ['-top-28', '-top-8', 'top-12'];

	const bottoms = ['-bottom-28', '-bottom-8', 'bottom-12', 'bottom-32', 'bottom-52'];
</script>

<div class="big-container flex gap-32 max-lg:flex-col lg:gap-40">
	<div
		class="relative flex flex-1 justify-center gap-8 max-lg:hidden"
		use:inview={optionsImg}
		on:inview_change={handleChangeImg}
	>
		<div class="flex flex-1 flex-col gap-8">
			<div class="flex-3">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/hp/manifesto-2-1.webp" type="image/webp" />
						<source srcset="/img/hp/manifesto-2-1.jpg" type="image/jpeg" />
						<img
							src="/img/hp/manifesto-2-1.jpg"
							alt="Main tenant un smartphone affichant un visuel coloré et flashy"
							class="h-full w-full overflow-hidden rounded-lg object-cover {isInViewImg
								? 'animate-fade'
								: 'opacity-0'}"
						/>
					</picture>
				{/if}
			</div>
			<div class="flex-2">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/hp/manifesto-2-2.webp" type="image/webp" />
						<source srcset="/img/hp/manifesto-2-2.jpg" type="image/jpeg" />
						<img
							src="/img/hp/manifesto-2-2.jpg"
							alt="Bureau créatif avec crayons, post-its multicolores et Rubik’s cube, symbolisant la diversité et l’innovation"
							class="h-full w-full overflow-hidden rounded-lg object-cover {isInViewImg
								? 'animate-fade'
								: 'opacity-0'}"
						/>
					</picture>
				{/if}
			</div>
		</div>
		<div class="relative flex flex-1 items-center">
			{#each tops as top, i}
				<div
					class="left-8 h-4 w-4 rounded-full {top} absolute bg-bright {isInView
						? 'animate-fade'
						: 'opacity-0'}"
					style="animation-delay: {200 * i}ms;"
				/>
			{/each}
			{#each bottoms as bottom, i}
				<div
					class="left-1/2 z-10 h-4 w-4 -translate-x-1/2 transform rounded-full {bottom} absolute bg-seance {isInView
						? 'animate-fade'
						: 'opacity-0'}"
					style="animation-delay: {600 + 200 * i}ms;"
				/>
			{/each}
			<div class="w-full lg:h-1/2">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/hp/manifesto-2-3.webp" type="image/webp" />
						<source srcset="/img/hp/manifesto-2-3.jpg" type="image/jpeg" />
						<img
							src="/img/hp/manifesto-2-3.jpg"
							alt="Deux collègues souriant sur une chaise et tenant des documents"
							class="h-full w-full overflow-hidden rounded-lg object-cover {isInViewImg
								? 'animate-fade'
								: 'opacity-0'}"
						/>
					</picture>
				{/if}
			</div>
		</div>
	</div>
	<div class="flex-1 max-lg:order-1" use:inview={options} on:inview_change={handleChange}>
		<div class="relative pt-20 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			<p class="pl-6 font-highlight text-4 text-bright">
				Chez Beavers, nous croyons fermement que le cœur de notre entreprise, ce sont les personnes qui la composent. Chaque castor compte pour la complémentarité, et nous mettons un point d’honneur à valoriser les talents, les idées et les contributions de chacun.<br /><br />L’efficacité est dans notre nature ! Nous construisons avec une précision sans faille, pour vous mener au plus haut.
			</p>
			<div class="absolute top-0 left-0 -z-10 flex w-full gap-8">
				<Quote />
				<Quote />
			</div>
		</div>
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-700 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Notre approche est guidée par la data. Nous analysons vos audiences, vos performances et vos opportunités de marché pour concevoir des plans de communication qui collent à vos objectifs. Les chiffres deviennent ainsi un levier de créativité et de performance, pour optimiser vos campagnes en temps réel.
			</p>
			<p class="text-6">
				Toujours à votre écoute, nous vous aidons à répondre à vos besoins et à avancer avec les meilleures pratiques digitales.
			</p>
			<p class="text-6 font-bold text-seance">
				Pour nous, l’écoute et la compréhension des enjeux de nos clients sont au cœur de notre métier.
			</p>
		</div>
		<div class="animate-delay-700 {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
</div>
