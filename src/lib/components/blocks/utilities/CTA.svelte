<script lang="ts">
	export let label = '';
	export let href = '';
	export let type = '';
	export let blank: boolean = false;
	let classes = '';

	if (type === 'transparent') {
		classes = 'text-white border-bright bg-transparent';
	} else if (type === 'seance') {
		classes = 'text-white border-seance bg-seance hover:border-bright'
	}
</script>

<a
	class="text-6 font-bold {classes} hover:bg-bright hover:text-black duration-300 rounded-[3rem] border-2 px-10 py-4 transition-colors"
	{href}
	title={label}
	target={blank ? '_blank' : '_self'}
>
	{label}
</a>
