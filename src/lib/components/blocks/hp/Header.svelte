<script lang="ts">
	import ArrowBottom from "$lib/assets/svg/ArrowBottom.svelte";
import HeaderWave from "$lib/assets/svg/HeaderWave.svelte";
	import Mouse from "$lib/assets/svg/Mouse.svelte";
	import ProductionDigitale from "$lib/assets/svg/ProductionDigitale.svelte";
	import MarketingDigital from "$lib/assets/svg/MarketingDigital.svelte";
	import Hoverable from "$lib/components/utilities/Hoverable.svelte";


</script>

<div class="lg:h-screen bg-rock relative">
  <div class="big-container">
    <div class="lg:w-1/2 pt-[22%] pr-8 relative z-10">
      <h1 class="text-2">
        Le digital à pleines dents !
      </h1>
      <h2 class="text-6 font-bold text-bright mt-6">
        L'agence Beavers, spécialisée en création de sites internet, média en ligne et SEO, mobilise les compétences dont vous avez besoin dans le développement de votre écosystème digital.
      </h2>
      <div class="flex flex-col items-center w-8 mt-[calc(100vh*0.08)]">
        <Mouse newClass="h-auto w-full" color="#FFF" />
        <ArrowBottom  color="#FFF" />
      </div>
    </div>
  </div>
  <div class="absolute bottom-12 w-full z-20">
    <div class="big-container flex gap-16">
      <Hoverable let:hovering={active}>
        <a
          href="/production-digitale"
          title="Production digitale"
          class="flex gap-5 p-10 border-[2px] transition-colors rounded-sm items-center {active ? 'bg-white border-white' : 'bg-transparent border-bright'}"
        >
          <ProductionDigitale newClass="transition-colors {active ? 'fill-seance' : 'fill-bright'}" />
          <span class="text-5 transition-colors {active ? 'text-black' : 'text-white'}">
            Production<br />digitale
          </span>
        </a>
      </Hoverable>
      <Hoverable let:hovering={active}>
        <a
          href="/marketing-digital"
          title="Marketing digital"
          class="flex gap-5 p-10 border-[2px] transition-colors rounded-sm items-center {active ? 'bg-white border-white' : 'bg-transparent border-bright'}"
        >
          <MarketingDigital newClass="transition-colors {active ? 'fill-seance' : 'fill-bright'}" />
          <span class="text-5 transition-colors {active ? 'text-black' : 'text-white'}">
            Marketing<br />digital
          </span>
        </a>
      </Hoverable>
    </div>
  </div>
  <HeaderWave />
  <div class="absolute bottom-0 h-16 w-full bg-seance inset-x-0 z-0" />
</div>