<script lang="ts">
	import ArrowBottom from "$lib/assets/svg/ArrowBottom.svelte";
	import Mouse from "$lib/assets/svg/Mouse.svelte";

  let words: Array<string> = [
    'Actu', 'Digital', 'Astuces', 'Marketing', 'Réseaux Sociaux', 'SEO', 'Actu', 'Digital', 'Astuces', 'Marketing', 'Réseaux Sociaux', 'SEO'
  ]

  let allWords: Array<string> = []
  for (const word of words) {
    const newWords = word.split(' ');
    allWords = allWords.concat(newWords)
  }
  allWords = allWords.concat(allWords)
  </script>

<div>
  <div class="lg:h-screen bg-rock relative overflow-hidden max-lg:pt-60 max-lg:pb-28">
    <div class="big-container flex flex-col lg:h-screen items-center justify-center relative z-20">
      <div class="w-full flex flex-col max-lg:gap-8">
        <h1 class="text-1-m lg:text-1 text-outline lg:text-center">
          La pause café
        </h1>
        <p class="text-4 font-semibold lg:text-3 lg:text-center">
          L'actu fraiche des castors
        </p>
        <div class="w-full lg:mt-32 flex">
          <div class="lg:w-1/2 lg:pr-20 lg:flex lg:flex-col lg:items-end">
            <h2 class="text-6 text-bright font-semibold mb-16 lg:text-right">
              La veille fait partie de notre métier. Retrouvez dans ce blog des articles pour les débutants comme pour les pros du digital. Des actu, des back to basics, nos retours d'expérience ou encore nos réflexions sur des sujets qui portent au débat. Social Média, SEA, SEO, Développement Web mais aussi RGPD jusqu'à Analytics.
            </h2>
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