<script lang="ts">
	import { discover } from '$lib/store/discover.store';
	import type {
		DiscoverEventBriteActionPayloadWithSource,
		DiscoverSortirAutourActionPayloadWithSource,
		DiscoverTripadvisorActionPayloadWithSource
	} from './discover';
	import DiscoverForm from './discoverForm.svelte';

	function discoverAction(
		emitedValues: CustomEvent<
			| DiscoverEventBriteActionPayloadWithSource
			| DiscoverTripadvisorActionPayloadWithSource
			| DiscoverSortirAutourActionPayloadWithSource
		>
	) {
		console.log('discover', emitedValues.detail);
		$discover.sendDiscoverAction(emitedValues.detail);
	}
</script>

<DiscoverForm
	on:build:discover-eventbrite-action-withsource={discoverAction}
	on:build:discover-tripadvisor-action-withsource={discoverAction}
	on:build:discover-sortirautour-action-withsource={discoverAction}
/>
