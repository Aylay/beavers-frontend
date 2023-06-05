<script lang="ts">
	import Articles from '$lib/components/blocks/Articles.svelte';
	import Confidence from '$lib/components/blocks/hp/Confidence.svelte';
	import Manifesto from '$lib/components/blocks/hp/Manifesto1.svelte';
	import Manifesto2 from '$lib/components/blocks/hp/Manifesto2.svelte';
	import MarketingDigital from '$lib/components/blocks/hp/MarketingDigital.svelte';
	import ProductionDigitale from '$lib/components/blocks/hp/ProductionDigitale.svelte';
	import Why from '$lib/components/blocks/hp/Why.svelte';
	import Support from '$lib/components/blocks/hp/Support.svelte';
	import UseCases from '$lib/components/blocks/UseCases.svelte';
	import Testimonies from '$lib/components/blocks/hp/Testimonies.svelte';
</script>

<div class="flex flex-col gap-32 lg:gap-96 max-lg:px-4 pb-64">
	<ProductionDigitale />
	<MarketingDigital />
	<Why />
	<UseCases />
	<Confidence />
	<Manifesto />
	<Manifesto2 />
	<Testimonies />
	<Support />
	<Articles />
</div>
