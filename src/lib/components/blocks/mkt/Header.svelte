<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import ArrowBottom from '$lib/assets/svg/ArrowBottom.svelte';
	import Mouse from '$lib/assets/svg/Mouse.svelte';
	import HeaderWave from '$lib/assets/svg/HeaderWave.svelte';
	import Bing from '$lib/assets/svg/social/Bing.svelte';
	import GAds from '$lib/assets/svg/social/GAds.svelte';
	import LinkedIn from '$lib/assets/svg/social/LinkedIn.svelte';
	import Meta from '$lib/assets/svg/social/Meta.svelte';
	import Tiktok from '$lib/assets/svg/social/Tiktok.svelte';
	import YouTube from '$lib/assets/svg/social/YouTube.svelte';
	import Apple from '$lib/assets/svg/social/Apple.svelte';
	import Pinterest from '$lib/assets/svg/social/Pinterest.svelte';
	import Sun from '$lib/assets/svg/Sun.svelte';
	import MultipleArrows from '$lib/assets/svg/MultipleArrows.svelte';
	import Wave2 from '$lib/assets/svg/Wave2.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div class="h-screen bg-rock" use:inview={options} on:inview_change={handleChange}>
	<div class="big-container relative z-10 flex h-full items-center justify-center">
		<div class="lg:w-1/2">
			<h1 class="text-1-m max-lg:text-bright lg:text-2">
				Marketing<br />digital
			</h1>
			<h2 class="mt-16 text-3 lg:hidden">Acquisition. Notoriété.</h2>
			<div class="mt-[calc(100vh*0.1)] flex w-8 flex-col items-center gap-2">
				<Mouse newClass="h-auto w-full" color="#FFF" />
				<ArrowBottom newClass="animate-bounce" color="#FFF" />
			</div>
		</div>
		<div class="flex justify-center max-lg:hidden lg:w-1/2">
			<div class="relative h-[41rem] w-[47rem]">
				<Sun
					newClass="animate-once w-20 h-auto absolute right-full top-0 animate-ping {isInView
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
					class="absolute bottom-1/4 -left-40 h-[2px] w-20 -rotate-45 transform animate-fade bg-bright animate-delay-[1500ms]"
				/>
				<div
					class="absolute bottom-[calc(25%-2rem)] -left-40 h-[2px] w-20 -rotate-45 transform animate-fade bg-bright animate-delay-[1800ms]"
				/>
				<div
					class="absolute -top-16 right-1/4 h-[2px] w-20 -rotate-45 transform animate-fade bg-seance animate-delay-[2100ms]"
				/>
				<div
					class="absolute top-[-6rem] right-1/4 h-[2px] w-20 -rotate-45 transform animate-fade bg-seance animate-delay-[2400ms]"
				/>
				<Wave2
					newClass="absolute top-0 left-1/2 fill-bright animate-shake animate-delay-1000 transform -translate-x-1/2"
				/>
				<Wave2
					newClass="absolute top-[85%] left-full fill-seance animate-shake animate-delay-500"
				/>

				<div
					class="absolute top-0 right-0 flex h-40 w-40 items-center justify-center rounded-3xl bg-white"
				>
					<Pinterest
						newClass="h-24 w-auto animate-fade animate-infinite animate-duration-[4000ms] animate-ease-in-out"
					/>
				</div>
				<div
					class="absolute top-1/2 right-0 flex h-40 w-40 items-center justify-center rounded-3xl bg-white"
				>
					<Tiktok
						newClass="h-24 w-auto animate-fade animate-infinite animate-duration-[4000ms] animate-ease-in-out animate-delay-[1250ms]"
					/>
				</div>
				<div
					class="absolute top-[12rem] left-0 flex h-40 w-40 items-center justify-center rounded-3xl bg-white"
				>
					<Apple
						newClass="h-24 w-auto animate-fade animate-infinite animate-duration-[4000ms] animate-ease-in-out animate-delay-500"
					/>
				</div>
				<div
					class="absolute top-[26rem] left-0 flex h-40 w-40 items-center justify-center rounded-3xl bg-white"
				>
					<Bing
						newClass="h-24 w-auto animate-fade animate-infinite animate-duration-[4000ms] animate-ease-in-out animate-delay-[1750ms]"
					/>
				</div>
				<div
					class="absolute top-[6rem] left-1/4 flex h-40 w-40 items-center justify-center rounded-3xl bg-white"
				>
					<GAds
						newClass="w-24 h-auto animate-fade animate-infinite animate-duration-[4000ms] animate-delay-1000 animate-ease-in-out"
					/>
				</div>
				<div
					class="absolute top-1/2 left-1/4 flex h-40 w-40 items-center justify-center rounded-3xl bg-white"
				>
					<LinkedIn
						newClass="h-24 w-auto animate-fade animate-infinite animate-duration-[4000ms] animate-ease-in-out animate-delay-[250ms]"
					/>
				</div>
				<div
					class="absolute top-[12rem] right-1/4 flex h-40 w-40 items-center justify-center rounded-3xl bg-white"
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
	<div class="absolute bottom-24 z-20 w-full max-lg:hidden">
		<div class="big-container">
			<h2 class="text-3">Acquisition. Notoriété.</h2>
		</div>
	</div>
	<HeaderWave />
	<div class="absolute inset-x-0 bottom-0 z-0 h-20 w-full bg-seance max-lg:hidden" />
</div>
