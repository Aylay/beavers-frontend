<script lang="ts">
  import { fade } from 'svelte/transition';
  import { navigating, page } from '$app/stores';

	import Hoverable from '$lib/components/utilities/Hoverable.svelte';
	import Logo from "$lib/assets/svg/Logo.svelte";
	import { afterUpdate, onMount } from 'svelte';

  let menuOpened = false
  let y: number;
  let menuWhite: boolean = $page.data.menuWhite;
  let menuDark: boolean = $page.data.menuDark;
  let isArticle: boolean = $page.data.isArticle;
  let windowHeight: number;
  let labelMenu: string;
  let labelMenuMobile: string;
  let widthScroll: number;

  $: {
    labelMenu = menuOpened ? '&nbsp;' : 'Menu'
    labelMenuMobile = menuOpened ? 'Fermer' : 'Menu'
    menuWhite = $page.data.menuWhite;
    menuDark = $page.data.menuDark;
    isArticle = $page.data.isArticle;
  }

  const items = [
    {
      label: 'Accueil',
      title: "Beavers, l'agence digitale des castors",
      slug: '/'
    },
    {
      label: "L'agence",
      title: "L'agence",
      slug: '/l-agence-beavers'
    },
    {
      label: "RSE",
      title: "Programme RSE",
      slug: '/programme-rse'
    },
    {
      label: 'Cas agence',
      title: 'Cas agence',
      slug: '/cas-agence'
    },
    {
      label: 'La pause café',
      title: 'La pause café',
      slug: '/la-pause-cafe'
    },
    {
      label: 'Jobs',
      title: 'Jobs',
      slug: '/jobs'
    },
    {
      label: 'Contactez-nous',
      title: 'Contactez-nous',
      slug: '/contactez-nous'
    }
  ]

  onMount(() => {
    windowHeight = window.innerHeight

    if (isArticle) {
      window.onscroll = function() {
        progressScrollBar()
      };
    }
  })

  afterUpdate(() => {
    if ($navigating) {
      menuOpened = false;
      document.body.classList.remove('overflow-hidden');
    }
  });

  function progressScrollBar () {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    widthScroll = (winScroll / height) * 100;
  }

  function openMobileMenu () {
    menuOpened = !menuOpened
    document.body.classList.toggle('overflow-hidden');
  }
</script>

<svelte:window bind:scrollY={y} />

