<script lang="ts">
  import { page } from '$app/stores';
  import { DateTime } from "luxon";

	import Header from "$lib/components/blocks/cas/Header.svelte";
	import Intro from "$lib/components/blocks/cas/Intro.svelte";
	import Prez from "$lib/components/blocks/cas/Prez.svelte";
	import ImgFull from '$lib/components/blocks/cas/ImgFull.svelte';
	import ContextNeeds from "$lib/components/blocks/cas/ContextNeeds.svelte";
	import Goals from "$lib/components/blocks/cas/Goals.svelte";
	import Actions from "$lib/components/blocks/cas/Actions.svelte";
	import OtherUseCases from "$lib/components/blocks/cas/OtherUseCases.svelte";
	import UseCases from "$lib/components/blocks/UseCases.svelte";
	import Results from "$lib/components/blocks/cas/Results.svelte";
	import Testimony from "$lib/components/blocks/cas/Testimony.svelte";
	import Meta from '$lib/components/utilities/Meta.svelte';
  import LDTag from '$lib/components/utilities/LDTag.svelte'
	import Articles from '$lib/components/blocks/Articles.svelte';

  let content: any = $page.data.content.attributes;
  let newCases: Array<any> = $page.data.otherUseCases;
  let articles: Array<any> = $page.data.articlesList;
  let cases: Array<any> = []
  let schema: any;
	let publishedDate: string;
	let updatedDate: string;

  let allClientUseCases = content.client.data.attributes.useCases.data
  
  let otherUseCases = allClientUseCases.filter((elm : any) => elm.attributes.slug !== content.slug)

  const siteURL = import.meta.env.VITE_SITE_URL
  const strapiURL = import.meta.env.VITE_STRAPI_URL;

  $: {
    content = $page.data.content.attributes
    articles = $page.data.articlesList;
    allClientUseCases = content.client.data.attributes.useCases.data
    otherUseCases = allClientUseCases.filter((elm : any) => elm.attributes.slug !== content.slug)
    newCases = $page.data.otherUseCases;
    shuffle(newCases)
    cases = newCases.slice(0, 3)
    publishedDate = DateTime.fromISO(content.publishedAt).toFormat('yyyy-LL-dd', { locale: "fr" })
    updatedDate = DateTime.fromISO(content.updatedAt).toFormat('yyyy-LL-dd', { locale: "fr" })

    schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "url": siteURL + $page.url.pathname,
      "@id": siteURL + $page.url.pathname + '#collectionpage',
      "datePublished": publishedDate,
      "dateModified": updatedDate !== '' ? updatedDate : publishedDate,
      "thumbnailUrl": strapiURL + content.mainImg.data.attributes.url,
      "name": content.title.replace(/&nbsp;/g, ' '),
      "description": content.intro,
      "inLanguage": "fr-FR",
      "creator": {
        "@type": "Organization",
        "@id": siteURL
      },
      "publisher": {
        "@type": "Organization",
        "@id": siteURL
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "@id": siteURL + $page.url.pathname + '#breadcrumb'
      },
      "isPartOf": {
        "@type": "WebSite",
        "@id": siteURL + '#website',
      }
    }
  }

  function shuffle(array:Array<any>) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
</script>

<LDTag {schema} />

<Meta meta={content.meta} />

<div class="flex flex-col gap-32 lg:gap-40 pb-32 lg:pb-40">
  <Header title={content.title} client={content.client.data.attributes} imgSite={content.imgSite.data}  />
  <Intro intro={content.intro} />
  <Prez client={content.client.data.attributes} duration={content.duration} gear={content.techLever} website={content.website} />
  <ImgFull mainImg={content.mainImg.data.attributes} title={content.title} />
  <ContextNeeds context={content.context} needs={content.needs} />
  <Goals goals={content.goals} goalsImg={content.img1.data.attributes} title={content.title} />
  <Actions actions={content.actions} actionsImg={content.img2.data.attributes} title={content.title} />
  {#if otherUseCases.length > 0}
  <OtherUseCases useCases={otherUseCases} />
  {/if}
  {#if content.client.data.attributes.avis}
  <Testimony testimony={content.client.data.attributes.avis} />
  {/if}
  <Results resultText={content.resultText} results={content.results} website={content.website} brand={content.client.data.attributes} />
  <UseCases {cases} firstText="Découvrez d’autres<br />" />
	{#if articles.length > 0}
		<Articles titleFirst="Les derniers articles de la catégorie" {articles} titleSecond={content.categories.data[0].attributes.title} newsUrl="/la-pause-cafe/{content.categories.data[0].attributes.slug}" />
	{/if}
</div>
