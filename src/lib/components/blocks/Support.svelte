<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Cta from './utilities/CTA.svelte';
	import Line from './utilities/Line.svelte';
	import Title from './utilities/Title.svelte';
	import Sun from '../../assets/svg/Sun.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-200px'
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
	class="big-container flex items-center gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="flex-1">
		<Line />
		<Title first="Nos" second="soutiens" />
		<div
			class="mb-16 mt-8 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis hendrerit blandit.
				Maecenas mollis purus consequat imperdiet tincidunt. Ut sit amet lobortis lorem. Mauris non
				felis vel neque iaculis sollicitudin. Pellentesque eget lacus lacinia, congue turpis et,
				gravida dolor. Nunc placerat faucibus nisl et venenatis.
			</p>
			<p class="text-6">
				Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
				Nunc diam urna, pretium quis neque vel, scelerisque rhoncus tortor.
			</p>
		</div>
		<div class="animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="En savoir plus" href="/tree-nation-the-ocean-cleanup" type="transparent" />
		</div>
	</div>
	<div
		class="gap flex flex-1 justify-between gap-10"
		use:inview={optionsImg}
		on:inview_change={handleChangeImg}
	>
		<div class="relative flex-1 pt-40">
			<Sun
				newClass="absolute w-20 h-20 left-[15%] -top-10 animate-once animate-delay-1000 {isInViewImg
					? 'animate-ping'
					: 'opacity-0'}"
			/>
			{#if isInViewImg}
				<img
					src="/img/tree-nation-logo.png"
					alt="logo tree nation"
					class="absolute right-2 top-20 w-8/12 animate-delay-[800ms] {isInViewImg
						? 'animate-fade'
						: ''}"
				/>
			{/if}
			<div class="h-[26rem]">
				{#if isInViewImg}
					<img
						src="/img/tree-nation.jpg"
						alt="Femme qui plante un arbre"
						class="left h-full w-full rounded-2xl object-cover animate-delay-[600ms] {isInViewImg
							? 'animate-fade'
							: ''}"
					/>
				{/if}
			</div>
		</div>
		<div class="relative flex-1">
			<div class="relative h-[26rem]">
				{#if isInViewImg}
					<img
						src="/img/the-ocean-cleanup.jpg"
						alt="Tortue qui nage en pleine mer ou océan"
						class="h-full w-full rounded-2xl object-cover animate-delay-[1500ms] {isInViewImg
							? 'animate-fade'
							: ''}"
					/>
					<img
						src="/img/the-ocean-cleanup-badge.webp"
						alt="badge The Ocean Cleanup"
						class="absolute left-8 top-full w-48 -translate-y-1/2 transform animate-delay-[1700ms] {isInViewImg
							? 'animate-fade'
							: ''}"
					/>
				{/if}
			</div>
			<Sun
				newClass="absolute w-36 h-36 left-0 top-full -mt-8 animate-once animate-delay-[1900ms] {isInViewImg
					? 'animate-ping'
					: 'opacity-0'}"
				color="#00FFDA"
			/>
		</div>
	</div>
</div>
