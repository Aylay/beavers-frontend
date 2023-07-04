<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

let isInView: boolean;
const options: Options = {
  unobserveOnEnter: true,
  rootMargin: '50px'
};

const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
  isInView = detail.inView;
};

export let mainImg: any;
</script>

<div class="big-container"
  use:inview={options}
  on:inview_change={handleChange}
>
  <div class="rounded-lg overflow-hidden h-[36rem] lg:h-[68rem]">
    <img src={mainImg.src} alt={mainImg.alt} class="w-full h-full object-cover {isInView ? 'animate-fade' : 'opacity-0'}" />
  </div>
</div>