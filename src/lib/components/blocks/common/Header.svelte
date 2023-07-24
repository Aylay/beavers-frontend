<script lang="ts">
	import Sun from '$lib/assets/svg/Sun.svelte';
	import MultipleArrows from '$lib/assets/svg/MultipleArrows.svelte';
	import Wave2 from '$lib/assets/svg/Wave2.svelte';

  export let title: string;
  export let subtitle: string;
</script>

<div class="h-screen flex justify-center items-center bg-rock">
  <div class="big-container relative">
    <h1 class="text-outline text-1-m lg:text-1 text-center">
      {title}
    </h1>
    <h2 class="text-seance text-4 font-semibold lg:text-3 text-center mt-1">
      {subtitle}
    </h2>
    <Sun newClass="animate-once w-24 h-auto absolute left-1/4 bottom-full animate-delay-500 animate-ping" color="#8013BD" />
    <Sun newClass="animate-once w-28 h-auto absolute right-1/4 -bottom-48 animate-ping" color="#00FFDA" />
    <MultipleArrows newClass="absolute -top-1/4 lg:top-1/4 right-[15%] fill-bright animate-delay-700 animate-fade" />
    <Wave2 newClass="absolute -top-1/2 lg:top-1/4 left-4 lg:left-0 fill-bright animate-delay-1000 animate-shake" />
    <Wave2 newClass="absolute -bottom-32 right-4 lg:right-0 fill-seance animate-delay-500 animate-shake" />
    <div class="absolute right-1/4 top-[-12rem] h-[2px] w-20 -rotate-45 transform bg-seance animate-delay-[1200ms] animate-fade" />
    <div class="absolute right-1/4 top-[-14rem] h-[2px] w-20 -rotate-45 transform bg-seance animate-delay-[1400ms] animate-fade" />
    <div class="absolute left-1/4 bottom-[-12rem] h-[2px] w-20 -rotate-45 transform bg-bright animate-delay-[1800ms] animate-fade" />
    <div class="absolute left-1/4 bottom-[-14rem] h-[2px] w-20 -rotate-45 transform bg-bright animate-delay-[2000ms] animate-fade" />
  </div>
</div>