<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Title from '../utilities/Title.svelte';
	import Line from '../utilities/Line.svelte';
	import Palette1 from '$lib/assets/svg/Palette1.svelte';
	import Cta from '../utilities/CTA.svelte';
	import Baguette from '$lib/assets/svg/Baguette.svelte';

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

	const tops = ['-left-8', '-left-4', 'left-0', 'left-4'];

	const bottoms = ['right-28', 'right-20', 'right-12', 'right-4'];
</script>

<div
	class="big-container flex gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="flex-1">
		<Line />
		<Title first="Notre" second="manifesto" />
		<div
			class="mt-8 mb-16 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Chez Beavers, on est passionné par le domaine de l'habitat, on aime l'humain, se lever le
				matin pour veiller sur les dernières tendances et pour vous proposer nos idées, qui parfois
				partent loin, mais dans l'optique de toujours nous challenger et d'apporter ce truc en plus
				qui vous démarquera de vos concurrents.
			</p>
			<p class="text-6">
				Cependant, on garde les pieds sur terre pour vous élaborer une stratégie qui corresponde à
				vos enjeux tout en respectant vos moyens.
			</p>
			<p class="text-6">
				Chaque détail compte pour mettre en avant les professionnels de l'habitat cherchant de la
				visibilité et de l'acquisation digitale.
			</p>
		</div>
		<div class="animate-delay-700 {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Découvrir l'équipe" href="/l-agence-beavers" type="transparent" />
		</div>
	</div>
	<div class="relative flex flex-1 justify-center max-lg:hidden">
		<div>
			<div
				class="relative w-full max-w-[45rem]"
				use:inview={optionsImg}
				on:inview_change={handleChangeImg}
			>
				{#if isInViewImg}
					<picture>
						<source srcset="/img/hp/manifesto-1.webp" type="image/webp" />
						<source srcset="/img/hp/manifesto-1.png" type="image/png" />
						<img
							src="/img/hp/manifesto-1.png"
							alt="Homme faisant de l'ordinateur et Femme travaillant à un tableau"
							class="w-full {isInViewImg ? 'animate-fade' : ''}"
						/>
					</picture>
				{/if}
				<div
					class="absolute top-16 left-24 flex h-[11rem] w-[11.75rem] items-center justify-center"
				>
					<Palette1 newClass="transform rotate-180" />
					<Baguette
						newClass="absolute z-10 bottom-10 right-10 {isInView ? 'animate-jump' : 'opacity-0'}"
					/>
				</div>

				{#each tops as top, i}
					<div
						class="absolute top-12 h-[1.5px] w-28 -rotate-45 transform bg-seance {top} {isInView
							? 'animate-fade'
							: 'opacity-0'}"
						style="animation-delay: {200 * i}ms;"
					/>
				{/each}

				{#each bottoms as bottom, i}
					<div
						class="absolute -bottom-4 h-[3px] w-44 -rotate-45 transform bg-bright {bottom} {isInView
							? 'animate-fade'
							: 'opacity-0'}"
						style="animation-delay: {800 + 200 * i}ms;"
					/>
				{/each}
			</div>
		</div>
	</div>
</div>
