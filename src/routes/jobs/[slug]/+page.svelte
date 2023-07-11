<script>
	import Header from "$lib/components/blocks/jobs/Header.svelte";
	import LeadForm from "$lib/components/blocks/jobs/LeadForm.svelte";

  const title = 'Quelles sont les mesures d’utilisation de Google Analytics suite à la décision de la CNIL ?'
  const words = [
    'CNIL', 'Google Analytics', 'RGDP', 'données personnelles'
  ]
  const contract = 'Freelance'
  const localisation = 'Télétravail'
  const when = 'Immédiatement'
  const id = 3
</script>

<div class="flex flex-col gap-32 lg:gap-40">
  <Header title={title} words={words} contract={contract} localisation={localisation} when={when} />
  <!-- BLOC ARTICLE -->
  <LeadForm id={id} />
</div>
