<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Hoverable from '$lib/components/utilities/Hoverable.svelte';

	export let article: any;
	export let i: number;
	let delay: number;
	if (i % 3 === 0) {
		delay = 0
	} else if (i % 3 === 1) {
		delay = 200
	} else if (i % 3 === 2) {
		delay = 400
	}

	const strapiURL = import.meta.env.VITE_STRAPI_URL;

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


<div>
	<a
		href={article.slug}
		title={article.title}
		class="flex w-full flex-col {isInView ? 'animate-fade' : 'opacity-0'}"
		style="animation-delay: {delay}ms;"
		use:inview={options}
		on:inview_change={handleChange}
	>
		<Hoverable let:hovering={active}>
			<div
				class="relative h-96 w-full overflow-hidden rounded-lg"
				use:inview={optionsImg}
				on:inview_change={handleChangeImg}
			>
				{#if isInViewImg}
					<img
						src={strapiURL + article.img.src}
						alt={article.img.alt}
						class="h-full w-full object-cover transition-transform duration-[3000ms] {isInViewImg ? 'animate-fade' : ''} {active ? 'scale-125' : ''}"
					/>
				{/if}
			</div>
			<div class="mt-10 flex gap-6">
				<p class="border-r border-r-seance pr-6 text-6 font-bold text-bright">{article.tag}</p>
				<p class="text-6">{article.date}</p>
			</div>
			<h4 class="mt-5 text-5 transition-colors duration-300 {active ? 'text-bright' : 'text-seance'}">
				{article.title}
			</h4>
			<p class="my-8 text-6">
				{article.description}
			</p>
			<div
				class="text-6 font-bold border-bright inline-block {active ? 'bg-bright text-black' : 'text-white bg-transparent'} duration-300 rounded-[3rem] border-2 px-10 py-4 transition-colors"
			>
				Lire l'article
			</div>
		</Hoverable>
	</a>
</div>