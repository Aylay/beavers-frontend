<script lang="ts">
	import Newsletter from '$lib/components/blocks/common/Newsletter.svelte';
import '../app.css';
</script>

<div class="overflow-hidden">
	<slot />
	<Newsletter />
</div>
