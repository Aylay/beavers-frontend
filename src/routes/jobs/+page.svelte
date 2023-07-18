<script lang="ts">
  import { page } from '$app/stores';
  import Header from "$lib/components/blocks/common/Header.svelte";
  import Job from "$lib/components/blocks/jobs/Job.svelte";
	import MetaFront from '$lib/components/utilities/MetaFront.svelte';

  const title = "Jobs"
  const subtitle = 'Vous pensez faire la différence ? Parlons-en !'

  const jobs: Array<any> = $page.data.content

  const meta = {
		title: "Tous les Cas agence de l'agence digitale Beavers",
		description: "Voici une présentation de tous les case studies de l'agence digitale Beavers, spécialisée en création de sites internet et marketing digital."
	}
</script>

<MetaFront {meta} />

<div class="flex flex-col gap-20 lg:gap-40 pb-20 lg:pb-40">
  <Header {title} {subtitle} />
  <div class="flex flex-col gap-16 big-container">
    {#each jobs as job}
      <Job {job} />
    {/each}
  </div>
</div>