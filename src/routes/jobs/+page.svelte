<script lang="ts">
  import Header from "$lib/components/blocks/common/Header.svelte";
  import Job from "$lib/components/blocks/jobs/Job.svelte";

  const title = "Jobs"
  const subtitle = 'Vous pensez faire la différence ? Parlons-en !'

  const jobs: Array<any> = [
    {
      title: 'Apporteur.se d’affaires / Commercial.e New Biz Web',
      slug: 'coucou',
      contract: 'Freelance',
      localisation: 'Télétravail'
    }
  ]
</script>

<div class="flex flex-col gap-20 lg:gap-40 pb-20 lg:pb-40">
  <Header {title} {subtitle} />
  <div class="flex flex-col gap-16 big-container">
    {#each jobs as job}
      <Job {job} />
    {/each}
  </div>
</div>