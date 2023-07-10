<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import Hoverable from '$lib/components/utilities/Hoverable.svelte';
	import Arrow from '$lib/assets/svg/Arrow.svelte';
	import Contract from '$lib/assets/svg/Contract.svelte';
	import Pin from '$lib/assets/svg/Pin.svelte';

  let isInView: boolean;
  const options: Options = {
    unobserveOnEnter: true,
    rootMargin: '-50px'
  };

  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView = detail.inView;
  };

  export let job: any;
</script>

<a class="w-full bg-rock hover:bg-seance transition-colors {isInView ? 'animate-fade' : 'opacity-0'}"
  href="/jobs/{job.slug}"
  title={job.title}
  use:inview={options}
  on:inview_change={handleChange}
>
  <Hoverable let:hovering={active}>
    <div class="flex justify-between items-center p-16">
      <div class="flex flex-col flex-1 gap-10">
        <h3 class="transition-colors font-semibold text-4 {active ? 'text-white' : 'text-seance'}">
          {job.title}
        </h3>
        <div class="flex gap-20 items-center">
          <div class="flex gap-4 items-center">
            <Contract newClass="fill-bright w-10 h-auto" />
            <p class="text-6 font-semibold">{job.contract}</p>
          </div>
          <div class="flex gap-4 items-center">
            <Pin newClass="fill-bright w-7 h-auto" />
            <p class="text-6 font-semibold">{job.localisation}</p>
          </div>
        </div>
      </div>
      <div class="{active ? 'animate-shake animate-infinite' : ''}">
				<Arrow newClass="transition-colors duration-500 fill-bright" />
      </div>
    </div>
  </Hoverable>
</a>