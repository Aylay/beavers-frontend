<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import { DateTime } from 'luxon';

	import Hoverable from '$lib/components/utilities/Hoverable.svelte';

	export let article: any;
	export let i: number;
	let delay: number;
	if (i % 3 === 0) {
		delay = 0;
	} else if (i % 3 === 1) {
		delay = 200;
	} else if (i % 3 === 2) {
		delay = 400;
	}

	const strapiURL = import.meta.env.VITE_STRAPI_URL;

	let publishedDate = article.attributes.date
		? DateTime.fromFormat(article.attributes.date, 'yyyy-LL-dd', { locale: 'fr' }).toFormat(
				'dd LLLL yyyy',
				{ locale: 'fr' }
			)
		: DateTime.fromISO(article.attributes.publishedAt).toFormat('dd LLLL yyyy', { locale: 'fr' });

	$: {
		publishedDate = article.attributes.date
			? DateTime.fromFormat(article.attributes.date, 'yyyy-LL-dd', { locale: 'fr' }).toFormat(
					'dd LLLL yyyy',
					{ locale: 'fr' }
				)
			: DateTime.fromISO(article.attributes.publishedAt).toFormat('dd LLLL yyyy', { locale: 'fr' });
	}

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
		href="/la-pause-cafe/{article.attributes.category.data.attributes.slug}/{article.attributes
			.slug}"
		title={article.attributes.title}
		class="flex w-full flex-col {isInView ? 'animate-fade' : 'opacity-0'}"
		style="animation-delay: {delay}ms;"
		use:inview={options}
		on:inview_change={handleChange}
		data-sveltekit-preload-data
	>
		<Hoverable let:hovering={active}>
			<div
				class="relative h-96 w-full overflow-hidden rounded-lg"
				use:inview={optionsImg}
				on:inview_change={handleChangeImg}
			>
				{#if isInViewImg}
					<img
						src={article.attributes.mainImg.data.attributes.formats &&
						article.attributes.mainImg.data.attributes.formats.medium
							? strapiURL + article.attributes.mainImg.data.attributes.formats.medium.url
							: strapiURL + article.attributes.mainImg.data.attributes.url}
						alt={article.attributes.mainImg.data.attributes.alternativeText
							? article.attributes.mainImg.data.attributes.alternativeText
							: article.attributes.title}
						class="h-full w-full object-cover transition-transform duration-[3000ms] {isInViewImg
							? 'animate-fade'
							: ''} {active ? 'scale-125' : ''}"
					/>
				{/if}
			</div>
			<div class="mt-10 flex gap-6">
				<p class="border-r border-r-seance pr-6 text-6 font-bold text-bright">
					{article.attributes.category.data.attributes.title}
				</p>
				<p class="text-6">{publishedDate}</p>
			</div>
			<h4
				class="mt-5 text-5 transition-colors duration-300 {active ? 'text-bright' : 'text-seance'}"
			>
				{@html article.attributes.title.replace(' ?', '&nbsp;?')}
			</h4>
			<p class="my-8 text-6">
				{article.attributes.excerpt}
			</p>
			<div
				class="inline-block border-bright text-6 font-bold {active
					? 'bg-bright text-black'
					: 'bg-transparent text-white'} rounded-[3rem] border-2 px-10 py-4 transition-colors duration-300"
			>
				Lire l'article
			</div>
		</Hoverable>
	</a>
</div>
