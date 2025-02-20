<script lang="ts">
  import { page } from '$app/stores';
  import { DateTime } from "luxon";

	import Header from "$lib/components/blocks/articles/Header.svelte";
	import Newsletter from '$lib/components/blocks/layout/Newsletter.svelte';
	import Articles from '$lib/components/blocks/Articles.svelte';
	import Share from "$lib/components/blocks/articles/Share.svelte";
	import Meta from '$lib/components/utilities/Meta.svelte';
	import LDTag from '$lib/components/utilities/LDTag.svelte'
	import ContentManager from '$lib/components/blocks/common/ContentManager.svelte';
	import UseCases from '$lib/components/blocks/UseCases.svelte';

  let content: any = $page.data.content.attributes;
	let contentGlobal: string = '';
	let articles = $page.data.otherArticles;
	let useCases = $page.data.useCasesList;
	let contentGlobalWords: number;
	let readingTime: number;
	let words: Array<string> = []
	let publishedHeaderDate: string;
	let updatedHeaderDate: string;
	let publishedOGDate: string;
	let updatedOGDate: string;
	let publishedDate: string;
	let updatedDate: string;
	let publishedISODate: string;
	let updatedISODate: string;
	let schema: any;
	let images: Array<string>;

  const siteURL = import.meta.env.VITE_SITE_URL
  const strapiURL = import.meta.env.VITE_STRAPI_URL;

	$: {
		content = $page.data.content.attributes;
		articles = $page.data.otherArticles;
		useCases = $page.data.useCasesList;

		contentGlobal = ''
		images = []
		images.push(strapiURL + content.mainImg.data.attributes.url)
		for (const elm of content.contentManager) {
			if (elm.text1) {
				contentGlobal += elm.text1 + ' '
			}
			if (elm.text2) {
				contentGlobal += elm.text2 + ' '
			}
			if (elm.citation) {
				contentGlobal += elm.citation + ' '
			}
			if (elm.img && elm.img.data) {
				images.push(strapiURL + elm.img.data.attributes.url)
			}
		}

		contentGlobalWords = contentGlobal.trim().split(/\s+/).length;
		readingTime = Math.ceil(contentGlobalWords / 225);

		words = []
		for (const word of content.words) {
			words.push(word.text)
		}

		if (content.date) {
			publishedHeaderDate = DateTime.fromFormat(content.date, 'yyyy-LL-dd', { locale: "fr" }).toFormat('dd LLL yyyy', { locale: "fr" })
			publishedDate = DateTime.fromFormat(content.date, 'yyyy-LL-dd', { locale: "fr" }).toFormat('yyyy-LL-dd', { locale: "fr" })
			publishedISODate = DateTime.fromFormat(content.date, 'yyyy-LL-dd', { locale: "fr" }).toISO()
			publishedOGDate = DateTime.fromFormat(content.date, 'yyyy-LL-dd', { locale: "fr" }).valueOf()

			if (DateTime.fromISO(content.updatedAt) > DateTime.fromFormat('31/07/2023', 'dd/LL/yyyy', { locale: "fr" })) {
				updatedOGDate = DateTime.fromISO(content.updatedAt).valueOf()
				updatedDate = DateTime.fromISO(content.updatedAt).toFormat('yyyy-LL-dd', { locale: "fr" })
				updatedISODate = DateTime.fromISO(content.updatedAt).toISO()
				
				if (DateTime.fromISO(content.updatedAt).toFormat('dd LLLL yyyy', { locale: "fr" }) === DateTime.fromISO(content.publishedAt).toFormat('dd LLLL yyyy', { locale: "fr" })) {
					updatedHeaderDate = ''
				} else {
					updatedHeaderDate = DateTime.fromISO(content.updatedAt).toFormat('dd LLLL yyyy', { locale: "fr" })
				}
			} else {
				updatedHeaderDate = ''
				updatedDate = ''
				updatedISODate = ''
				updatedOGDate = ''
			}
		} else {
			publishedHeaderDate = DateTime.fromISO(content.publishedAt).toFormat('dd LLL yyyy', { locale: "fr" })
			publishedDate = DateTime.fromISO(content.publishedAt).toFormat('yyyy-LL-dd', { locale: "fr" })
			publishedOGDate = DateTime.fromISO(content.publishedAt).valueOf()
			publishedISODate = DateTime.fromISO(content.publishedAt).toISO()

			updatedDate = DateTime.fromISO(content.updatedAt).toFormat('yyyy-LL-dd', { locale: "fr" })
			updatedOGDate = DateTime.fromISO(content.updatedAt).valueOf()
			updatedISODate = DateTime.fromISO(content.updatedAt).toISO()

			if (DateTime.fromISO(content.updatedAt).toFormat('dd LLLL yyyy', { locale: "fr" }) === DateTime.fromISO(content.publishedAt).toFormat('dd LLLL yyyy', { locale: "fr" })) {
				updatedHeaderDate = ''
			} else {
				updatedHeaderDate = DateTime.fromISO(content.updatedAt).toFormat('dd LLLL yyyy', { locale: "fr" })
			}
		}

		schema = {
			"@context": "https://schema.org",
    	"@graph": [
				{
					"@type": "BlogPosting",
					"@id": siteURL + $page.url.pathname + '#blogposting',
					"author": {
						"@type": "Person",
						"name": content.author.data.attributes.name,
						"url": content.author.data.attributes.url
					},
					"datePublished": publishedISODate,
					"dateModified": updatedISODate !== '' ? updatedISODate : publishedISODate,
					"headline": content.title.replace(/&nbsp;/g, ' '),
					"image": images,
					"creator": {
						"@type": "Organization",
						"@id": siteURL
					},
					"publisher": {
						"@type": "Organization",
						"@id": siteURL
					},
					"inLanguage": {
						"@type": "Language",
						"name": "French",
						"alternateName": "fr"
					},
					"articleBody": contentGlobal,
					"text": contentGlobal,
					"articleSection": content.category.data.attributes.title,
					"url": siteURL + $page.url.pathname
				},
				{
					"@type": "CollectionPage",
					"url": siteURL + $page.url.pathname,
					"@id": siteURL + $page.url.pathname + '#collectionpage',
					"datePublished": publishedDate,
					"dateModified": updatedDate !== '' ? updatedDate : publishedDate,
					"thumbnailUrl": strapiURL + content.mainImg.data.attributes.url,
					"name": content.title.replace(/&nbsp;/g, ' '),
					"description": content.intro.replace(/&nbsp;/g, ' '),
					"inLanguage": {
						"@type": "Language",
						"name": "French",
						"alternateName": "fr"
					},
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
					"hasPart": {
						"@type": "BlogPosting",
						"@id": siteURL + $page.url.pathname + '#blogposting',
					},
					"isPartOf": {
						"@type": "WebSite",
						"@id": siteURL + '#website',
					}
				}
			]
		}
	}
