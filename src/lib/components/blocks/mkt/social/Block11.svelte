<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Title from '$lib/components/blocks/utilities/Title.svelte';
	import Line from '$lib/components/blocks/utilities/Line.svelte';

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
	<div class="lg:flex-1">
		<Line />
		<Title first="Les social ads, comment ça marche&nbsp;?" />
		<h3
			class="mt-2 font-highlight text-4 text-bright lg:animate-delay-200 {isInView
				? 'lg:animate-fade-right'
				: 'lg:opacity-0'}"
		>
			Comment lancer une campagne&nbsp;?
		</h3>
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
				Les plateformes sociales (Meta, TikTok, LinkedIn, Pinterest, etc.) mettent à disposition des <strong>outils publicitaires accessibles</strong> à tous.<br />
				En théorie, un texte, quelques visuels et une carte bancaire suffisent pour lancer une campagne. En pratique, atteindre de vrais résultats demande une approche stratégique et des paramétrages précis.
			</p>
			<p class="text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
				Pour réussir, il est essentiel de <strong>définir clairement vos objectifs</strong> — trafic, conversions, notoriété — car les algorithmes optimiseront la diffusion selon la priorité choisie.
			</p>
			<p class="text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
				Une stratégie Social Ads performante repose aussi sur&nbsp;:
			</p>
			<ul class="flex flex-col gap-4 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					un <strong>ciblage d’audience cohérent</strong> et affiné selon le comportement et les intérêts ;
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					des <strong>tests réguliers (A/B testing)</strong> pour comparer messages, visuels et formats ;
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					un <strong>tracking complet</strong> via le <strong>pixel Meta</strong> ou l’<strong>API de conversion</strong> pour mesurer les résultats réels ;
				</li>
				<li
					class="relative pl-8 text-6 before:absolute before:top-3 before:left-0 before:h-3 before:w-3 before:rounded-full before:bg-electric before:content-['']"
				>
					une <strong>analyse continue des KPI</strong> (coût par clic, taux d’engagement, conversions) pour ajuster vos campagnes.
				</li>
			</ul>
		</div>
	</div>
	<div
		class="relative flex flex-1 justify-center gap-8 max-lg:hidden"
		use:inview={optionsImg}
		on:inview_change={handleChangeImg}
	>
		<div class="flex flex-1 flex-col gap-8">
			<div class="flex-3">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/mkt/social-ads-3.webp" type="image/webp" />
						<source srcset="/img/mkt/social-ads-3.png" type="image/png" />
						<img
							src="/img/mkt/social-ads-3.png"
							alt="Une tablette et un téléphone avec une maquette de publicité"
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
						<source srcset="/img/mkt/social-ads-4.webp" type="image/webp" />
						<source srcset="/img/mkt/social-ads-4.png" type="image/png" />
						<img
							src="/img/mkt/social-ads-4.png"
							alt="Dashboard avec chiffres et graphique"
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
					class="left-8 h-4 w-4 rounded-full {top} absolute bg-seance {isInView
						? 'animate-fade'
						: 'opacity-0'}"
					style="animation-delay: {200 * i}ms;"
				/>
			{/each}
			{#each bottoms as bottom, i}
				<div
					class="left-1/2 z-10 h-4 w-4 -translate-x-1/2 transform rounded-full {bottom} absolute bg-bright {isInView
						? 'animate-fade'
						: 'opacity-0'}"
					style="animation-delay: {600 + 200 * i}ms;"
				/>
			{/each}
			<div class="w-full lg:h-1/2">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/mkt/social-ads-5.webp" type="image/webp" />
						<source srcset="/img/mkt/social-ads-5.png" type="image/png" />
						<img
							src="/img/mkt/social-ads-5.png"
							alt="Personne qui clique sur son téléphone avec une publication Instagram"
							class="h-full w-full overflow-hidden rounded-lg object-cover object-right {isInViewImg
								? 'animate-fade'
								: 'opacity-0'}"
						/>
					</picture>
				{/if}
			</div>
		</div>
	</div>
</div>
