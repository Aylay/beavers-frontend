<script lang="ts">
  import { page } from '$app/stores';

	import Meta from '$lib/components/utilities/Meta.svelte';
  import Header from "$lib/components/blocks/agence/page/Header.svelte";
  import ContentManager from '$lib/components/blocks/common/ContentManager.svelte';
	import UseCases from '$lib/components/blocks/UseCases.svelte';

  let content: any = $page.data.content.attributes;
  
  $: {
    content = $page.data.content.attributes
  }
</script>

<Meta meta={content.meta} />

<div class="flex flex-col gap-32 lg:gap-40 pb-32 lg:pb-40">
	<Header title={content.title} subtitle={content.subTitle} intro={content.intro} words={content.words} />
  {#if content.contentManager}
	<ContentManager content={content.contentManager} title={content.title} />
	{/if}
	{#if content.useCases && content.useCases.data && content.useCases.data.length > 0}
	<UseCases cases={content.useCases.data} firstText="Quelques" />
	{/if}
</div>