</script>

<LDTag {schema} />

<Meta meta={content.meta} />

<svelte:head>
	<meta name="author" content={content.author.data.attributes.name + ' - Beavers'} />
	<meta name="publish_date" property="og:publish_date" content={publishedOGDate}>
	<meta property="article:published_time" content={publishedOGDate} />
	<meta property="article:modified_time" content={updatedOGDate !== '' ? updatedOGDate : publishedOGDate} />
	<meta property="article:section" content={content.category.data.attributes.title} />
	<meta property="article:author" content={content.author.data.attributes.name + ' - Beavers'} />
	{#each words as word}
	<meta property="article:tag" content={word} />
	{/each}
	<meta name="twitter:label1" content="Écrit par" />
	<meta name="twitter:data1" content={content.author.data.attributes.name + ' - Beavers'} />
	<meta name="twitter:label2" content="Durée de lecture estimée" />
	<meta name="twitter:data2" content={readingTime + ' min'} />
</svelte:head>

<div class="flex flex-col gap-32 lg:gap-40 pb-32 lg:pb-40">
	<Header {words} title={content.title} category={content.category.data.attributes} {readingTime} author={content.author.data.attributes.name} intro={content.intro} img={content.mainImg.data.attributes} publishedDate={publishedHeaderDate} updatedDate={updatedHeaderDate} IA={content.IA} />
	{#if content.contentManager}
	<ContentManager content={content.contentManager} title={content.title} />
	{/if}

	<Share author={content.author.data.attributes} />

	{#if articles.length > 0}
		<Newsletter isArticle={true} />
		<Articles titleFirst="Les derniers articles de la catégorie" {articles} titleSecond={content.category.data.attributes.title} newsUrl="/la-pause-cafe/{content.category.data.attributes.slug}" />
	{/if}
	{#if useCases.length > 0}
	<UseCases cases={useCases} firstText="Le {content.category.data.attributes.title} et <br /> les" />
	{/if}
</div>