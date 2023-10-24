<script lang="ts">
  import { page } from '$app/stores';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Line from '$lib/components/blocks/utilities/Line.svelte';
	import Title from '$lib/components/blocks/utilities/Title.svelte';
	import UseCase from '$lib/components/blocks/lp/UseCase.svelte';

  const vzug: any = $page.data.vzug
  const ki: any = $page.data.ki
  const rudnik: any = $page.data.rudnik

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div class="big-container">
	<Line />
	<div class="flex max-lg:flex-col max-lg:gap-8 lg:items-end lg:justify-between">
		<div class="flex-1">
			<Title first="Nos références<br />" second="Ils nous font confiance" />
		</div>
	</div>
	<div
		use:inview={options}
		on:inview_change={handleChange}
		class="mt-16 grid max-lg:grid-cols-1 grid-cols-6 overflow-hidden transition-all delay-500 duration-700 {isInView
			? 'gap-14'
			: 'gap-0'}"
	>
		<UseCase useCase={vzug} col="lg:col-span-2" />
		<UseCase useCase={rudnik} col="lg:col-span-2" />
		<UseCase useCase={ki} col="lg:col-span-2" />
	</div>
</div>
