<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import { FxReveal as Img } from '@zerodevx/svelte-img'

	import Title from '../utilities/Title.svelte';
	import Line from '../utilities/Line.svelte';
	import Palette1 from '$lib/components/svg/Palette1.svelte';
	import Cta from '../utilities/CTA.svelte';
	import Baguette from '$lib/components/svg/Baguette.svelte';

	import manifesto1 from '$lib/assets/hp/manifesto-1.png?run&width=450&lqip=0'

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-200px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	const tops = ['-left-8', '-left-4', 'left-0', 'left-4'];

	const bottoms = ['right-28', 'right-20', 'right-12', 'right-4'];
</script>

<div class="big-container flex gap-40" use:inview={options} on:inview_change={handleChange}>
	<div class="flex-1">
		<Line />
		<Title first="Notre" second="manifesto" />
		<div
			class="mb-16 mt-8 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Chez Beavers, on est passionné, on aime l'humain, se lever le matin pour du fun et pour vous
				proposer nos idées, qui parfois partent loin, mais dans l'optique de toujours nous
				challenger et d'apporter ce truc en plus qui vous démarquera de vos concurrents.
			</p>
			<p class="text-6">
				Cependant, on garde les pieds sur terre pour vous élaborer une stratégie qui corresponde à
				vos enjeux tout en respectant vos moyens.
			</p>
		</div>
		<div class="animate-delay-700 {isInView ? 'animate-fade' : 'opacity-0'}">
			<Cta label="Découvrir l'équipe" href="/agence-beavers" type="transparent" />
		</div>
	</div>
	<div class="relative flex flex-1 justify-center">
		<div>
				<div class="relative w-full max-w-[45rem]">
					<Img
						src={manifesto1}
						alt="Manifesto"
						class="w-full"
					/>
					<div
						class="absolute top-16 left-24 flex h-[11rem] w-[11.75rem] items-center justify-center"
					>
						<Palette1 newClass="transform rotate-180" />
						<Baguette 
							newClass="absolute z-10 bottom-10 right-10 {isInView
								? 'animate-jump'
								: 'opacity-0'}"
						/>
					</div>

					{#each tops as top, i}
						<div class="w-28 h-[1.5px] absolute bg-seance transform -rotate-45 top-12 {top} {isInView
							? 'animate-fade'
							: 'opacity-0'}"
							style="animation-delay: {200 * i}ms;" />
					{/each}

					{#each bottoms as bottom, i}
						<div class="w-44 h-[3px] absolute bg-bright transform -rotate-45 -bottom-4 {bottom} {isInView
							? 'animate-fade'
							: 'opacity-0'}"
							style="animation-delay: {800 + 200 * i}ms;" />
					{/each}
				</div>
		</div>
	</div>
</div>
