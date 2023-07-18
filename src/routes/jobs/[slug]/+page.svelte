<script lang="ts">
  import { page } from '$app/stores';
	import { onMount } from 'svelte';

  import SvelteMarkdown from 'svelte-markdown';
  import { DateTime } from "luxon";

	import Header from "$lib/components/blocks/jobs/Header.svelte";
	import LeadForm from "$lib/components/blocks/jobs/LeadForm.svelte";
	import LDTag from '$lib/components/utilities/LDTag.svelte'
	import Meta from '$lib/components/utilities/Meta.svelte';

  const mdOptions = {
    breaks: true,
    gfm: true,
    headerIds: false
  };

  let content: any = $page.data.content.attributes;
  
  $: {
    content = $page.data.content.attributes
  }

  let contratType: Array<string> = []

  if (content.contract === "Alternance") {
    contratType = ['PART_TIME', 'INTERN']
  } else if (content.contract === "CDI") {
    contratType = ['FULL_TIME', 'CONTRACTOR']
  } else {
    contratType = ['PART_TIME', 'OTHER']
  }

  const siteURL = import.meta.env.VITE_SITE_URL

  let words: Array<string> = []
  for (const word of content.words) {
    words.push(word.text)
  }

  let when: string = ''
  if (DateTime.fromFormat(content.start, 'yyyy-LL-dd') < DateTime.now()) {
    when = 'Immédiatement'
  } else {
    when = DateTime.fromFormat(content.start, 'yyyy-LL-dd', { locale: "fr" }).toFormat('dd LLLL yyyy')
  }
  
  let schema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": content.title,
    "description": content.description,
    "identifier": {
      "@type": "PropertyValue",
      "name": "Beavers",
      "value": $page.params.slug + '-' + $page.data.content.id
    },
    "datePosted" : content.publishedAt,
    "employmentType" : contratType,
    "jobLocationType": "TELECOMMUTE",
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "France"
    },
    "hiringOrganization" : {
      "@type" : "Organization",
      "@id": siteURL,
      "name" : "Beavers",
      "sameAs" : siteURL,
      "logo": {
        "@type": "ImageObject",
        "url": siteURL + "/logo-beavers.png"
      }
    },
    "directApply": "true"
  }

  if (content.contract !== 'Freelance') {
    schema.jobLocation = {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Fréjus",
        "addressRegion": "Var",
        "postalCode": "83600",
        "addressCountry": "FR"
      }
    }
  }

  if (content.salaireMin > 0) {
    schema.baseSalary = {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": content.salaireMin,
        "maxValue": content.salaireMax ? content.salaireMax : 0,
        "unitText": "MONTH"
      }
    }
  }

  onMount (() => {
    addTargetBlank()
  })

  function addTargetBlank () {
    let links = document.querySelectorAll('.content-style a')

    for (const element of links) {
      if (element.hostname != window.location.hostname) {
          element.target = '_blank';
      }
    }
  }
  
  function localisation () {
    let localisation = ''
    if (content.contract !== "Freelance") {
      localisation = 'Fréjus & Télétravail'
    } else {
      localisation = 'Télétravail'
    }
    return localisation
  }

</script>

<LDTag {schema} />

<Meta meta={content.meta} />

<div class="flex flex-col gap-32 lg:gap-40">
  <Header title={content.title} {words} contract={content.contract} localisation={localisation()} {when} />
  <div class="big-container content-style flex flex-col gap-8">
    <SvelteMarkdown source={content.description} options={mdOptions} />
  </div>
  <LeadForm id={$page.data.content.id} jobTitle={content.title} />
</div>
