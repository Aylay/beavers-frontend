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

<div class="big-container flex gap-32 max-lg:flex-col lg:gap-40"
use:inview={options}
on:inview_change={handleChange}>
	<div class="relative flex flex-1 justify-center gap-8"  use:inview={optionsImg} on:inview_change={handleChangeImg}>
		<div class="flex flex-1 flex-col gap-8 ">
			<div class="flex-3 relative">
				{#if isInViewImg}
					<img
						src="/img/rse/tree-nation-2.jpg"
						alt="Tree-Nation"
						class="h-full w-full object-cover overflow-hidden rounded-lg {isInViewImg ? 'animate-fade' : 'opacity-0'}"
					/>
				{/if}
			</div>
			<div class="flex-2 relative">
				{#if isInViewImg}
					<img
						src="/img/rse/tree-nation-3.jpg"
						alt="Tree-Nation"
						class="h-full w-full object-cover overflow-hidden rounded-lg {isInViewImg ? 'animate-fade' : 'opacity-0'}"
					/>
				{/if}
			</div>
		</div>
		<div class="relative flex flex-1 items-center">
			<div class="w-full lg:h-1/2 relative">
				{#if isInViewImg}
					<img
						src="/img/rse/tree-nation-4.jpg"
						alt="Tree-Nation"
						class="h-full w-full object-cover overflow-hidden rounded-lg {isInViewImg ? 'animate-fade' : 'opacity-0'}"
					/>
				{/if}
			</div>
		</div>
	</div>
  <div class="lg:flex-1">
    <Line />
    <h2 class="w-full max-w-[47rem] text-3 text-seance">
      Ce qu’en  <span class="text-[5.7rem] leading-[3rem] text-bright font-normal font-highlight">pensent</span> les castors de Beavers
    </h2>
    <p class="font-semibold text-bright animate-duration-200 text-6 my-8 {isInView
      ? 'animate-fade-right'
      : 'opacity-0'}">
      Sans langue de bois (et nous sommes des castors), nous pensons que c’est avec l’effort de chacun que nous	pouvons réaliser de grandes choses.
    </p>
    <p class="text-6 mb-8 animate-delay-500 {isInView
      ? 'animate-fade'
      : 'opacity-0'}">
      Nous sommes sensibles à notre environnement et aux animaux qui en sont victimes. Nous voulons apporter quelque chose d’utile à la planète. Même si cela reste à notre échelle, nous adhérons à l’adage qui dit que ce sont les petits ruisseaux qui créent
			les grandes rivières.			
    </p>
    <p class="text-6 animate-delay-500 {isInView
      ? 'animate-fade'
      : 'opacity-0'}">
      Pour en savoir plus, rendez-vous dans la forêt Beavers de Tree-Nation&nbsp;:
    </p>
    <div class="mt-20 animate-delay-1000 {isInView
      ? 'animate-fade'
      : 'opacity-0'}">
      <Cta label="Tree-Nation" href="https://tree-nation.com/fr/profil/impact/beavers" type="transparent" blank={true} />
    </div>
  </div>
</div>
