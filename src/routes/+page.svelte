<script lang="ts">
	import Articles from '$lib/components/blocks/Articles.svelte';
	import Confidence from '$lib/components/blocks/Confidence.svelte';
	import UseCases from '$lib/components/blocks/UseCases.svelte';
</script>

<div class="h-[150rem]" />
<div class="flex flex-col gap-16 lg:gap-64">
	<UseCases />
	<Confidence />
	<Articles />
</div>
<div class="h-[150rem]" />
