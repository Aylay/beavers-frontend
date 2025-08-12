<script lang="ts">
	export let error = false;
	export let content: string;
	export let value = '';
	export let required = false;

	let textArea: HTMLTextAreaElement;

	function auto_grow(elm: any) {
		elm.style.height = elm.scrollHeight + 'px';
	}
</script>

<textarea
	bind:this={textArea}
	bind:value
	id={content.replace(/\s/g, '-')}
	placeholder={required ? content + '*' : content}
	on:focus={() => (error = false)}
	on:keypress={() => auto_grow(textArea)}
	on:keyup={() => auto_grow(textArea)}
	class="h-[58px] min-h-[58px] w-full rounded-lg border-[2px] border-solid bg-transparent px-8 py-6 text-6 focus-within:outline-none {error
		? 'border-bright'
		: 'border-seance'}"
/>
