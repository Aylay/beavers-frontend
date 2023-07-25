<script lang="ts">
  import { page } from '$app/stores';

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
	import Meta from '$lib/components/utilities/Meta.svelte';

  let content: any = $page.data.content.attributes;
  
  let newCases: Array<any> = $page.data.otherUseCases;
  let cases: Array<any> = []

  let allClientUseCases = content.client.data.attributes.useCases.data
  
  let otherUseCases = allClientUseCases.filter((elm : any) => elm.attributes.slug !== content.slug)
  
  $: {
    content = $page.data.content.attributes
    allClientUseCases = content.client.data.attributes.useCases.data
    otherUseCases = allClientUseCases.filter((elm : any) => elm.attributes.slug !== content.slug)
    newCases = $page.data.otherUseCases;
    shuffle(newCases)
    cases = newCases.slice(0, 3)
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

<Meta meta={content.meta} />

<div class="flex flex-col gap-32 lg:gap-40 pb-32 lg:pb-40">
  <Header title={content.title} client={content.client.data.attributes.name} />
  <Intro intro={content.intro} />
  <Prez client={content.client.data.attributes} duration={content.duration} gear={content.techLever} website={content.website} />
  <ImgFull mainImg={content.mainImg.data.attributes} title={content.title} />
  <ContextNeeds context={content.context} needs={content.needs} />
  <Goals goals={content.goals} goalsImg={content.img1.data.attributes} title={content.title} />
  <Actions actions={content.actions} actionsImg={content.img2.data.attributes} title={content.title} />
  {#if otherUseCases.length > 0}
  <OtherUseCases useCases={otherUseCases} />
  {/if}
  <Results resultText={content.resultText} results={content.results} website={content.website} brand={content.client.data.attributes} />
  <UseCases {cases} firstText="Découvrez d’autres<br />" />
</div>