<header class="top-0 inset-x-0 w-full py-8 transition-colors {y > windowHeight ? 'bg-rock absolute lg:fixed lg:animate-fade-down' : 'bg-transparent absolute'}  {y === 0 && menuOpened ? '!bg-rock' : ''} z-50 {$page.route.id  === '/programme-rse' ? 'max-lg:hidden' : ''}">
  <div class="big-container flex justify-center lg:justify-between items-end gap-16 relative">
    <a href="/" title="Beavers, l'agence digitale des castors" class="pb-2 duration-300 transition-all {menuOpened ? 'invisible opacity-0' : 'opacity-100 visible'}">
      <Logo newClass="max-w-[13rem] w-full h-auto" />
    </a>
    <Hoverable newClass="max-lg:hidden" let:hovering={active}>
      <button class="flex justify-center gap-6 items-center cursor-pointer" on:click={() => (menuOpened = !menuOpened)}>
        <p class="uppercase text-[1.8rem] leading-[2.2rem] font-bold {menuDark && (y < windowHeight) && !menuOpened ? 'text-rock' : 'text-white'} {active ? 'animate-shake' : ''}">{@html labelMenu}</p>
        <div class="relative h-7 w-8">
          <span
            class="absolute inset-x-0 h-[2px] rounded-lg w-full {menuWhite && (y < windowHeight) && !menuOpened ? 'bg-white' : 'bg-bright'} {menuDark && (y < windowHeight) && !menuOpened ? 'bg-seance' : 'bg-bright'} transition-all duration-300 {menuOpened
              ? 'top-1/2 -translate-y-1/2 rotate-45'
              : 'top-0'}"
          />
          <span
            class="absolute inset-x-0 h-[2px] rounded-lg w-full {menuWhite && (y < windowHeight) && !menuOpened ? 'bg-white' : 'bg-bright'} {menuDark && (y < windowHeight) && !menuOpened ? 'bg-seance' : 'bg-bright'} transform transition-all duration-300 {menuOpened
              ? 'opacity-0'
              : 'top-1/2 -translate-y-1/2 opacity-100'}"
          />
          <span
            class="absolute inset-x-0 h-[2px] rounded-lg w-full {menuWhite && (y < windowHeight) && !menuOpened ? 'bg-white' : 'bg-bright'} {menuDark && (y < windowHeight) && !menuOpened ? 'bg-seance' : 'bg-bright'} duration-300 {menuOpened
              ? 'top-1/2 -translate-y-1/2 -rotate-45'
              : 'bottom-0'}"
          />
        </div>
      </button>
    </Hoverable>
    <nav class="max-lg:hidden absolute h-full flex items-end inset-0 w-[calc(100%-10rem)] transition-all duration-300 {!menuOpened ? 'invisible opacity-0' : 'opacity-100 visible'}">
      <Hoverable let:hovering={active} newClass="flex-1">
        <ul class="w-full flex justify-between">
          {#each items as item}
            <li>
              <a href={item.slug} title={item.title} class="text-6 transition-colors font-semibold {$page.route.id === item.slug ? 'text-bright' : 'text-white'} {active ? 'text-opacity-50 hover:text-opacity-100' : 'text-opacity-100'}">
                {item.label}
              </a>
            </li>
          {/each}
        </ul>
      </Hoverable>
    </nav>
  </div>
  {#if isArticle && y > windowHeight}
  <div class="max-lg:hidden absolute top-full left-0 h-[8px] from-seance from-40% to-bright to-60% bg-gradient-to-r" style="width: {widthScroll}%;" />
  {/if}
</header>

<div class="lg:hidden bottom-0 z-[60] inset-x-0 w-full fixed grid grid-cols-5 items-center bg-seance">
  <button class="flex col-span-2 bg-jagger justify-center gap-6 items-center cursor-pointer py-8" on:click={() => openMobileMenu()}>
    <div class="relative h-7 w-8">
      <span
        class="absolute inset-x-0 h-[2px] rounded-lg w-full bg-white transition-all duration-300 {menuOpened
          ? 'top-1/2 -translate-y-1/2 rotate-45'
          : 'top-0'}"
      />
      <span
        class="absolute inset-x-0 h-[2px] rounded-lg w-full bg-white transform transition-all duration-300 {menuOpened
          ? 'opacity-0'
          : 'top-1/2 -translate-y-1/2 opacity-100'}"
      />
      <span
        class="absolute inset-x-0 h-[2px] rounded-lg w-full bg-white duration-300 {menuOpened
          ? 'top-1/2 -translate-y-1/2 -rotate-45'
          : 'bottom-0'}"
      />
    </div>
    <p class="uppercase text-[2rem] leading-[2.4rem] font-bold text-bright">{labelMenuMobile}</p>
  </button>
  <a href="/contactez-nous" class="col-span-3 text-center text-[2rem] leading-[2.4rem] font-bold">
    Contactez-nous !
  </a>
</div>

{#if menuOpened}
  <nav
    class="lg:hidden fixed w-full h-screen inset-0 bg-rock z-50 flex justify-center px-8 flex-col pb-[6.4rem] gap-12"
    transition:fade
  >
    {#each items as item}
      {#if item.label !== 'Contactez-nous'}
      <a href={item.slug} title={item.title} class="text-4 transition-colors font-semibold {$page.route.id === item.slug ? 'text-bright' : 'text-white'}">
        {item.label}
      </a>
      {/if}
    {/each}
  </nav>
{/if}