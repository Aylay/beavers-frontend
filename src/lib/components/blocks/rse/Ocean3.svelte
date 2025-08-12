<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

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
</script>

<div
	class="big-container flex gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div
		class="relative flex flex-1 justify-center gap-8"
		use:inview={optionsImg}
		on:inview_change={handleChangeImg}
	>
		<div class="flex flex-1 flex-col gap-8">
			<div class="relative flex-3">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/rse/the-ocean-cleanup-2.webp" type="image/webp" />
						<source srcset="/img/rse/the-ocean-cleanup-2.jpg" type="image/jpeg" />
						<img
							src="/img/rse/the-ocean-cleanup-2.jpg"
							alt="The Ocean Cleanup"
							class="h-full w-full overflow-hidden rounded-lg object-cover {isInViewImg
								? 'animate-fade'
								: 'opacity-0'}"
						/>
					</picture>
				{/if}
			</div>
			<div class="relative flex-2">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/rse/the-ocean-cleanup-3.webp" type="image/webp" />
						<source srcset="/img/rse/the-ocean-cleanup-3.jpg" type="image/jpeg" />
						<img
							src="/img/rse/the-ocean-cleanup-3.jpg"
							alt="The Ocean Cleanup"
							class="h-full w-full overflow-hidden rounded-lg object-cover {isInViewImg
								? 'animate-fade'
								: 'opacity-0'}"
						/>
					</picture>
				{/if}
			</div>
		</div>
		<div class="relative flex flex-1 items-center">
			<div class="relative w-full lg:h-1/2">
				{#if isInViewImg}
					<picture>
						<source srcset="/img/rse/the-ocean-cleanup-4.webp" type="image/webp" />
						<source srcset="/img/rse/the-ocean-cleanup-4.jpg" type="image/jpeg" />
						<img
							src="/img/rse/the-ocean-cleanup-4.jpg"
							alt="The Ocean Cleanup"
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
		<h2 class="w-full max-w-[47rem] text-3 text-seance">
			Les castors ne veulent pas <span
				class="font-highlight text-[5.7rem] leading-[3rem] font-normal text-bright"
				>manger de plastique</span
			>
		</h2>
		<p
			class="my-8 text-6 font-semibold text-bright animate-duration-200 {isInView
				? 'animate-fade-right'
				: 'opacity-0'}"
		>
			Pensez-vous vraiment que le poisson que vous consommez au quotidien s’est trouvé une petite
			bulle VIP sans plastique ?
		</p>
		<p class="mb-8 text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Même si cela reste à notre échelle, nous adhérons à l’adage qui dit que ce sont les petits
			ruisseaux qui créent les grandes rivières. C'est pourquoi nous mettons notre patte à la pâte
			pour nettoyer nos rivières ainsi que nos océans en contribuant financièrement à l'association
			The Ocean CleanUp. Tous nos clients y contribuent, alors merci à eux, à vous.
		</p>
		<p class="text-6 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			Découvrez votre impact au coeur des océans
		</p>
		<div class="mt-20 animate-delay-1000 {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta
				label="The Ocean Cleanup"
				href="https://theoceancleanup.com/"
				type="transparent"
				blank={true}
			/>
		</div>
	</div>
</div>
