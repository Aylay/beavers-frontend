<script lang="ts">
	import Mail from "$lib/assets/svg/Mail.svelte";
	import Tel from "$lib/assets/svg/Tel.svelte";
	import WhatsApp from "$lib/assets/svg/WhatsApp.svelte";
	import Line from "$lib/components/blocks/utilities/Line.svelte";
	import Clock from '$lib/assets/svg/Clock.svelte';
	import LeadForm from "$lib/components/blocks/contact/LeadForm.svelte";
	import MetaFront from "$lib/components/utilities/MetaFront.svelte";

  const words = [
    'Contact', 'Café', 'Rendez-vous', 'Demande de devis', 'Informations', 'Besoin'
  ]

  let allWords: Array<string> = []
  for (const word of words) {
    const newWords = word.split(' ');
    allWords = allWords.concat(newWords)
  }
  allWords = allWords.concat(allWords)
  allWords = allWords.concat(allWords)

  const meta = {
    title: "Contactez l'agence digitale Beavers",
    description: "Contactez l'agence Beavers pour plus d'informations sur votre projet ou pour que nous étudions vos opportunités digitales."
  }
</script>

<MetaFront {meta} />

<div class="lg:h-screen bg-rock relative overflow-hidden max-lg:pt-60 max-lg:pb-28 flex justify-center items-center">
  <div class="big-container bg-rock relative z-20 flex justify-between items-center gap-16 lg:gap-32 max-lg:flex-col">
    <div class="flex-1">
      <Line />
      <h1 class="text-3 text-seance">
        Comment pouvons-nous vous <span class="font-highlight text-[5.7rem] leading-[3rem] text-bright font-normal">aider</span> ?
      </h1>
      <p class="font-semibold text-6 mt-8">
        Vous souhaitez nous dire quelque chose ?<br />Co-construire votre projet digital avec Beavers ?<br />Boire un café et parler de votre projet ? 
      </p>
      <div class="border-jagger lg:border-l-[2px] lg:pl-10 mt-16">
        <p class="text-5 text-bright mb-8">
          Nous parler.
        </p>
        <div class="flex flex-col gap-5">
          <div class="flex gap-5 items-center">
            <Mail fill="#8013BD" />
            <p data-user="les-castors" data-website="beavers-agency.fr" class="before:content-[attr(data-user)'\0040'attr(data-website)] before:[unicode-bidi:bidi-override] text-6 text-white" />
          </div>
          <div class="flex gap-5 items-center">
            <Tel fill="#8013BD" />
            <p class="text-6 text-white">
              06 64 64 44 60
            </p>
          </div>
          <div class="flex gap-5 items-center">
            <WhatsApp newClass="fill-seance" />
            <p class="text-6 text-white">
              06 64 64 44 60
            </p>
          </div>
        </div>
      </div>
      <div class="border-jagger lg:border-l-[2px] lg:pl-10 mt-16">
        <p class="text-5 text-bright mb-8">
          Nos horaires.
        </p>
        <div class="flex flex-col gap-5">
          <div class="flex gap-5">
            <Clock newClass="w-auto h-12 fill-seance" />
            <p class="text-6 text-white leading-loose">
              Du lundi au vendredi<br />
              09:00 - 12:00  |  14:00 - 18:00
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="py-20 lg:px-20 lg:max-w-[70rem] w-full">
      <LeadForm />
    </div>
  </div>
  <div class="max-lg:hidden w-1/3 bg-bright max-h-full overflow-hidden absolute z-10 inset-y-0 right-0 flex items-center ">
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