<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import EventbriteForm from './form/eventbriteForm.svelte';
	import TripadvisorForm from './form/tripadvisorForm.svelte';
	import SortirAutourForm from './form/sortirautourForm.svelte';
	import type {
		DiscoverEventBriteActionPayloadWithSource,
		DiscoverSortirAutourActionPayloadWithSource,
		DiscoverTripadvisorActionPayloadWithSource
	} from './discover';

	const DISCOVERFORM_SOURCE_MODE = {
		TRIPADVISOR: 'tripadvisor',
		EVENTBRITE: 'eventbrite',
		SORTIRAUTOUR: 'sortirautour'
	};

	const dispatch = createEventDispatcher<emits>();
	interface emits {
		'build:discover-sortirautour-action-withsource': DiscoverSortirAutourActionPayloadWithSource;
		'build:discover-eventbrite-action-withsource': DiscoverEventBriteActionPayloadWithSource;
		'build:discover-tripadvisor-action-withsource': DiscoverTripadvisorActionPayloadWithSource;
	}

	let source = 'tripadvisor';
</script>

<div class="rounded-lg bg-white p-8 shadow-lg">
	<div class="mb-4 flex">
		<label class="mr-2 flex items-center space-x-2">
			<input
				bind:group={source}
				class="radio"
				type="radio"
				checked
				name="radio-direct"
				value="tripadvisor"
			/>
			<p>Tripadvisor</p>
		</label>

		<label class="mr-2 flex items-center space-x-2">
			<input
				bind:group={source}
				class="radio"
				type="radio"
				name="radio-direct"
				value="eventbrite"
			/>
			<p>Eventbrite</p>
		</label>
		<label class="mr-2 flex items-center space-x-2">
			<input
				bind:group={source}
				class="radio"
				type="radio"
				name="radio-direct"
				value="sortirautour"
			/>
			<p>Sortirautour.fr</p>
		</label>
	</div>

	{#if source === DISCOVERFORM_SOURCE_MODE.EVENTBRITE}
		<EventbriteForm
			on:build:discover-eventbrite-action={(emittedValue) =>
				dispatch('build:discover-eventbrite-action-withsource', {
					source: source,
					...emittedValue.detail
				})}
		/>
	{/if}

	{#if source === DISCOVERFORM_SOURCE_MODE.TRIPADVISOR}
		<TripadvisorForm
			on:build:discover-tripadvisor-action={(emittedValue) =>
				dispatch('build:discover-tripadvisor-action-withsource', {
					source: source,
					...emittedValue.detail
				})}
		/>
	{/if}

	{#if source === DISCOVERFORM_SOURCE_MODE.SORTIRAUTOUR}
		<SortirAutourForm
			on:build:discover-sortirautour-action={(emittedValue) =>
				dispatch('build:discover-sortirautour-action-withsource', {
					source: source,
					...emittedValue.detail
				})}
		/>
	{/if}
</div>
