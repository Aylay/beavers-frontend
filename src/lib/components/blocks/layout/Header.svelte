<script lang="ts">
	import { fade } from 'svelte/transition';
	import { navigating, page } from '$app/state';

	import Hoverable from '$lib/components/utilities/Hoverable.svelte';
	import Logo from '$lib/assets/svg/Logo.svelte';
	import { onMount } from 'svelte';

	let menuOpened = $state<boolean>(false);
	let y = $state<number>(0);
	let menuWhite: boolean = page.data.menuWhite;
	let menuDark: boolean = page.data.menuDark;
	let isArticle: boolean = page.data.isArticle;
	let windowHeight = $state<number>(0);
	let widthScroll = $state<number>(0);

	const items = [
		{
			label: 'Accueil',
			title: "Beavers, l'agence digitale des castors",
			slug: '/'
		},
		{
			label: 'Marketing digital',
			title: 'Marketing digital',
			slug: '/marketing-digital'
		},
		{
			label: "L'agence",
			title: "L'agence média Beavers",
			slug: '/l-agence-beavers'
		},
		{
			label: 'RSE',
			title: "Le programme RSE de l'agence média Beavers",
			slug: '/programme-rse'
		},
		{
			label: 'Cas agence',
			title: 'Cas agence',
			slug: '/cas-agence'
		},
		{
			label: 'La pause café',
			title: 'La pause café',
			slug: '/la-pause-cafe'
		},
		{
			label: 'Jobs',
			title: 'Les jobs disponibles chez les castors',
			slug: '/jobs'
		},
		{
			label: 'Contactez-nous',
			title: "Contactez l'agence média Beavers",
			slug: '/contactez-nous'
		}
	];

	onMount(() => {
		windowHeight = window.innerHeight;

		if (isArticle) {
			window.onscroll = function () {
				progressScrollBar();
			};
		}
	});

	$effect(() => {
		if (navigating) {
			menuOpened = false;
			document.body.classList.remove('overflow-hidden');
			menuWhite = page.data.menuWhite;
			menuDark = page.data.menuDark;
			isArticle = page.data.isArticle;
		}
	});

	function progressScrollBar() {
		var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		widthScroll = (winScroll / height) * 100;
	}

	function openMobileMenu() {
		menuOpened = !menuOpened;
		document.body.classList.toggle('overflow-hidden');
	}
</script>

<svelte:window bind:scrollY={y} />

<header
	class="inset-x-0 top-0 w-full py-8 transition-colors {y > windowHeight
		? 'absolute bg-rock lg:fixed lg:animate-fade-down'
	: 'absolute bg-transparent'}  {y === 0 && menuOpened ? '!bg-rock' : ''} z-50 {(page.route.id && page.route.id === '/programme-rse')
	? 'max-lg:hidden'
	: ''}"
