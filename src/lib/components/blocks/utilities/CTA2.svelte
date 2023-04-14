<script lang="ts">
	import Arrow from '$lib/components/svg/Arrow.svelte';
	import Hoverable from '$lib/components/utilities/Hoverable.svelte';

	export let label = '';
	export let href = '';
	export let isInView: boolean = false;
	export let i: number = 0;

	const delay = (i + 1) * 200;
</script>

<Hoverable let:hovering={active}>
	<a {href} class="inline-block" title={label}>
		<div class="flex items-center gap-8">
			<span class="text-5">{label}</span>
			<div
				class="{isInView && !active ? 'animate-shake' : ''} {active ? 'animate-bounceRight' : ''}"
				style={isInView && !active ? 'animation-delay: ' + delay + 'ms;' : ''}
			>
				<Arrow />
			</div>
		</div>
	</a>
</Hoverable>
