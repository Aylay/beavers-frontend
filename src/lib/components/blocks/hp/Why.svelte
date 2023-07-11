<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Title from '../utilities/Title.svelte';
	import Line from '../utilities/Line.svelte';
	import Palette1 from '$lib/assets/svg/Palette1.svelte';
	import Megaphone from '$lib/assets/svg/Megaphone.svelte';
	import ArrowUp from '$lib/assets/svg/ArrowUp.svelte';
	import LDTag from '$lib/components/utilities/LDTag.svelte'

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
			question: 'Lorem ipsum dolor sit amet adipiscing consectetur ?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus aliquam velit sed varius. Proin sit amet erat vitae erat lacinia vulputate ut nec dolor. Integer ante quam, aliquet eu purus auctor, viverra elementum lacus.',
			isOpened: true
		},
		{
			question: 'Lorem ipsum dolor sit amet adipiscing consectetur ?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus aliquam velit sed varius. Proin sit amet erat vitae erat lacinia vulputate ut nec dolor. Integer ante quam, aliquet eu purus auctor, viverra elementum lacus.',
			isOpened: false
		},
		{
			question: 'Lorem ipsum dolor sit amet adipiscing consectetur ?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus aliquam velit sed varius. Proin sit amet erat vitae erat lacinia vulputate ut nec dolor. Integer ante quam, aliquet eu purus auctor, viverra elementum lacus.',
			isOpened: false
		}
	];

	const tops = ['top-0 lg:top-16', 'top-8 lg:top-24', 'top-16 lg:top-32', 'top-24 lg:top-40', 'top-32 lg:top-48'];

	const bottoms = ['-bottom-24', '-bottom-12', 'bottom-0', 'bottom-12', 'bottom-24'];

	let faqsSchema: Array<any> = []
	for (let i = 0; i < faqs.length; i++) {
		const faq: any = faqs[i];
		const newFaq: any = {
			"@type": "Question",
			"name": faq.question,
			"acceptedAnswer": {
				"@type": "Answer",
				"text": faq.answer
			}
		}
		faqsSchema.push(newFaq)
	}

	const schema = {
    '@context': 'https://schema.org',
		'@type': 'FAQPage',
		"mainEntity": faqsSchema
	}
</script>

<LDTag {schema} />

<div class="big-container flex gap-32 max-lg:flex-col lg:gap-40" use:inview={options} on:inview_change={handleChange}>
	<div class="flex-1 max-lg:order-2">
		<Line />
		<Title first="Lorem ipsum dolor<br />sit amet" second="adipiscing" />
		<div class="mt-16 flex flex-col">
			{#each faqs as faq, i}
				<div class="flex flex-1 flex-col gap-6 border-b border-solid border-jagger py-6">
					<div
						class="flex max-lg:flex-col cursor-pointer lg:items-center max-lg:gap-6 gap-12"
						on:click={() => (faq.isOpened = !faq.isOpened)}
					>
						<p class="w-32 text-[5rem] font-semibold leading-none text-bright">
							0{i + 1}<span class="text-seance">.</span>
						</p>
						<div class="flex flex-1 items-center justify-between gap-12">
							<p class="flex-1 text-[1.8rem] leading-[2.4rem] font-semibold">
								{faq.question}
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
					</div>
					{#if faq.isOpened}
						<p class="animate-fade-down text-6">
							{faq.answer}
						</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
	<div class="relative flex flex-1 justify-center max-lg:order-1">
		<div>
			<div
				class="relative w-full lg:max-w-[45rem]"
				use:inview={optionsImg}
				on:inview_change={handleChangeImg}
			>
				{#if isInViewImg}
					<img
						src="/img/hp/why.png"
						alt="Why ?"
						class="w-full {isInViewImg ? 'animate-fade' : ''}"
					/>
				{/if}
				<div
					class="absolute max-lg:bottom-8 bottom-16 max-lg:right-20 right-40 flex h-[11rem] w-[11.75rem] items-center justify-center"
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
						class="absolute right-8 lg:right-20 {bottom} {isInView ? 'animate-fade-up' : 'opacity-0'}"
						style="animation-delay: {500 + 200 * i}ms;"
					>
						<ArrowUp newClass="max-lg:max-w-[1.75rem] w-full h-auto" />
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
