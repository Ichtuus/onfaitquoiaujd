<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import EventbriteForm from './form/eventbriteForm.svelte';
	import TripadvisorForm from './form/tripadvisorForm.svelte';
	import SortirAutourForm from './form/sortirautourForm.svelte';
	import type {
		DiscoverBasicActionPayloadWithSource,
		DiscoverEventBriteActionPayloadWithSource,
		DiscoverSortirAutourActionPayloadWithSource,
		DiscoverTripadvisorActionPayloadWithSource
	} from './discover';
	import BasicForm from './form/basicForm.svelte';

	const DISCOVERFORM_SOURCE_MODE = {
		BASIC: 'basic',
		TRIPADVISOR: 'tripadvisor',
		EVENTBRITE: 'eventbrite',
		SORTIRAUTOUR: 'sortirautour'
	};

	const dispatch = createEventDispatcher<emits>();
	interface emits {
		'build:discover-basic-action-withsource': DiscoverBasicActionPayloadWithSource;
		'build:discover-sortirautour-action-withsource': DiscoverSortirAutourActionPayloadWithSource;
		'build:discover-eventbrite-action-withsource': DiscoverEventBriteActionPayloadWithSource;
		'build:discover-tripadvisor-action-withsource': DiscoverTripadvisorActionPayloadWithSource;
	}

	let source = 'basic';
</script>

<div class="">
	<div class="rounded-lg bg-white p-8 shadow-lg">
		<div class="mb-4 flex">
			<label class="mr-2 flex items-center space-x-2">
				<input
					bind:group={source}
					class="radio"
					type="radio"
					checked
					name="radio-direct"
					value="basic"
				/>
				<p>Basic</p>
			</label>

			<label class="mr-2 flex items-center space-x-2 text-slate-500">
				<input
					disabled
					bind:group={source}
					class="radio disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
					type="radio"
					name="radio-direct"
					value="tripadvisor"
				/>
				<p>Tripadvisor</p>
			</label>

			<label class="mr-2 flex items-center space-x-2 text-slate-500">
				<input
					disabled
					bind:group={source}
					class="radio disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
					type="radio"
					name="radio-direct"
					value="eventbrite"
				/>
				<p>Eventbrite</p>
			</label>
			<label class="mr-2 flex items-center space-x-2 text-slate-500">
				<input
					disabled
					bind:group={source}
					class="radio disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
					type="radio"
					name="radio-direct"
					value="sortirautour"
				/>
				<p>Sortirautour.fr</p>
			</label>
		</div>

		{#if source === DISCOVERFORM_SOURCE_MODE.BASIC}
			<BasicForm
				on:build:discover-basic-action={(emittedValue) =>
					dispatch('build:discover-basic-action-withsource', {
						source: source,
						...emittedValue.detail
					})}
			/>
		{/if}

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
</div>
