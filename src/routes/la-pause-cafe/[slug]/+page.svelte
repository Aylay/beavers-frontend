<script lang="ts">
  import { page } from '$app/stores';
  import Header from "$lib/components/blocks/blog/HeaderCat.svelte";
	import Article from '$lib/components/blocks/common/Article.svelte';
	import Meta from '$lib/components/utilities/Meta.svelte';
  
  let content: any = $page.data.content.attributes;
  
  $: {
    content = $page.data.content.attributes
  }

	let words: Array<string> = []
	for (const word of content.words) {
		words.push(word.text)
	}
</script>

<Meta meta={content.meta} />

<div class="flex flex-col">
  <Header title={content.title} subTitle={content.subTitle} {words} intro={content.intro} />
	{#if content.articles && content.articles.data}
  <div class="big-container py-32 lg:py-64 grid max-lg:grid-cols-1 grid-cols-3 gap-14">
		{#each content.articles.data as article, i}
			<Article {article} {i} />
		{/each}
	</div>
	{/if}
</div>