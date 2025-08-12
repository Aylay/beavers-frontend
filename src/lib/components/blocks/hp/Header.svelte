<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import ArrowBottom from '$lib/assets/svg/ArrowBottom.svelte';
	import Mouse from '$lib/assets/svg/Mouse.svelte';
	import HeaderWave from '$lib/assets/svg/HeaderWave.svelte';
	import Bing from '$lib/assets/svg/social/Bing.svelte';
	import GAds from '$lib/assets/svg/social/GAds.svelte';
	import Apple from '$lib/assets/svg/social/Apple.svelte';
	import LinkedIn from '$lib/assets/svg/social/LinkedIn.svelte';
	import Meta from '$lib/assets/svg/social/Meta.svelte';
	import Tiktok from '$lib/assets/svg/social/Tiktok.svelte';
	import YouTube from '$lib/assets/svg/social/YouTube.svelte';
	import Pinterest from '$lib/assets/svg/social/Pinterest.svelte';
	import Sun from '$lib/assets/svg/Sun.svelte';
	import MultipleArrows from '$lib/assets/svg/MultipleArrows.svelte';
	import Wave2 from '$lib/assets/svg/Wave2.svelte';
	import Evo from '$lib/assets/svg/Evo.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	const infos = [
		{
			number: '68',
			text: 'Commandes',
			percent: '25%'
		},
		{
			number: '4,5%',
			text: 'Taux de conversion',
			percent: '60%'
		},
		{
			number: '51 000€',
			text: "Chiffre d'affaires",
			percent: '37%'
		}
	];
</script>

