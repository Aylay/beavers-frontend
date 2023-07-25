<script lang="ts">
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import SvelteMarkdown from 'svelte-markdown';

  const mdOptions = {
    breaks: true,
    gfm: true,
    headerIds: false
  };

  let isInView: boolean;
  const options: Options = {
    unobserveOnEnter: true,
    rootMargin: '-50px'
  };

  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView = detail.inView;
  };

  let isInViewImg: boolean;
  const optionsImg: Options = {
    unobserveOnEnter: true,
    rootMargin: '50px'
  };

  const handleChangeImg = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInViewImg = detail.inView;
  };

  const strapiURL = import.meta.env.VITE_STRAPI_URL;
  
  export let block: any;
  export let title: string;

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

</script>

{#if block.layout === 'texte'}
  <div
    class="small-container content-style flex flex-col gap-8 {isInView ? 'animate-fade' : 'opacity-0'}"
    use:inview={options}
    on:inview_change={handleChange}
  >
    <SvelteMarkdown source={block.text1} options={mdOptions} />
  </div>
{/if}

{#if block.layout === 'image'}
  <div
    class="w-full big-container relative"
    use:inview={optionsImg}
    on:inview_change={handleChangeImg}
  >
    {#if isInViewImg}
      <img
				src={block.img.data.attributes.formats && block.img.data.attributes.formats.large ? strapiURL + block.img.data.attributes.formats.large.url : strapiURL + block.img.data.attributes.url}
        alt={block.img.data.attributes.alternativeText ? block.img.data.attributes.alternativeText : title.replace(/&nbsp;/g, ' ')}
        class="h-full w-full object-cover overflow-hidden rounded-lg {isInViewImg ? 'animate-fade' : 'opacity-0'}"
      />
    {/if}
    {#if block.legend}
      <div class="content-style absolute -bottom-12 w-full text-right">
        <SvelteMarkdown source={block.legend} options={mdOptions} />
      </div>
    {/if}
  </div>
{/if}

{#if block.layout === 'iframe'}
  <div
    class="w-full iframe-div big-container"
    use:inview={optionsImg}
    on:inview_change={handleChangeImg}
  >
    {#if isInViewImg}
      {@html block.iframe}
    {/if}
  </div>
{/if}

{#if block.layout === 'texte + texte'}
  <div
    class="small-container flex max-lg:flex-col gap-32 lg:gap-40"
    use:inview={options}
    on:inview_change={handleChange}
  >
    <div class="content-style flex-1 flex flex-col gap-8 {isInView ? 'animate-fade' : 'opacity-0'}">
      <SvelteMarkdown source={block.text1} options={mdOptions} />
    </div>
    <div class="content-style flex-1 flex flex-col gap-8 animate-delay-[250ms] {isInView ? 'animate-fade' : 'opacity-0'}">
      <SvelteMarkdown source={block.text2} options={mdOptions} />
    </div>
  </div>  
{/if}

{#if block.layout === 'texte + image'}
  <div
    class="big-container flex max-lg:flex-col gap-32 lg:gap-40"
    use:inview={optionsImg}
    on:inview_change={handleChangeImg}
  >
    <div
      class="content-style flex-1 flex flex-col gap-8 {isInViewImg ? 'animate-fade' : 'opacity-0'}"
    >
      <SvelteMarkdown source={block.text1} options={mdOptions} />
    </div>
    <div class="flex-1 relative">
      {#if isInViewImg}
        <img
          src={strapiURL + block.img.data.attributes.url}
          alt={block.img.data.attributes.alternativeText ? block.img.data.attributes.alternativeText : title.replace(/&nbsp;/g, ' ')}
          class="h-full w-full object-cover overflow-hidden rounded-lg animate-delay-[250ms] {isInViewImg ? 'animate-fade' : 'opacity-0'}"
        />
      {/if}
      {#if block.legend}
        <div class="content-style absolute -bottom-12 w-full text-right">
          <SvelteMarkdown source={block.legend} options={mdOptions} />
        </div>
      {/if}
    </div>
  </div>  
{/if}

{#if block.layout === 'image + texte'}
  <div
    class="big-container flex max-lg:flex-col gap-32 lg:gap-40"
    use:inview={optionsImg}
    on:inview_change={handleChangeImg}
  >
    <div class="flex-1 relative max-lg:order-2">
      {#if isInViewImg}
        <img
          src={strapiURL + block.img.data.attributes.url}
          alt={block.img.data.attributes.alternativeText ? block.img.data.attributes.alternativeText : title.replace(/&nbsp;/g, ' ')}
          class="h-full w-full object-cover overflow-hidden rounded-lg {isInViewImg ? 'animate-fade' : 'opacity-0'}"
        />
      {/if}
      {#if block.legend}
        <div class="content-style absolute -bottom-12 w-full max-lg:text-right">
          <SvelteMarkdown source={block.legend} options={mdOptions} />
        </div>
      {/if}
    </div>
    <div
      class="content-style flex-1 flex max-lg:order-1 flex-col gap-8 animate-delay-[250ms] {isInView ? 'animate-fade' : 'opacity-0'}"
      use:inview={options}
      on:inview_change={handleChange}
    >
      <SvelteMarkdown source={block.text1} options={mdOptions} />
    </div>
  </div>  
{/if}