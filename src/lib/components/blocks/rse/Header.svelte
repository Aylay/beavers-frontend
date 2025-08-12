<script lang="ts">
	import Switch from '$lib/assets/svg/Switch.svelte';
	import Mouse from '$lib/assets/svg/Mouse.svelte';
	import ArrowBottom from '$lib/assets/svg/ArrowBottom.svelte';
	import Hoverable from '$lib/components/utilities/Hoverable.svelte';

	export let isOceanActive: boolean = true;
</script>

<div class="relative flex h-[calc(100vh-64px)] items-center justify-center bg-rock lg:h-screen">
	<div class="big-container relative z-40 flex flex-col items-center lg:z-20">
		<Hoverable newClass="rounded-full" let:hovering={active}>
			<button
				class="flex h-24 w-24 cursor-pointer items-center justify-center rounded-full transition-colors max-lg:rotate-90 max-lg:transform {active
					? 'bg-seance lg:bg-bright'
					: 'bg-seance'}"
				on:click={() => (isOceanActive = !isOceanActive)}
			>
				<Switch
					newClass=" w-14 h-auto animate-jump animate-infinite {active
						? 'fill-white lg:fill-seance'
						: 'fill-white'}"
				/>
			</button>
		</Hoverable>
		<h1 class="mt-10 text-center text-2 max-lg:hidden">
			<span class="block {!isOceanActive ? 'text-outline' : ''}">
				Beavers x The Ocean Cleanup
			</span>
			<span class="block {isOceanActive ? 'text-outline' : ''}"> Beavers x Tree-Nation </span>
		</h1>
		<div class="mt-20 flex w-full gap-40 max-lg:hidden">
			<div
				class="flex flex-1 flex-col items-end {isOceanActive
					? 'invisible opacity-0'
					: 'animate-fade'}"
			>
				<p class="text-right text-6 font-semibold text-bright">
					Beavers reverse 1% de son chiffre d'affaires auprès de l'association engagée
					écologiquement : Tree-Nation.
				</p>
				<div class="mt-[calc(100vh*0.08)] flex w-8 flex-col items-center gap-2">
					<Mouse newClass="h-auto w-full" color="#FFF" />
					<ArrowBottom newClass="animate-bounce" color="#FFF" />
				</div>
			</div>
			<div class="flex flex-1 flex-col {isOceanActive ? 'animate-fade' : 'invisible opacity-0'}">
				<p class="text-6 font-semibold text-bright">
					Beavers reverse 1% de son chiffre d'affaires auprès de l'association engagée
					écologiquement : The Ocean Cleanup.
				</p>
				<div class="mt-[calc(100vh*0.08)] flex w-8 flex-col items-center gap-2">
					<Mouse newClass="h-auto w-full" color="#FFF" />
					<ArrowBottom newClass="animate-bounce" color="#FFF" />
				</div>
			</div>
		</div>
	</div>
	<div
		class="absolute top-0 left-0 z-10 h-full w-full transition-opacity max-lg:h-1/2 lg:inset-y-0 lg:w-1/2 {isOceanActive
			? 'opacity-100'
			: 'opacity-[0.15]'}"
	>
		<picture>
			<source srcset="/img/soutiens/the-ocean-cleanup.webp" type="image/webp" />
			<source srcset="/img/soutiens/the-ocean-cleanup.jpg" type="image/jpeg" />
			<img
				src="/img/soutiens/the-ocean-cleanup.jpg"
				alt="The Ocean Cleanup"
				class="h-full w-full object-cover"
			/>
		</picture>
	</div>
	<div
		class="absolute bottom-0 left-0 z-10 h-full w-full transition-opacity max-lg:h-1/2 lg:inset-y-0 lg:right-0 lg:left-auto lg:w-1/2 {isOceanActive
			? 'opacity-[0.15]'
			: 'opacity-100'}"
	>
		<picture>
			<source srcset="/img/soutiens/tree-nation.webp" type="image/webp" />
			<source srcset="/img/soutiens/tree-nation.jpg" type="image/jpeg" />
			<img
				src="/img/soutiens/tree-nation.webp"
				alt="Tree Nation"
				class="h-full w-full object-cover"
			/>
		</picture>
	</div>

	<div
		class="absolute inset-x-0 top-0 z-20 flex h-1/2 w-full flex-col items-center justify-center gap-4 px-4 transition-opacity lg:hidden {!isOceanActive
			? 'opacity-100'
			: 'opacity-0'}"
	>
		<h2 class="text-center text-1-m">Beavers x Tree-Nation</h2>
		<p class="text-center text-6 font-semibold text-bright">
			Beavers reverse 1% de son chiffre d'affaires auprès de l'association engagée écologiquement :
			Tree-Nation.
		</p>
	</div>

	<div
		class="absolute inset-x-0 bottom-0 z-20 flex h-1/2 w-full flex-col items-center justify-center gap-4 px-4 transition-opacity lg:hidden {isOceanActive
			? 'opacity-100'
			: 'opacity-0'}"
	>
		<h2 class="text-center text-1-m">Beavers x The Ocean Cleanup</h2>
		<p class="text-center text-6 font-semibold text-bright">
			Beavers reverse 1% de son chiffre d'affaires auprès de l'association engagée écologiquement :
			The Ocean Cleanup.
		</p>
	</div>
</div>
