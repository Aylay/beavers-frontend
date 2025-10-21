<script lang="ts">
	import Line from '../utilities/Line.svelte';
	import Title from '../utilities/Title.svelte';
	import ConfidenceLogo from './ConfidenceLogo.svelte';

	export let logos: Array<any>;
</script>

<div class="big-container">
	<Line />
	<Title first="Ils nous font" second="confiance" />
	<div class="mt-5 w-full lg:max-w-[calc(50%-75px)]">
		<p class="text-6">
			Ces clients font appel à Beavers pour mettre en place une stratégie de communication digitale
			efficace.
		</p>
	</div>
	<div class="mt-24 flex items-center justify-center gap-20 max-lg:flex-wrap lg:justify-between">
		{#each logos as logo, i}
			<ConfidenceLogo
				src={logo.src}
				newClass={logo.newClass}
				{i}
				href={logo.href}
				title={logo.title}
			/>
		{/each}
	</div>
</div>
