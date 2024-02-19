<script lang="ts">
	import Habitat1 from "$lib/components/blocks/lp/Habitat1.svelte";
	import Habitat2 from "$lib/components/blocks/lp/Habitat2.svelte";
	import Habitat3 from "$lib/components/blocks/lp/Habitat3.svelte";
  import Header from "$lib/components/blocks/lp/Header.svelte";
	import MetaFront from "$lib/components/utilities/MetaFront.svelte";
	import HabitatUseCases from "$lib/components/blocks/lp/HabitatUseCases.svelte";

  const meta = {
    title: "Beavers, l'agence digitale média spécialisée des pro de l'habitat",
    description: "Découvrez les experts média des professionnels de l'aménagement intérieur et extérieur de l’habitat. Nous vous aidons à améliorer votre notoriété, accroître votre visibilité et augmenter vos ventes.",
    image: '/img/og-beavers-habitat.png'
  }
</script>

<MetaFront {meta} />

<div class="flex flex-col gap-48 lg:gap-96 pb-48 lg:pb-96">
  <Header />
  <Habitat1 />
  <Habitat2 />
  <Habitat3 />
  <HabitatUseCases />
</div>