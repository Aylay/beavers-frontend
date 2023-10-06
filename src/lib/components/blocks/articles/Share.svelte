<script lang="ts">
  import { onMount } from 'svelte';

	import Facebook from "$lib/assets/svg/Facebook.svelte";
	import Linkedin from "$lib/assets/svg/Linkedin.svelte";
	import Pinterest from "$lib/assets/svg/Pinterest.svelte";
	import WhatsApp from "$lib/assets/svg/WhatsApp.svelte";
	import SvelteMarkdown from 'svelte-markdown';

  const strapiURL = import.meta.env.VITE_STRAPI_URL;

  const mdOptions = {
    breaks: true,
    gfm: true,
    headerIds: false
  };

  export let author: any;
  let url = ``;

  onMount(() => url = window.location.href);
</script>

<div class="flex big-container max-lg:flex-col max-lg:gap-16">
  <div class="flex-1 lg:pr-20 lg:pl-10 lg:border-l-[2px] border-l-jagger flex max-lg:gap-6 gap-10">
    <div class="max-lg:w-32 w-[12.5rem]">
      <img src={strapiURL + author.img.data.attributes.url} alt={author.img.data.attributes.alternativeText ? author.img.data.attributes.alternativeText : author.name} class="w-full h-auto" />
    </div>
    <div class="flex-1">
      <p class="text-seance text-4 font-semibold mb-2">
        {author.name}
      </p>
      <p class="text-bright font-highlight text-4 max-lg:mb-2 mb-10">
        {author.job}
      </p>
      <p class="content-style">
        <SvelteMarkdown source={author.text} options={mdOptions} />
      </p>
    </div>
  </div>
  <div class="flex-1 lg:pl-10 lg:border-l-[2px] border-l-jagger">
    <p class="text-seance text-4 font-semibold mb-2">
      Partagez notre article
    </p>
    <p class="text-bright font-highlight text-4 mb-10">
      autour de vous !
    </p>
    <div class="flex gap-8 lg:gap-4">
      <a
        href="https://www.linkedin.com/sharing/share-offsite/?url={url}"
        target="_blank"
        title="Partager l'article sur Linkedin"
        class="max-lg:w-20 w-14 max-lg:h-20 h-14 rounded-full transition-colors flex justify-center items-center hover:bg-seance bg-white"
      >
        <Linkedin newClass="w-10 lg:w-7 h-auto" />
      </a>
      <a
        href="https://pinterest.com/pin/create/button/?url={url}"
        target="_blank"
        title="Partager l'article sur Pinterest"
        class="max-lg:w-20 w-14 max-lg:h-20 h-14 rounded-full transition-colors flex justify-center items-center hover:bg-seance bg-white"
      >
        <Pinterest newClass="w-auto h-10 lg:h-7" />
      </a>
      <a
        href="https://www.facebook.com/sharer/sharer.php?u={url}"
        target="_blank"
        title="Partager l'article sur Facebook"
        class="max-lg:w-20 w-14 max-lg:h-20 h-14 rounded-full transition-colors flex justify-center items-center hover:bg-seance bg-white"
      >
        <Facebook newClass="w-auto h-10 lg:h-7" />
      </a>
      <a
        href="https://api.whatsapp.com/send?text={url}"
        target="_blank"
        title="Partager l'article sur WhatsApp"
        class="max-lg:w-20 w-14 max-lg:h-20 h-14 rounded-full transition-colors flex justify-center items-center hover:bg-seance bg-white"
      >
        <WhatsApp newClass="w-auto h-10 lg:h-7" />
      </a>
    </div>
  </div>
</div>