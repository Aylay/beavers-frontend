<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import Hoverable from '$lib/components/utilities/Hoverable.svelte';
	import Cta from '../utilities/CTA.svelte';

	export let article: any;
	export let i: number;
	const delay = i * 200;

	const strapiURL = import.meta.env.VITE_STRAPI_URL;

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-200px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<Hoverable let:hovering={active}>
	<a
		href={article.slug}
		title={article.title}
		class="flex w-full flex-col {isInView ? 'animate-fade' : 'opacity-0'}"
		style={isInView ? 'animation-delay: ' + delay + 'ms;' : ''}
		use:inview={options}
		on:inview_change={handleChange}
	>
		<div class="relative h-96 w-full overflow-hidden rounded-lg">
			<img
				src={strapiURL + article.img.src}
				alt={article.img.alt}
				class="h-full w-full object-cover"
			/>
		</div>
		<div class="mt-10 flex gap-6">
			<p class="border-r border-r-seance pr-6 text-6 font-bold text-bright">{article.tag}</p>
			<p class="text-6">{article.date}</p>
		</div>
		<h4 class="mt-5 text-5 text-seance">
			{article.title}
		</h4>
		<p class="my-8 text-6">
			{article.description}
		</p>
		<Cta label="Lire l'article" type="transparent" />
	</a>
</Hoverable>
