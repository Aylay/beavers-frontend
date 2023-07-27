<script lang="ts">
	export let error = false;
	export let content: string;
	export let value = '';
	export let required = false;
</script>

<input
	bind:value
	type="text"
	id={content.replace(/\s/g, "-")}
	placeholder={required ? content + '*' : content}
	on:focus={() => (error = false)}
	class="w-full border-[2px] border-solid rounded-lg py-6 px-8 text-6 bg-transparent focus-within:outline-none {error
		? 'border-bright'
		: 'border-seance'}"
/>
