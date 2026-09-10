<script lang="ts">
	import { isExternalLink } from '$lib/utils/links';

	export let href = '';
	export let title: string | undefined = undefined;

	$: external = isExternalLink(href);
</script>

<a {href} {title} target={external ? '_blank' : undefined} rel={external ? 'noopener' : undefined}>
	<slot />
</a>
