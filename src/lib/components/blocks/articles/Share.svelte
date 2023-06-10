<script lang="ts">
  import { onMount } from 'svelte';

	import Facebook from "$lib/assets/svg/Facebook.svelte";
	import Linkedin from "$lib/assets/svg/Linkedin.svelte";
	import Pinterest from "$lib/assets/svg/Pinterest.svelte";
	import WhatsApp from "$lib/assets/svg/WhatsApp.svelte";

  export let author: any;
  let url = ``;

  onMount(() => url = window.location.href);
</script>

<div class="flex big-container">
  <div class="flex-1 pr-20 pl-10 border-l-[2px] border-l-jagger flex gap-10">
      <img src={author.img.src} alt={author.img.alt ? author.img.alt : author.name} class="w-[12.5rem] h-auto" />
    <div>
      <p class="text-seance text-4 font-semibold mb-2">
        {author.name}
      </p>
      <p class="text-bright font-highlight text-4 mb-10">
        {author.job}
      </p>
      <p class="text-6">
        {author.text}
      </p>
    </div>
  </div>
  <div class="flex-1 pl-10 border-l-[2px] border-l-jagger">
    <p class="text-seance text-4 font-semibold mb-2">
      Partagez notre article
    </p>
    <p class="text-bright font-highlight text-4 mb-10">
      autour de vous !
    </p>
    <div class="flex gap-4">
      <a
      href="https://www.linkedin.com/shareArticle?url={url}"
      target="_blank"
      title="Partager l'article sur Linkedin"
      class="w-14 h-14 rounded-full transition-colors flex justify-center items-center hover:bg-seance bg-white"
    >
      <Linkedin newClass="w-7 h-auto" />
    </a>
    <a
      href="https://pinterest.com/pin/create/button/?url={url}"
      target="_blank"
      title="Partager l'article sur Pinterest"
      class="w-14 h-14 rounded-full transition-colors flex justify-center items-center hover:bg-seance bg-white"
    >
      <Pinterest newClass="w-auto h-7" />
    </a>
    <a
      href="https://www.facebook.com/sharer/sharer.php?u={url}"
      target="_blank"
      title="Partager l'article sur Facebook"
      class="w-14 h-14 rounded-full transition-colors flex justify-center items-center hover:bg-seance bg-white"
    >
      <Facebook newClass="w-auto h-7" />
    </a>
    <a
      href="https://api.whatsapp.com/send?text={url}"
      target="_blank"
      title="Partager l'article sur WhatsApp"
      class="w-14 h-14 rounded-full transition-colors flex justify-center items-center hover:bg-seance bg-white"
    >
      <WhatsApp newClass="w-auto h-7" />
    </a>
    </div>
  </div>
</div>