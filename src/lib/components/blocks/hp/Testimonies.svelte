<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import SvelteMarkdown from 'svelte-markdown';

	import Line from '$lib/components/blocks/utilities/Line.svelte';
	import Title from '$lib/components/blocks/utilities/Title.svelte';
	import Quote from '$lib/assets/svg/Quote.svelte';
	import LDTag from '$lib/components/utilities/LDTag.svelte';

	export let reviewsList: Array<any>;

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const mdOptions = {
		breaks: true,
		gfm: true,
		headerIds: false
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	const testimoniesDisplayed = getMultipleRandom(reviewsList, 3);

	function getMultipleRandom(arr: Array<any>, num: number) {
		const shuffled = [...arr].sort(() => 0.5 - Math.random());

		return shuffled.slice(0, num);
	}

	let reviews: Array<any> = [];
	let ratingValue = 0;
	for (let i = 0; i < reviewsList.length; i++) {
		const review: any = reviewsList[i];
		const newReview: any = {
			'@type': 'Review',
			author: {
				'@type': 'Person',
				name: review.attributes.avis.prenom + ' ' + review.attributes.avis.nom,
				worksFor: review.attributes.name
			},
			reviewRating: {
				'@type': 'Rating',
				ratingValue: review.attributes.avis.note
			},
			name: 'Beavers',
			itemReviewed: {
				'@type': 'Organization',
				'@id': 'https://beavers-agency.fr'
			},
			reviewBody: review.attributes.avis.commentaire.replace(/<(.|\n)*?>/g, '')
		};
		ratingValue += review.attributes.avis.note;
		reviews.push(newReview);
	}

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'@id': 'https://beavers-agency.fr',
		review: reviews,
		aggregateRating: {
			'@type': 'AggregateRating',
			reviewCount: reviewsList.length,
			ratingValue: ratingValue / reviewsList.length
		}
	};
</script>

<LDTag {schema} />

<div class="big-container" use:inview={options} on:inview_change={handleChange}>
	<Line />
	<Title first="Nos clients" second="témoignent" />
	<div class="mt-20 flex gap-28 max-lg:flex-col max-lg:gap-40 max-lg:pt-10">
		{#each testimoniesDisplayed as testimony, i}
			<div
				class="relative flex-1 {isInView ? 'animate-fade' : 'opacity-0'}"
				style="animation-delay: {250 + i * 250}ms;"
			>
				<div
					class="absolute -top-16 -left-16 -z-10 flex w-full gap-8 max-lg:-top-20 max-lg:-left-4"
				>
					<Quote newClass="h-auto w-24" />
					<Quote newClass="h-auto w-24" />
				</div>
				<div class="mb-8 text-6">
					<SvelteMarkdown source={testimony.attributes.avis.commentaire} options={mdOptions} />
				</div>
				<p class="mb-1 font-highlight text-4 text-bright">
					{testimony.attributes.avis.prenom}
					{testimony.attributes.avis.nom}
				</p>
				<p class="text-6 font-bold text-seance">
					<a
						href="/cas/{testimony.attributes.useCases.data[
							testimony.attributes.useCases.data.length - 1
						].attributes.slug}"
						title={testimony.attributes.name}
						class="underline hover:no-underline"
					>
						{testimony.attributes.name}
					</a>
				</p>
			</div>
		{/each}
	</div>
</div>
