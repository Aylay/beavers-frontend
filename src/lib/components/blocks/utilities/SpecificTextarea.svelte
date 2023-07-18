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
	id={content}
	placeholder={required ? content + '*' : content}
	on:focus={() => (error = false)}
	on:keypress={() => auto_grow(textArea)}
	on:keyup={() => auto_grow(textArea)}
	class="w-full min-h-[58px] h-[58px] border-[2px] border-solid rounded-lg py-6 px-8 text-6 bg-transparent focus-within:outline-none {error
		? 'border-bright'
		: 'border-seance'}"
/>
