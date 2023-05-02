<script lang="ts">
	import Articles from '$lib/components/blocks/Articles.svelte';
	import Confidence from '$lib/components/blocks/hp/Confidence.svelte';
	import Manifesto from '$lib/components/blocks/hp/Manifesto.svelte';
	import MarketingDigital from '$lib/components/blocks/hp/MarketingDigital.svelte';
	import ProductionDigitale from '$lib/components/blocks/hp/ProductionDigitale.svelte';
	import Why from '$lib/components/blocks/hp/Why.svelte';
	import Support from '$lib/components/blocks/Support.svelte';
	import UseCases from '$lib/components/blocks/UseCases.svelte';
</script>

<div class="flex flex-col gap-16 lg:gap-96">
	<ProductionDigitale />
	<MarketingDigital />
	<Why />
	<UseCases />
	<Confidence />
	<Manifesto />
	<Support />
	<Articles />
</div>
