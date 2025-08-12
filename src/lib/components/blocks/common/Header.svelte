<script lang="ts">
	import Sun from '$lib/assets/svg/Sun.svelte';
	import MultipleArrows from '$lib/assets/svg/MultipleArrows.svelte';
	import Wave2 from '$lib/assets/svg/Wave2.svelte';

	export let title: string;
	export let subtitle: string;
</script>

<div class="flex h-screen items-center justify-center bg-rock">
	<div class="big-container relative">
		<h1 class="text-outline text-center text-1-m lg:text-1">
			{title}
		</h1>
		<h2 class="mt-1 text-center text-4 font-semibold text-seance lg:text-3">
			{subtitle}
		</h2>
		<Sun
			newClass="animate-once w-24 h-auto absolute left-1/4 bottom-full animate-delay-500 animate-ping"
			color="#8013BD"
		/>
		<Sun
			newClass="animate-once w-28 h-auto absolute right-1/4 -bottom-48 animate-ping"
			color="#00FFDA"
		/>
		<MultipleArrows
			newClass="absolute -top-1/4 lg:top-1/4 right-[15%] fill-bright animate-delay-700 animate-fade"
		/>
		<Wave2
			newClass="absolute -top-1/2 lg:top-1/4 left-4 lg:left-0 fill-bright animate-delay-1000 animate-shake"
		/>
		<Wave2
			newClass="absolute -bottom-32 right-4 lg:right-0 fill-seance animate-delay-500 animate-shake"
		/>
		<div
			class="absolute top-[-12rem] right-1/4 h-[2px] w-20 -rotate-45 transform animate-fade bg-seance animate-delay-[1200ms]"
		></div>
		<div
			class="absolute top-[-14rem] right-1/4 h-[2px] w-20 -rotate-45 transform animate-fade bg-seance animate-delay-[1400ms]"
		></div>
		<div
			class="absolute bottom-[-12rem] left-1/4 h-[2px] w-20 -rotate-45 transform animate-fade bg-bright animate-delay-[1800ms]"
		></div>
		<div
			class="absolute bottom-[-14rem] left-1/4 h-[2px] w-20 -rotate-45 transform animate-fade bg-bright animate-delay-[2000ms]"
		></div>
	</div>
</div>
