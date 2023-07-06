<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

  import Title from '$lib/components/blocks/utilities/Title.svelte';
  import Line from '$lib/components/blocks/utilities/Line.svelte';
	import Arc from '$lib/assets/svg/Arc.svelte';

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

<div class="big-container flex gap-32 lg:items-center max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
<div class="lg:flex-1">
	<Line />
	<Title first="Agence digitale uniquement composée" second="d'experts" />
	<p class="mt-8 text-6 animate-delay-500 {isInView
		? 'animate-fade'
		: 'opacity-0'}">
		Nos expériences en agence de communication et chez l’annonceur nous permettent de comprendre vos enjeux tout en vous proposant les stratégies les plus adaptées et les plus innovantes du marché.
	</p>
</div>
	<div class="relative flex flex-1 justify-center gap-8" use:inview={optionsImg} on:inview_change={handleChangeImg}>
		<div class="relative flex flex-1 items-center">
			<div class="w-full lg:h-1/2 relative">
				{#if isInViewImg}
					<img
						src="/img/hp/manifesto-2-3.jpg"
						alt="Coucou"
						class="h-full w-full object-cover overflow-hidden rounded-lg {isInViewImg ? 'animate-fade' : 'opacity-0'}"
					/>
				{/if}
				<Arc newClass="fill-bright absolute -bottom-28 right-0 w-20 h-auto" />
			</div>
		</div>
		<div class="flex flex-1 flex-col gap-8">
			<div class="flex-3 relative">
				{#if isInViewImg}
					<img
						src="/img/hp/manifesto-2-1.jpg"
						alt="Coucou"
						class="h-full w-full object-cover overflow-hidden rounded-lg {isInViewImg ? 'animate-fade' : 'opacity-0'}"
					/>
				{/if}
				<Arc newClass="fill-seance absolute -top-20 right-8 w-14 h-auto" />
			</div>
			<div class="flex-2">
				{#if isInViewImg}
					<img
						src="/img/hp/manifesto-2-2.jpg"
						alt="Coucou"
						class="h-full w-full object-cover overflow-hidden rounded-lg {isInViewImg ? 'animate-fade' : 'opacity-0'}"
					/>
				{/if}
			</div>
		</div>
	</div>
</div>
