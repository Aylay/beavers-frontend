<script lang="ts">
	import ArrowBottom from "$lib/assets/svg/ArrowBottom.svelte";
	import Mouse from "$lib/assets/svg/Mouse.svelte";

  export let title: string;
  export let subtitle: string;
  export let intro: string;
  export let words: Array<string>;

  let allWords: Array<string> = []
  for (const word of words) {
    const newWords = word.split(' ');
    allWords = allWords.concat(newWords)
  }
  allWords = allWords.concat(allWords)
  </script>

<div>
  <div class="lg:h-screen bg-rock relative overflow-hidden max-lg:pt-60">
    <div class="big-container flex flex-col h-screen items-center justify-center relative z-20">
      <div class="w-full flex flex-col">
        <div class="w-full flex">
          <div class="lg:w-1/2 lg:pr-20 flex flex-col">
            <ul class="max-lg:hidden flex mb-20 flex-wrap gap-5">
              <li>
                <a href="/" title="Beavers, l'agence média des castors" class="text-7 text-electric transition-colors font-semibold hover:text-bright">
                  Accueil
                </a>
              </li>
              <li class="text-7 text-bright font-bold">
                |
              </li>
              <li>
                <a href="/production-digitale" title="Production digitale des castors" class="text-7 text-electric transition-colors font-semibold hover:text-bright">
                  Production digitale
                </a>
              </li>
              <li class="text-7 text-bright font-bold">
                |
              </li>
              <li class="text-7 text-white font-semibold">
                {title.replace(/<(.|\n)*?>/g, '')}
              </li>
            </ul>
            <h1 class="text-3 mb-4">
              {@html title}
            </h1>
            <h2 class="text-seance text-4 font-semibold mb-16">
              {@html subtitle}
            </h2>
            <h3 class="text-6 text-bright font-semibold mb-16">
              {@html intro}
            </h3>
            <div class="flex flex-col items-center w-8 gap-2">
              <Mouse newClass="h-auto w-full" color="#FFF" />
              <ArrowBottom newClass="animate-bounce"  color="#FFF" />
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div class="max-lg:hidden w-1/2 bg-seance max-h-full overflow-hidden absolute z-10 inset-y-0 right-0 flex items-center ">
      <div class="w-full transform scale-105">
        {#each allWords as word, i}
        <span 
          class="text-1 text-purple tracking-wider leading-none break-all animate-fade" 
          style="animation-delay: {150 * i}ms;"
        >
          {word}
        </span>
        {/each}
      </div>
    </div>
  </div>
</div>