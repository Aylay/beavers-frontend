<script lang="ts">
	import Hoverable from '$lib/components/utilities/Hoverable.svelte';
	import Logo from '$lib/components/svg/LogoNespresso.svelte';

	export let newStep: number;
	const nav = [
		{
			label: 'Nespresso recycle',
			activeStep: [0, 1],
			step: 0
		},
		{
			label: 'Nespresso x veolia',
			activeStep: [2],
			step: 2
		},
		{
			label: 'Quiz',
			activeStep: [4, 5, 6, 7, 8],
			step: 4
		}
	];
</script>

<div
	class="absolute inset-x-0 top-20 z-40 flex w-full animate-fade-down justify-between px-[5%] animate-delay-1000 animate-ease-in-out"
>
	<div class="w-full max-w-xs cursor-pointer" on:click={() => (newStep = 0)}>
		<Logo />
	</div>
	<nav>
		<ul class="flex items-center gap-4 rounded-[2rem] bg-white p-11">
			{#each nav as item}
				<Hoverable let:hovering={active}>
					<li
						class="text-m lg:text-s cursor-pointer rounded-lg px-4 py-3 font-extrabold uppercase text-black transition-colors {active ||
						item.activeStep.includes(newStep)
							? 'lg:bg-black lg:text-white'
							: ''}"
						on:click={() => (newStep = item.step)}
					>
						{item.label}
					</li>
				</Hoverable>
			{/each}
		</ul>
	</nav>
</div>
