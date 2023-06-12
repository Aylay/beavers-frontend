<script lang="ts">
  import Cta from '$lib/components/blocks/utilities/CTA.svelte';

  export let text1: string;
  export let text2: string;
  export let text3: string;
  export let text4: string;
  export let text5: string = '';
</script>

<div class="small-container text-center">
  <h2 class="uppercase lg:text-[8.5rem] lg:leading-none font-extrabold mb-4">
    {@html text1}<span class="block text-outline">{@html text2}</span>
  </h2>
  <p class="text-bright text-6 font-semibold pb-12 relative after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-60 after:h-[2px] after:bg-seance lg:px-8 mt-4">
    {@html text3}
  </p>
  <p class="mt-12 text-6 lg:px-8">
    {@html text4}
  </p>
  <div class="mt-20">
		<Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
  </div>
</div>