<div class="relative h-screen bg-rock" use:inview={options} on:inview_change={handleChange}>
	<div class="big-container relative z-10 flex h-full items-center justify-center">
		<div class="lg:w-1/2">
			<h1 class="text-3">
				Construisons <br class="max-lg:hidden" />votre marketing digital
				<br class="max-lg:hidden" />du sol au plafond.
			</h1>
			<h2 class="mt-12 text-4 font-normal text-electric">Le digital à pleines dents&nbsp;!</h2>
			<h3 class="mt-6 pr-12 text-6 font-bold text-bright">
				L'agence Beavers, spécialiste du secteur de l'habitat, vous propose des solutions adaptées
				pour répondre à vos objectifs&nbsp;: de notoriété, de trafic et d'acquisition.
			</h3>
			<div class="mt-[calc(100vh*0.1)] flex w-8 flex-col items-center gap-2">
				<Mouse newClass="h-auto w-full max-lg:hidden" color="#FFF" />
				<ArrowBottom newClass="animate-bounce max-lg:h-16" color="#FFF" />
			</div>
		</div>
		<div class="flex justify-center max-lg:hidden lg:w-1/2">
			<div class="relative h-[60rem] w-[60rem]">
				<Sun
					newClass="animate-once w-20 h-auto absolute right-1/3 top-1/4 animate-ping {isInView
						? 'animate-ping animate-delay-500'
						: 'opacity-0'}"
					color="#8013BD"
				/>
				<Sun
					newClass="animate-once w-24 h-auto absolute right-0 top-full animate-ping {isInView
						? 'animate-ping animate-delay-1000'
						: 'opacity-0'}"
					color="#00FFDA"
				/>
				<MultipleArrows
					newClass="absolute -bottom-20 left-1/4 fill-bright animate-fade animate-delay-700"
				/>
				<div
					class="absolute bottom-[calc(50%+8rem)] left-0 h-[2px] w-20 -rotate-45 transform animate-fade bg-bright animate-delay-[1500ms]"
				/>
				<div
					class="absolute bottom-[calc(50%+6rem)] left-0 h-[2px] w-20 -rotate-45 transform animate-fade bg-bright animate-delay-[1800ms]"
				/>
				<div
					class="absolute top-0 right-[10%] h-[2px] w-20 -rotate-45 transform animate-fade bg-seance animate-delay-[2100ms]"
				/>
				<div
					class="absolute top-8 right-[10%] h-[2px] w-20 -rotate-45 transform animate-fade bg-seance animate-delay-[2400ms]"
				/>
				<Wave2
					newClass="absolute top-[5%] right-2/3 fill-bright animate-shake animate-delay-1000 transform -translate-x-1/2"
				/>
				<Wave2 newClass="absolute top-2/3 left-2/3 fill-seance animate-shake animate-delay-500" />

				<div
					class="absolute top-1/2 left-1/2 flex w-full max-w-[50rem] -translate-x-1/2 -translate-y-1/2 transform animate-fade rounded-2xl bg-white py-6 animate-delay-1000"
				>
					{#each infos as info}
						<div
							class="border-opacity-20 flex flex-col items-center gap-2 border-l border-jaguar px-10 first:border-0"
						>
							<p class="text-5 leading-none font-bold text-seance">
								{info.number}
							</p>
							<p class="text-center text-7 leading-none font-bold text-black">
								{info.text}
							</p>
							<div class="my-2 h-[1px] w-8 bg-jaguar" />
							<div class="flex items-center justify-center gap-2">
								<Evo />
								<p class="text-7 font-bold text-caribbean">
									{info.percent}
								</p>
							</div>
						</div>
					{/each}
				</div>

				<div
					class="absolute top-[20%] right-0 flex h-40 w-40 items-center justify-center rounded-3xl bg-white"
				>
					<Pinterest
						newClass="h-24 w-auto animate-fade animate-infinite animate-duration-[4000ms] animate-ease-in-out"
					/>
				</div>
				<div
					class="absolute top-[61%] right-0 flex h-40 w-40 items-center justify-center rounded-3xl bg-white"
				>
					<Tiktok
						newClass="h-24 w-auto animate-fade animate-infinite animate-duration-[4000ms] animate-ease-in-out animate-delay-[1250ms]"
					/>
				</div>
				<div
					class="absolute top-[8%] left-0 flex h-40 w-40 items-center justify-center rounded-3xl bg-white"
				>
					<Apple
						newClass="h-24 w-auto animate-fade animate-infinite animate-duration-[4000ms] animate-ease-in-out animate-delay-500"
					/>
				</div>
				<div
					class="absolute top-2/3 left-0 flex h-40 w-40 items-center justify-center rounded-3xl bg-white"
				>
					<Bing
						newClass="h-24 w-auto animate-fade animate-infinite animate-duration-[4000ms] animate-ease-in-out animate-delay-[1750ms]"
					/>
				</div>
				<div
					class="absolute top-[18%] left-1/4 flex h-40 w-40 items-center justify-center rounded-3xl bg-white"
				>
					<GAds
						newClass="w-24 h-auto animate-fade animate-infinite animate-duration-[4000ms] animate-delay-1000 animate-ease-in-out"
					/>
				</div>
				<div
					class="absolute top-3/4 left-1/4 flex h-40 w-40 items-center justify-center rounded-3xl bg-white"
				>
					<LinkedIn
						newClass="h-24 w-auto animate-fade animate-infinite animate-duration-[4000ms] animate-ease-in-out animate-delay-[250ms]"
					/>
				</div>
				<div
					class="absolute top-0 right-1/3 flex h-40 w-40 items-center justify-center rounded-3xl bg-white"
				>
					<Meta
						newClass="w-24 h-auto animate-fade animate-infinite animate-duration-[4000ms] animate-ease-in-out animate-delay-[1500ms]"
					/>
				</div>
				<div
					class="absolute right-1/4 bottom-0 flex h-40 w-40 items-center justify-center rounded-3xl bg-white"
				>
					<YouTube
						newClass="h-24 w-auto animate-fade animate-infinite animate-duration-[4000ms] animate-ease-in-out animate-delay-[750ms]"
					/>
				</div>
			</div>
		</div>
	</div>
	<HeaderWave />
	<div class="absolute inset-x-0 bottom-0 z-0 h-20 w-full bg-seance max-lg:hidden" />
</div>
