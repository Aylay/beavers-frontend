<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import ArrowBottom from '$lib/assets/svg/ArrowBottom.svelte';
	import Mouse from '$lib/assets/svg/Mouse.svelte';
	import HeaderWave from '$lib/assets/svg/HeaderWave.svelte';
	import Sun from '$lib/assets/svg/Sun.svelte';
	import Wave2 from '$lib/assets/svg/Wave2.svelte';
	import Evo from '$lib/assets/svg/Evo.svelte';
	import Cookie from '$lib/assets/svg/Cookie.svelte';

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
			number: '2 480',
			text: 'Visites',
			percent: '40%'
		},
		{
			number: '120',
			text: 'Mots clés',
			percent: '80%'
		}
	];

	const line11: string = '<script lang="';
	const line12: string = '">';
	const line21: string = '.log("';
	const line22: string = '");';
	const line31 = '<';
	const line32 = 'script>';
</script>

<div class="h-screen bg-rock" use:inview={options} on:inview_change={handleChange}>
	<div class="big-container relative z-10 flex h-full items-center justify-center">
		<div class="lg:w-1/2">
			<h1 class="text-1-m max-lg:text-bright lg:text-2">
				Production<br />digitale
			</h1>
			<h2 class="mt-16 text-3 lg:hidden">Site internet. SEO. Newsletters.</h2>
			<div class="mt-[calc(100vh*0.1)] flex w-8 flex-col items-center gap-2">
				<Mouse newClass="h-auto w-full" color="#FFF" />
				<ArrowBottom newClass="animate-bounce" color="#FFF" />
			</div>
		</div>
		<div class="flex justify-center max-lg:hidden lg:w-1/2">
			<div class="relative h-[60rem] w-[60rem]">
				<Sun
					newClass="animate-once w-20 h-auto absolute left-1/3 top-[15%] animate-ping {isInView
						? 'animate-ping animate-delay-500'
						: 'opacity-0'}"
					color="#8013BD"
				/>
				<Sun
					newClass="animate-once w-24 h-auto absolute right-0 bottom-16 animate-ping {isInView
						? 'animate-ping animate-delay-1000'
						: 'opacity-0'}"
					color="#00FFDA"
				/>
				<div
					class="absolute bottom-[calc(50%-4rem)] left-0 h-[2px] w-20 -rotate-45 transform animate-fade bg-bright animate-delay-[1500ms]"
				/>
				<div
					class="absolute bottom-[calc(50%-6rem)] left-0 h-[2px] w-20 -rotate-45 transform animate-fade bg-bright animate-delay-[1800ms]"
				/>
				<div
					class="absolute top-0 right-[20%] h-[2px] w-20 -rotate-45 transform animate-fade bg-seance animate-delay-[2100ms]"
				/>
				<div
					class="absolute top-8 right-[20%] h-[2px] w-20 -rotate-45 transform animate-fade bg-seance animate-delay-[2400ms]"
				/>
				<Wave2
					newClass="absolute top-1/4 left-1/2 fill-bright animate-shake animate-delay-1000 transform -translate-x-1/2"
				/>
				<Wave2 newClass="absolute top-1/2 left-2/3 fill-seance animate-shake animate-delay-500" />

				<p
					class="absolute top-1/3 left-0 w-full max-w-[36rem] animate-fade bg-jaguar p-6 text-7 font-semibold animate-delay-[1500ms]"
				>
					{line11}<span class="text-bright">ts</span>{line12}<br />
					<span class="block pl-10"
						><span class="text-electric">console</span>{line21}<span class="text-bright"
							>Bienvenue</span
						>
						chez les <span class="text-electric">castors</span>{line22}</span
					>
					{line31}<span class="text-bright">/</span>{line32}
				</p>

				<div
					class="absolute top-2/3 left-1/2 flex w-full max-w-[42rem] -translate-x-1/2 -translate-y-1/2 transform animate-fade rounded-2xl bg-white py-6 animate-delay-1000"
				>
					{#each infos as info}
						<div
							class="border-opacity-20 flex flex-1 flex-col items-center gap-2 border-l border-jaguar px-10 first:border-0"
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
					class="absolute top-[8%] left-0 flex h-28 w-28 items-center justify-center rounded-3xl bg-white"
				>
					<Cookie
						newClass="h-12 w-auto animate-fade animate-infinite animate-duration-[4000ms] animate-ease-in-out animate-delay-[250ms]"
					/>
				</div>
				<p
					class="absolute top-[20%] right-0 flex h-28 w-28 items-center justify-center rounded-3xl bg-white"
				>
					<span
						class="animate-fade text-6 font-semibold text-seance animate-delay-[750ms] animate-duration-[4000ms] animate-ease-in-out animate-infinite"
					>
						.fr
					</span>
				</p>
			</div>
		</div>
	</div>
	<div class="absolute bottom-24 z-20 w-full max-lg:hidden">
		<div class="big-container">
			<h2 class="text-3">Site internet. SEO. Newsletters.</h2>
		</div>
	</div>
	<HeaderWave />
	<div class="absolute inset-x-0 bottom-0 z-0 h-20 w-full bg-seance max-lg:hidden" />
</div>
