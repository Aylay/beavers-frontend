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
	<div class="relative flex flex-1 justify-center gap-8 max-lg:order-2" use:inview={optionsImg} on:inview_change={handleChangeImg}>
		<div class="flex flex-1 flex-col gap-8">
			<div class="flex-3 overflow-hidden rounded-lg">
				{#if isInViewImg}
					<img
						src="/img/hp/manifesto-2-1.jpg"
						alt="Coucou"
						class="h-full w-full object-cover {isInViewImg ? 'animate-fade' : 'opacity-0'}"
					/>
				{/if}
			</div>
			<div class="flex-2 overflow-hidden rounded-lg">
				{#if isInViewImg}
					<img
						src="/img/hp/manifesto-2-2.jpg"
						alt="Coucou"
						class="h-full w-full object-cover {isInViewImg ? 'animate-fade' : 'opacity-0'}"
					/>
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
			<div class="w-full overflow-hidden rounded-lg lg:h-1/2">
				{#if isInViewImg}
					<img
						src="/img/hp/manifesto-2-3.jpg"
						alt="Coucou"
						class="h-full w-full object-cover {isInViewImg ? 'animate-fade' : 'opacity-0'}"
					/>
				{/if}
			</div>
		</div>
	</div>
	<div class="flex-1 max-lg:order-1" use:inview={options} on:inview_change={handleChange}>
		<div class="relative pt-20 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			<p class="pl-6 font-highlight text-4 text-bright">
				Lorem ipsum dolor sit amet adipiscing <br />consectetur mollas donde..
			</p>
			<div class="absolute left-0 top-0 -z-10 flex w-full gap-8">
				<Quote />
				<Quote />
			</div>
		</div>
		<div
			class="mb-16 mt-8 flex flex-col gap-8 animate-delay-700 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Nous avons choisi d'orienter notre approche vers une stratégie data-centric, nous nous
				appuyons sur la donnée pour vous proposer des plans de communication qui correspondent à vos
				objectifs, mesurer efficacement vos performances et pour optimiser l'existant en temps réel.
			</p>
			<p class="text-6">
				Nous sommes à votre écoute pour répondre à vos besoins mais surtout vous aiguiller sur les
				bonnes pratiques.
			</p>
			<p class="text-6 font-bold text-seance">
				Pour nous, l'écoute et la compréhension des enjeux de nos clients sont au coeur de notre
				métier.
			</p>
		</div>
		<div class="animate-delay-700 {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
</div>
