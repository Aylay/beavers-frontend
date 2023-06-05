<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import WhatsApp from "$lib/assets/svg/WhatsApp.svelte";
	import Tel from "$lib/assets/svg/Tel.svelte";
	import Mail from "$lib/assets/svg/Mail.svelte";
	import Linkedin from "$lib/assets/svg/Linkedin.svelte";
	import Instagram from "$lib/assets/svg/Instagram.svelte";
	import Tiktok from "$lib/assets/svg/Tiktok.svelte";
	import Facebook from "$lib/assets/svg/Facebook.svelte";
	import Pinterest from "$lib/assets/svg/Pinterest.svelte";
	import GooglePartner from "$lib/assets/svg/GooglePartner.svelte";

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

</script>
<footer
  class="lg:py-32 big-container"
  use:inview={options}
  on:inview_change={handleChange}
>
  <div class="flex gap-28">
    <div class="flex-1 flex flex-col gap-32">
      <p class="lg:w-1/2 text-3 text-seance">
        Bâtissons <span class="font-highlight text-[5.7rem] leading-[3rem] text-bright">ensemble</span> votre stratégie digitale
      </p>
      <div class="w-full flex justify-between">
        <div class="flex-1 border-jagger border-l-[2px] pl-10">
          <p class="text-5 text-bright mb-8">
            Nous parler.
          </p>
          <div class="flex flex-col gap-5">
            <div class="flex gap-5 items-center">
              <Mail />
              <a
                href="/contactez-nous"
                title="Ecrire un message aux castors de Beavers"
                class="font-semibold text-6 text-seance underline hover:text-bright transition-colors"
              >
                Ecrivez-nous
              </a>
            </div>
            <div class="flex gap-5 items-center">
              <Tel />
              <a
                target="_blank"
                href="tel:+33664644470"
                title="Parler avec les castors de Beavers au téléphone"
                class="font-semibold text-6 text-seance underline hover:text-bright transition-colors"
              >
                06 64 64 44 60
              </a>
            </div>
            <div class="flex gap-5 items-center">
              <WhatsApp />
              <a
                target="_blank"
                rel="external noreferrer"
                href="https://wa.me/+33664644470"
                title="Parler avec les castors de Beavers sur WhatsApp"
                class="font-semibold text-6 text-seance underline hover:text-bright transition-colors"
              >
                06 64 64 44 60
              </a>
            </div>
          </div>
        </div>
        <div class="flex-1 border-jagger border-l-[2px] pl-10">
          <p class="text-5 text-bright mb-8">
            Nous suivre.
          </p>
          <div class="flex gap-8">
            <a
              href="https://www.linkedin.com/company/beavers-agency/"
              target="_blank"
              rel="external noreferrer"
              title="Retrouvez les castors de Beavers sur Linkedin"
              class="w-14 h-14 rounded-full transition-colors flex justify-center items-center hover:bg-bright bg-seance"
            >
              <Linkedin newClass="w-7 h-auto" />
            </a>
            <a
              href="https://www.instagram.com/beavers.agency/"
              target="_blank"
              rel="external noreferrer"
              title="Retrouvez les castors de Beavers sur Instagram"
              class="w-14 h-14 rounded-full transition-colors flex justify-center items-center hover:bg-bright bg-seance"
            >
              <Instagram newClass="w-7 h-auto" />
            </a>
            <a
              href="https://www.tiktok.com/@beavers.agency"
              target="_blank"
              rel="external noreferrer"
              title="Retrouvez les castors de Beavers sur TikTok"
              class="w-14 h-14 rounded-full transition-colors flex justify-center items-center hover:bg-bright bg-seance"
            >
              <Tiktok newClass="w-auto h-7" />
            </a>
            <a
            href="https://www.pinterest.fr/beaversagency/"
              target="_blank"
              rel="external noreferrer"
              title="Retrouvez les castors de Beavers sur Pinterest"
              class="w-14 h-14 rounded-full transition-colors flex justify-center items-center hover:bg-bright bg-seance"
            >
              <Pinterest newClass="w-auto h-7" />
            </a>
            <a
              href="https://www.facebook.com/beavers.agency/"
              target="_blank"
              rel="external noreferrer"
              title="Retrouvez les castors de Beavers sur Facebook"
              class="w-14 h-14 rounded-full transition-colors flex justify-center items-center hover:bg-bright bg-seance"
            >
              <Facebook newClass="w-auto h-7" />
            </a>
          </div>
        </div>
        <div class="flex-1 border-jagger border-l-[2px] pl-10">
          <p class="text-5 text-bright mb-8">
            Nos soutiens.
          </p>
          <p class="text-6">
            L'agence Beavers soutient les associations <a title="L'agence Beavers soutient les associations The Ocean Cleanup et Tree Nation" class="text-seance hover:text-bright transition-colors underline font-semibold" href="/the-ocean-cleanup-tree-nation">The Ocean Cleanup et Tree Nation</a>.
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-around gap-4 items-center flex-col">
      <a
        href="https://www.google.com/partners/agency?id=9719801224"
        target="_blank"
        title="Beavers est Google Partner"
        class="inline-block"
      >
        <GooglePartner newClass="max-w-[10rem] h-auto {isInView
          ? 'animate-fade'
          : 'opacity-0'}" />
      </a>
      <a
        href="https://theoceancleanup.com/"
        target="_blank"
        title="The Ocean Cleanup"
        rel="external noreferrer"
      >
        <img src="/img/the_ocean_cleanup-beavers.png" alt="The Ocean Cleanup x Beavers Logo" class="max-w-[10rem] h-auto {isInView
          ? 'animate-fade'
          : 'opacity-0'}">
      </a>
      <div id="tree-nation-tree-counter"></div>
      <a
        href="https://tree-nation.com/fr/profil/impact/beavers#co2"
        target="_blank"
        title="Tree Nation"
        rel="external noreferrer" 
      >
        <img
          src="https://tree-nation.com/images/tracking/label-co2-website-black-fr.png"
          alt="Logo de Tree Nation"
          class="h-auto max-w-[18rem] {isInView
            ? 'animate-fade'
            : 'opacity-0'}"
        />
      </a>
    </div>
  </div>
</footer>

<style>
#tree-nation-tree-counter > div {
  width: 100% !important;
}
</style>