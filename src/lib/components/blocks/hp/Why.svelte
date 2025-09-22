<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Title from '../utilities/Title.svelte';
	import Line from '../utilities/Line.svelte';
	import Palette1 from '$lib/assets/svg/Palette1.svelte';
	import Megaphone from '$lib/assets/svg/Megaphone.svelte';
	import ArrowUp from '$lib/assets/svg/ArrowUp.svelte';
	import LDTag from '$lib/components/utilities/LDTag.svelte';

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

	const faqs = [
		{
			question: 'Pour quelles raisons nous contacter&nbsp;?',
			answer:
				"Pour booster votre visibilité, générer de nouveaux clients et faire passer vos performances digitales à un autre niveau.<br />Que vous ayez besoin d’acquisition rapide ou de construire une stratégie long terme, vous êtes au bon endroit.",
			isOpened: true
		},
		{
			question: 'Quelles entreprises Beavers accompagne-t-elle&nbsp;?',
			answer:
				"Nous travaillons avec des moyennes et grandes entreprises ambitieuses, tous secteurs confondus.<br />Notre rôle : mettre en place des stratégies média efficaces, que vous soyez une marque B2C ou B2B.",
			isOpened: false
		},
		{
			question: 'Qu’est-ce qui fait la force de Beavers&nbsp;?',
			answer:
				"Une équipe de castors experte, réactive et passionnée, qui privilégie la transparence et la performance.<br />Nous construisons des stratégies sur mesure, toujours alignées avec vos objectifs business.",
			isOpened: false
		},
		{
			question: 'Comment Beavers répond à votre demande&nbsp;?',
			answer:
				"Vous nous expliquez vos objectifs, nous analysons votre marché et vos concurrents.<br />Ensuite, nous concevons un plan média adapté, en choisissant les leviers les plus pertinents pour atteindre vos résultats.",
			isOpened: false
		},
		{
			question: 'Comment se passe la mise en place&nbsp;?',
			answer:
				'Une fois la stratégie validée ensemble, nous lançons vos campagnes digitales (Search, Social, Display, Affiliation…).<br />Nos castors s’occupent de tout, avec une méthodologie claire et transparente.',
			isOpened: false
		},
		{
			question: 'Comment se déroule votre suivi&nbsp;?',
			answer:
				"Nous pilotons vos campagnes avec des optimisations continues.<br />Chaque mois, vous recevez un reporting basé sur vos KPI, accompagné de recommandations pour améliorer vos performances et préparer la suite.",
			isOpened: false
		},
		{
			question: 'Comment travaillez-vous avec des entreprises déjà structurées&nbsp;?',
			answer:
				"Nous nous intégrons facilement à vos équipes internes ou partenaires existants.<br />Notre rôle : renforcer vos dispositifs digitaux, accélérer vos performances et apporter un regard stratégique externe.",
			isOpened: false
		}
	];

	const tops = [
		'top-0 lg:top-16',
		'top-8 lg:top-24',
		'top-16 lg:top-32',
		'top-24 lg:top-40',
		'top-32 lg:top-48'
	];

	const bottoms = ['-bottom-24', '-bottom-12', 'bottom-0', 'bottom-12', 'bottom-24'];

	let faqsSchema: Array<any> = [];
	for (let i = 0; i < faqs.length; i++) {
		const faq: any = faqs[i];
		const newFaq: any = {
			'@type': 'Question',
			name: faq.question.replace(/&nbsp;/g, ' '),
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer
			}
		};
		faqsSchema.push(newFaq);
	}

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqsSchema
	};
</script>

<LDTag {schema} />

<div
	class="big-container flex gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="flex-1">
		<Line />
		<Title first="La relation avec" second="Beavers" />
		<div class="mt-16 flex flex-col">
			{#each faqs as faq, i}
				<div class="flex flex-1 flex-col gap-6 border-b border-solid border-jagger py-6">
					<button
						class="flex cursor-pointer gap-12 max-lg:flex-col max-lg:gap-6 lg:items-center"
						on:click={() => (faq.isOpened = !faq.isOpened)}
					>
						<p class="w-32 text-[5rem] leading-none font-semibold text-bright">
							0{i + 1}<span class="text-seance">.</span>
						</p>
						<div class="flex flex-1 items-center justify-between gap-12">
							<p class="flex-1 text-left text-[1.8rem] leading-[2.4rem] font-semibold">
								{@html faq.question}
							</p>
							<div class="relative h-8 w-8">
								<div
									class="absolute inset-x-0 top-1/2 h-[3px] w-full -translate-y-1/2 transform transition-colors {faq.isOpened
										? 'bg-seance'
										: 'bg-bright'}"
								/>
								<div
									class="absolute inset-y-0 left-1/2 h-full w-[3px] -translate-x-1/2 transform bg-bright transition-opacity {faq.isOpened
										? 'opacity-0'
										: 'opacity-100'}"
								/>
							</div>
						</div>
					</button>
					{#if faq.isOpened}
						<p class="animate-fade-down text-6">
							{@html faq.answer}
						</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
	<div class="relative flex flex-1 justify-center max-lg:hidden">
		<div>
			<div
				class="relative w-full lg:max-w-[45rem]"
				use:inview={optionsImg}
				on:inview_change={handleChangeImg}
			>
				{#if isInViewImg}
					<picture>
						<source srcset="/img/hp/why.webp" type="image/webp" />
						<source srcset="/img/hp/why.png" type="image/png" />
						<img
							src="/img/hp/why.png"
							alt="personne surlignant une feuille avec un téléphone au milieu"
							class="w-full {isInViewImg ? 'animate-fade' : ''}"
						/>
					</picture>
				{/if}
				<div
					class="absolute right-40 bottom-16 flex h-[11rem] w-[11.75rem] items-center justify-center max-lg:right-20 max-lg:bottom-8"
				>
					<Palette1 />
					<Megaphone
						newClass="absolute z-10 top-[2.2rem] left-[2.65rem] {isInView
							? 'animate-jump'
							: 'opacity-0'}"
					/>
				</div>

				{#each tops as top, i}
					<div
						class="absolute left-0 -translate-x-1/2 transform {top} {isInView
							? 'animate-fade-up'
							: 'opacity-0'}"
						style="animation-delay: {500 + 200 * i}ms;"
					>
						<ArrowUp newClass="max-w-[1rem] lg:max-w-[1.25rem] w-full h-auto" color="#00FFDA" />
					</div>
				{/each}

				{#each bottoms as bottom, i}
					<div
						class="absolute right-8 lg:right-20 {bottom} {isInView
							? 'animate-fade-up'
							: 'opacity-0'}"
						style="animation-delay: {500 + 200 * i}ms;"
					>
						<ArrowUp newClass="max-lg:max-w-[1.75rem] w-full h-auto" />
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
