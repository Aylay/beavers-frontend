<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import Hoverable from '$lib/components/utilities/Hoverable.svelte';
	import Arrow from '$lib/assets/svg/Arrow.svelte';
	import Contract from '$lib/assets/svg/Contract.svelte';
	import Pin from '$lib/assets/svg/Pin.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	export let job: any;

	function localisation() {
		let localisation = '';
		if (job.attributes.contract !== 'Freelance') {
			localisation = 'Fréjus & Télétravail';
		} else {
			localisation = 'Télétravail';
		}
		return localisation;
	}
</script>

<a
	class="w-full bg-rock transition-colors hover:bg-seance {isInView ? 'animate-fade' : 'opacity-0'}"
	href="/jobs/{job.attributes.slug}"
	title={job.attributes.title}
	use:inview={options}
	on:inview_change={handleChange}
>
	<Hoverable let:hovering={active}>
		<div class="flex items-center justify-between p-16">
			<div class="flex flex-1 flex-col gap-10">
				<h3 class="text-4 font-semibold transition-colors {active ? 'text-white' : 'text-seance'}">
					{job.attributes.title}
				</h3>
				<div class="flex gap-10 max-lg:flex-col lg:items-center lg:gap-20">
					<div class="flex items-center gap-8 lg:gap-4">
						<Contract newClass="fill-bright w-10 h-auto" />
						<p class="text-6 font-semibold">{job.attributes.contract}</p>
					</div>
					<div class="flex items-center gap-8 lg:gap-4">
						<Pin newClass="fill-bright w-10 lg:w-7 h-auto" />
						<p class="text-6 font-semibold">{localisation()}</p>
					</div>
				</div>
			</div>
			<div class={active ? 'animate-shake animate-infinite' : ''}>
				<Arrow newClass="transition-colors duration-500 fill-bright" />
			</div>
		</div>
	</Hoverable>
</a>
