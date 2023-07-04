<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Title from '../utilities/Title.svelte';
	import Line from '../utilities/Line.svelte';
	import Plus from '$lib/assets/svg/Plus.svelte';

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

	const pluss: Array<string> = [
		'bottom-32 left-0 lg:-left-16',
		'bottom-32 left-16 lg:left-0',
		'bottom-16 left-0 lg:-left-16',
		'bottom-16 left-16 lg:left-0',
		'bottom-16 left-32 lg:left-16',
		'bottom-16 left-48 lg:left-32',
		'bottom-16 left-60 lg:left-48',
		'bottom-0 left-0 lg:-left-16',
		'bottom-0 left-16 lg:left-0',
		'bottom-0 left-32 lg:left-16',
		'bottom-0 left-48 lg:left-32',
		'bottom-0 left-60 lg:left-48'
	];
</script>

<div
	class="big-container flex items-center gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="flex-1 max-lg:order-2">
		<Line />
		<Title first="Marketing Digital" />
		<h3
			class="mt-2 font-highlight text-4 text-bright lg:animate-delay-200 {isInView
				? 'lg:animate-fade-right'
				: 'lg:opacity-0'}"
		>
			Lorem ipsum dolor sit amet adipiscing
		</h3>
		<div
			class="mb-16 mt-8 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis hendrerit blandit.
				Maecenas mollis purus consequat imperdiet tincidunt. Ut sit amet lobortis lorem. Mauris non
				felis vel neque iaculis sollicitudin. Pellentesque eget lacus lacinia, congue turpis et,
				gravida dolor. Nunc placerat faucibus nisl et venenatis.
			</p>
			<p class="text-6">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis hendrerit blandit.
				Maecenas mollis purus consequat imperdiet tincidunt. Ut sit amet lobortis lorem. Mauris non
				felis vel neque iaculis sollicitudin. Pellentesque eget lacus lacinia, congue turpis et,
				gravida dolor. Nunc placerat faucibus nisl et venenatis.
			</p>
		</div>
	</div>
	<div class="relative flex flex-1 items-center justify-center max-lg:order-1">
		<div
			class="relative w-full lg:max-w-[45rem]"
			use:inview={optionsImg}
			on:inview_change={handleChangeImg}
		>
			{#if isInViewImg}
				<img
					src="/img/hp/production-digitale.png"
					alt="Production Digitale"
					class="w-full {isInViewImg ? 'animate-fade' : ''}"
				/>
			{/if}
			{#each pluss as plus, i}
				<div
					class="absolute h-auto w-[1.8rem] {plus} {isInView ? 'animate-fade' : 'opacity-0'}"
					style="animation-delay: {500 + 200 * i}ms;"
				>
					<Plus />
				</div>
			{/each}
		</div>
	</div>
</div>
