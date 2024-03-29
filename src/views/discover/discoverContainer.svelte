<script lang="ts">
	import type { DiscoverActionPayload } from './discover';
	import { discover } from '$lib/store/discover.store';
	import DiscoverForm from './discoverForm.svelte';

	function discoverAction(emmitedValues: CustomEvent<DiscoverActionPayload>) {
		$discover.sendDiscoverAction(emmitedValues.detail);
	}
</script>

<DiscoverForm on:build:discover-action={discoverAction} />