>
	<div class="big-container relative flex items-end justify-center gap-16 lg:justify-between">
		<a
			href="/"
			title="Beavers, l'agence digitale des castors"
			class="pb-2 transition-all duration-300 {menuOpened
				? 'invisible opacity-0'
				: 'visible opacity-100'}"
		>
			<Logo newClass="max-w-[13rem] w-full h-auto" />
		</a>
		<Hoverable newClass="max-lg:hidden" let:hovering={active}>
			<button
				class="flex cursor-pointer items-center justify-center gap-6"
				on:click={() => (menuOpened = !menuOpened)}
			>
				<p
					class="text-[1.8rem] leading-[2.2rem] font-bold uppercase {menuDark &&
					y < windowHeight &&
					!menuOpened
						? 'text-rock'
						: 'text-white'} {active ? 'animate-shake' : ''}"
				>
					{@html menuOpened ? '&nbsp;' : 'Menu'}
				</p>
				<div class="relative h-7 w-8">
					<span
						class="absolute inset-x-0 h-[2px] w-full rounded-lg {menuWhite &&
						y < windowHeight &&
						!menuOpened
							? 'bg-white'
							: 'bg-bright'} {menuDark && y < windowHeight && !menuOpened
							? 'bg-seance'
							: 'bg-bright'} transition-all duration-300 {menuOpened
							? 'top-1/2 -translate-y-1/2 rotate-45'
							: 'top-0'}"
					></span>
					<span
						class="absolute inset-x-0 h-[2px] w-full rounded-lg {menuWhite &&
						y < windowHeight &&
						!menuOpened
							? 'bg-white'
							: 'bg-bright'} {menuDark && y < windowHeight && !menuOpened
							? 'bg-seance'
							: 'bg-bright'} transform transition-all duration-300 {menuOpened
							? 'opacity-0'
							: 'top-1/2 -translate-y-1/2 opacity-100'}"
					></span>
					<span
						class="absolute inset-x-0 h-[2px] w-full rounded-lg {menuWhite &&
						y < windowHeight &&
						!menuOpened
							? 'bg-white'
							: 'bg-bright'} {menuDark && y < windowHeight && !menuOpened
							? 'bg-seance'
							: 'bg-bright'} duration-300 {menuOpened
							? 'top-1/2 -translate-y-1/2 -rotate-45'
							: 'bottom-0'}"
					></span>
				</div>
			</button>
		</Hoverable>
		<nav
			class="absolute inset-0 flex h-full w-[calc(100%-10rem)] items-end transition-all duration-300 max-lg:hidden {!menuOpened
				? 'invisible opacity-0'
				: 'visible opacity-100'}"
		>
			<Hoverable let:hovering={active} newClass="flex-1">
				<ul class="flex w-full justify-between">
					{#each items as item}
						<li>
							<a
								href={item.slug}
								title={item.title}
								class="text-6 font-semibold transition-opacity {page.route.id === item.slug
									? 'text-bright'
									: 'text-white'} {active
									? 'opacity-50 hover:opacity-100'
									: 'opacity-100'}"
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</Hoverable>
		</nav>
	</div>
	{#if isArticle && y > windowHeight}
		<div
			class="absolute top-full left-0 h-[8px] bg-gradient-to-r from-seance from-40% to-bright to-60% max-lg:hidden"
			style="width: {widthScroll}%;"
		></div>
	{/if}
</header>

<div
	class="fixed inset-x-0 bottom-0 z-[60] grid w-full grid-cols-5 items-center bg-seance lg:hidden"
>
	<button
		class="col-span-2 flex cursor-pointer items-center justify-center gap-6 bg-jagger py-8"
		on:click={() => openMobileMenu()}
	>
		<div class="relative h-7 w-8">
			<span
				class="absolute inset-x-0 h-[2px] w-full rounded-lg bg-white transition-all duration-300 {menuOpened
					? 'top-1/2 -translate-y-1/2 rotate-45'
					: 'top-0'}"
			></span>
			<span
				class="absolute inset-x-0 h-[2px] w-full transform rounded-lg bg-white transition-all duration-300 {menuOpened
					? 'opacity-0'
					: 'top-1/2 -translate-y-1/2 opacity-100'}"
			></span>
			<span
				class="absolute inset-x-0 h-[2px] w-full rounded-lg bg-white duration-300 {menuOpened
					? 'top-1/2 -translate-y-1/2 -rotate-45'
					: 'bottom-0'}"
			></span>
		</div>
		<p class="text-[2rem] leading-[2.4rem] font-bold text-bright uppercase">{menuOpened ? 'Fermer' : 'Menu'}</p>
	</button>
	<a href="/contactez-nous" class="col-span-3 text-center text-[2rem] leading-[2.4rem] font-bold">
		Contactez-nous !
	</a>
</div>

{#if menuOpened}
	<nav
		class="fixed inset-0 z-50 flex h-screen w-full flex-col justify-center gap-12 bg-rock px-8 pb-[6.4rem] lg:hidden"
		transition:fade
	>
		{#each items as item}
			{#if item.label !== 'Contactez-nous'}
				<a
					href={item.slug}
					title={item.title}
					class="text-4 font-semibold transition-colors {page.route.id === item.slug
						? 'text-bright'
						: 'text-white'}"
				>
					{item.label}
				</a>
			{/if}
		{/each}
	</nav>
{/if}
