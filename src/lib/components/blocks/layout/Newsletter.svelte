<script lang="ts">
  export let isArticle: boolean = false;
</script>

<div class="{isArticle ? 'bg-bright' : 'bg-seance'} py-16 lg:py-20">
  <div class="big-container flex max-lg:flex-col max-lg:gap-8 lg:items-center justify-between">
    {#if isArticle}
    <p class="lg:w-3/5 text-3 text-jaguar">
      Recevez nos derniers <span class="font-highlight font-normal text-[5.7rem] leading-[3rem] text-seance">articles</span> dans notre newsletter LinkedIn.
    </p>
    {:else}
    <p class="lg:w-3/5 text-3 text-white">
      Inscrivez-vous à notre <span class="font-highlight font-normal text-[5.7rem] leading-[3rem] text-bright">newsletter</span> mensuelle sur LinkedIn.
    </p>
    {/if}
    <div class="lg:w-2/5 flex lg:justify-end">
      <a
        href="https://www.linkedin.com/newsletters/la-mensuelle-de-beavers-7176573139529670657/"
        target="_blank"
        title="Inscription à notre newsletter LinkedIn"
        class="flex items-center gap-8 bg-jaguar transition-colors hover:bg-white hover:text-seance text-6 font-bold rounded-[3rem] px-10 py-4 duration-500 {isArticle ? 'text-white' : 'text-bright'}"
      >
        S'inscrire
    </a>
    </div>
  </div>
</div>