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
		rootMargin: '50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

</script>
<footer
  class="py-16 lg:py-32 big-container"
  use:inview={options}
  on:inview_change={handleChange}
>
  <div class="flex gap-16 flex-col">
    <div class="w-full flex justify-between max-lg:flex-col items-center max-lg:gap-8">
      <p class="lg:w-1/2 text-3 text-seance">
        Bâtissons <span class="font-highlight font-normal text-[5.7rem] leading-[3rem] text-bright">ensemble</span> votre stratégie digitale
      </p>
      <div class="flex lg:justify-end items-center gap-8">
        <a
          href="https://www.google.com/partners/agency?id=9719801224"
          target="_blank"
          title="Beavers est Google Partner"
          class="inline-block lg:hover:animate-shake"
        >
          <GooglePartner newClass="max-w-[10rem] h-auto {isInView
            ? 'animate-fade'
            : 'opacity-0'}" />
        </a>
        {#if isInView}
        <img src="/img/certification-linkedin.png" alt="Certification Marketing insider Linkedin" class="max-w-[16rem] h-auto {isInView
          ? 'animate-fade'
          : 'opacity-0'}">
        {/if}
      </div>
    </div>
    <div class="w-full flex max-lg:flex-col gap-16 lg:gap-28">
      <div class="w-full flex max-lg:flex-col justify-between max-lg:gap-16">
        <div class="flex-1 border-jagger lg:border-l-[2px] lg:pl-10">
          <p class="text-5 text-bright mb-8">
            Nous parler.
          </p>
          <div class="flex flex-col gap-5">
            <div class="flex gap-5 items-center">
              <Mail />
              <a
                href="/contactez-nous"
                title="Ecrire un message aux castors de Beavers"
                class="font-semibold text-6 text-electric underline hover:text-bright transition-colors"
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
                class="font-semibold text-6 text-electric underline hover:text-bright transition-colors"
              >
                06 64 64 44 70
              </a>
            </div>
            <div class="flex gap-5 items-center">
              <WhatsApp newClass="fill-bright" />
              <a
                target="_blank"
                rel="external noreferrer"
                href="https://wa.me/+33664644470"
                title="Parler avec les castors de Beavers sur WhatsApp"
                class="font-semibold text-6 text-electric underline hover:text-bright transition-colors"
              >
                06 64 64 44 70
              </a>
            </div>
          </div>
        </div>
        <div class="flex-1 border-jagger lg:border-l-[2px] lg:pl-10">
          <p class="text-5 text-bright mb-8">
            Nous suivre.
          </p>
          <div class="flex gap-8">
            <a
              href="https://www.linkedin.com/company/beavers-agency/"
              target="_blank"
              rel="external noreferrer"
              title="Retrouvez les castors de Beavers sur Linkedin"
              class="max-lg:w-20 w-14 max-lg:h-20 h-14 rounded-full transition-colors flex justify-center items-center hover:bg-bright bg-seance"
            >
              <Linkedin newClass="w-10 lg:w-7 h-auto" />
            </a>
            <a
              href="https://www.instagram.com/beavers.agency/"
              target="_blank"
              rel="external noreferrer"
              title="Retrouvez les castors de Beavers sur Instagram"
              class="max-lg:w-20 w-14 max-lg:h-20 h-14 rounded-full transition-colors flex justify-center items-center hover:bg-bright bg-seance"
            >
              <Instagram newClass="w-10 lg:w-7 h-auto" />
            </a>
            <a
              href="https://www.tiktok.com/@beavers.agency"
              target="_blank"
              rel="external noreferrer"
              title="Retrouvez les castors de Beavers sur TikTok"
              class="max-lg:w-20 w-14 max-lg:h-20 h-14 rounded-full transition-colors flex justify-center items-center hover:bg-bright bg-seance"
            >
              <Tiktok newClass="w-auto h-10 lg:h-7" />
            </a>
            <a
            href="https://www.pinterest.fr/beaversagency/"
              target="_blank"
              rel="external noreferrer"
              title="Retrouvez les castors de Beavers sur Pinterest"
              class="max-lg:w-20 w-14 max-lg:h-20 h-14 rounded-full transition-colors flex justify-center items-center hover:bg-bright bg-seance"
            >
              <Pinterest newClass="w-auto h-10 lg:h-7" />
            </a>
            <a
              href="https://www.facebook.com/beavers.agency/"
              target="_blank"
              rel="external noreferrer"
              title="Retrouvez les castors de Beavers sur Facebook"
              class="max-lg:w-20 w-14 max-lg:h-20 h-14 rounded-full transition-colors flex justify-center items-center hover:bg-bright bg-seance"
            >
              <Facebook newClass="w-auto h-10 lg:h-7" />
            </a>
          </div>
        </div>
        <div class="flex-1 border-jagger lg:border-l-[2px] lg:pl-10">
          <p class="text-5 text-bright mb-8">
            Nos soutiens.
          </p>
          <p class="text-6">
            L'agence Beavers soutient les associations <a title="L'agence Beavers soutient les associations The Ocean Cleanup et Tree Nation" class="text-electric hover:text-bright transition-colors underline font-semibold" href="/programme-rse">The Ocean Cleanup et Tree Nation</a>.
          </p>
        </div>
      </div>
      <div class="flex lg:justify-around gap-8 items-center lg:flex-col max-lg:justify-center">
        <a
          href="https://theoceancleanup.com/"
          target="_blank"
          title="The Ocean Cleanup"
          rel="external noreferrer"
          class="lg:hover:animate-shake"
        >
          {#if isInView}
              <img src="/img/the_ocean_cleanup-beavers.png" alt="The Ocean Cleanup x Beavers Logo" class="max-w-[10rem] h-auto {isInView
              ? 'animate-fade'
              : 'opacity-0'}" />
            {/if}
        </a>
        <div id="tree-nation-offset-website" class="lg:hover:animate-shake"></div>
        <div id="wcb" class="carbonbadge wcb-d"></div>
      </div>
    </div>
  </div>
</footer>