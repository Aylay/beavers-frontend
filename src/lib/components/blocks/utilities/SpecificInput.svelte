<script lang="ts">
	export let error = false;
	export let content: string;
	export let value = '';
	export let required = false;
</script>

<input
	bind:value
	type="text"
	id={content.replace(/\s/g, '-')}
	placeholder={required ? content + '*' : content}
	on:focus={() => (error = false)}
	class="w-full rounded-lg border-[2px] border-solid bg-transparent px-8 py-6 text-6 focus-within:outline-none {error
		? 'border-bright'
		: 'border-seance'}"
/>
