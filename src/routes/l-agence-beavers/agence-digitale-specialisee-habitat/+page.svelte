<script lang="ts">
	import Habitat1 from "$lib/components/blocks/lp/Habitat1.svelte";
	import Habitat2 from "$lib/components/blocks/lp/Habitat2.svelte";
	import Habitat3 from "$lib/components/blocks/lp/Habitat3.svelte";
  import Header from "$lib/components/blocks/lp/Header.svelte";
	import MetaFront from "$lib/components/utilities/MetaFront.svelte";
	import HabitatUseCases from "$lib/components/blocks/lp/HabitatUseCases.svelte";

  const meta = {
    title: "Agence digitale experte du secteur habitat",
    description: "Beavers est une agence digitale experte du secteur habitat : SEA, social ads, création de sites et contenus pour attirer des clients qualifiés.",
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