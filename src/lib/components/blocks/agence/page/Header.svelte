<script lang="ts">
	import Line from "$lib/components/blocks/utilities/Line.svelte";
  import LeadForm from "$lib/components/blocks/agence/page/LeadForm.svelte";

  export let title: string;
  export let subtitle: string;
  export let intro: string;
  export let words: Array<string>;

  let allWords: Array<string> = []
  for (const word of words) {
    const newWords = word.text.split(' ');
    allWords = allWords.concat(newWords)
  }
  allWords = allWords.concat(allWords)
  </script>

  <div class="lg:h-screen bg-rock relative overflow-hidden max-lg:pt-60 max-lg:pb-28 flex justify-center items-center">
    <div class="big-container items-center relative z-20 flex justify-between gap-16 lg:gap-32 max-lg:flex-col">
      <div class="flex-1">
        <Line />
        <h1 class="text-3 mb-4">
          {@html title}
        </h1>
        <h2 class="text-seance text-4 font-semibold mb-16">
          {@html subtitle}
        </h2>
        <h3 class="text-6 text-bright font-semibold mb-16">
          {@html intro}
        </h3>
      </div>
      <div class="bg-rock py-20 lg:px-20 lg:max-w-[73rem] w-full">
        <LeadForm {title} />
      </div>
    </div>
  
    <div class="max-lg:hidden w-1/3 bg-bright max-h-full overflow-hidden absolute z-0 inset-y-0 right-0 flex items-center">
      <div class="w-full transform scale-105">
        {#each allWords as word, i}
        <span 
          class="text-1 text-bright-turquoise tracking-wider leading-none break-all animate-fade" 
          style="animation-delay: {150 * i}ms;"
        >
          {word}
        </span>
        {/each}
      </div>
    </div>
  </div>