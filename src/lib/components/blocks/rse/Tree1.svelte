<script lang="ts">
  import { page } from '$app/stores';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import Line from '../utilities/Line.svelte';
	import Tree2 from '$lib/assets/svg/Tree2.svelte';
	import Cloud from '$lib/assets/svg/Cloud.svelte';

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

  const treeNation: any = $page.data.treeNation;

</script>

<div
	class="big-container flex items-center gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="flex-1 max-lg:order-2">
		<Line />
		<div class="relative">
      <span
        class="absolute whitespace-nowrap left-1/2 top-0 -z-10 w-screen -translate-y-1/2 transform text-1 text-seance opacity-0 {isInView
          ? 'animate-title'
          : ''}"
      >
        Tree Nation
      </span>
      <h2 class="w-full text-3 text-seance">
        La <span class="text-[5.7rem] leading-[3rem] text-bright font-normal font-highlight">mission</span> de Tree Nation
      </h2>
    </div>
		<div
			class="mb-16 mt-8 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Tree-Nation est une Organisation à but non lucratif, fondée en 2006 par Maxime Renaudin, qui permet aux citoyens comme aux entreprises de planter des arbres partout dans le monde et de compenser leurs émissions de CO2.
			</p>
			<p class="text-6 mt-12">
				Voici les chiffres de la forêt Beavers de Tree-Nation entièrement <span class="font-bold text-seance">grâce à vous</span> :
			</p>
			<div class="flex justify-between mt-2">
				<div class="flex-1 flex items-center gap-8 animate-delay-500 {isInView
          ? 'animate-fade'
          : ''}">
					<div>
						<Tree2 />
					</div>
					<div class="flex flex-col gap-2">
						<h3 class="font-bold text-5 text-bright">
							{treeNation.tree_count.toLocaleString()} arbres
						</h3>
						<p class="text-6">
							Total d'arbres plantés
						</p>
					</div>
				</div>
				<div class="flex-1 flex items-center gap-8 animate-delay-[750ms] {isInView
          ? 'animate-fade'
          : ''}">
					<div>
						<Cloud />
					</div>
					<div class="flex flex-col gap-2">
						<h3 class="font-bold text-5 text-bright">
							{treeNation.co2_compensated.toLocaleString()} tonnes
						</h3>
						<p class="text-6">
							Total de CO2 capturés
						</p>
					</div>
				</div>
			</div>
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
					src="/img/rse/tree-nation.png"
					alt="Tree Nation"
					class="w-full {isInViewImg ? 'animate-fade' : ''}"
				/>
        <div class="absolute rounded-full bg-white w-64 h-64 top-4 -left-24 flex justify-center items-center animate-delay-500 {isInView
          ? 'animate-fade'
          : 'opacity-0'}">
          <img src="/img/rse/tree-nation-logo.png" alt="Logo Tree Nation" class="max-w-[12.5rem] h-auto">
        </div>
        {/if}
		</div>
	</div>
</div>
