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

<div
	class="big-container flex gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
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
							alt="Un pot de fausse fleur + un téléphone avec Instagram"
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
							alt="Tasse à café tenue par une personne"
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
							alt="4 personnes qui se tiennent le poignet"
							class="h-full w-full overflow-hidden rounded-lg object-cover {isInViewImg
								? 'animate-fade'
								: 'opacity-0'}"
						/>
					</picture>
				{/if}
			</div>
		</div>
	</div>
	<div class="lg:flex-1">
		<Line />
		<Title first="Optimisations<br />& conseils techniques" />
		<h3
			class="mt-2 font-highlight text-4 text-bright lg:animate-delay-200 {isInView
				? 'lg:animate-fade-right'
				: 'lg:opacity-0'}"
		>
			Mission Google friendly
		</h3>
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
				Après avoir réalisé l'audit SEO de votre site internet, nous vous enverrons une liste
				d'optimisations & conseils techniques. Ainsi votre site sera dans un état de santé optimal
				pour Google et les autres moteurs de recherche. Les différentes optimisations peuvent être
				la mise à jour des balises du site, l'amélioration du responsive design afin que ce soit
				plus lisible en mobile et sur ordinateur, les slugs utilisés, le remplissage des balises SEO
				qui peuvent manquer, etc.
			</p>
			<p class="text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
				L'agence Beavers vous propose de mettre en place ces optimisations.
			</p>
		</div>
		<div class="mt-20 animate-delay-1000 {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
		</div>
	</div>
</div>
