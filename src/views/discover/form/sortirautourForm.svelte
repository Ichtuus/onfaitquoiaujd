<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { DiscoverSortirAutourActionPayload } from '../discover';

	interface emits {
		'build:discover-sortirautour-action': DiscoverSortirAutourActionPayload;
	}

	const dispatch = createEventDispatcher<emits>();
	let region = null as unknown as string;
	let department = null as unknown as string;
	let municipality = null as unknown as string;

	function buildSortirAutourDiscoverAction() {
		const payload: DiscoverSortirAutourActionPayload = {
			region,
			department,
			municipality
		};
		dispatch('build:discover-sortirautour-action', payload);
	}
</script>

<form class="flex flex-col">
	<div class="mb-4 flex flex-row gap-4">
		<label class="label">
			<span>Région</span>
			<input bind:value={region} class="input" type="text" placeholder="Choisi une région" />
		</label>
	</div>
	<div class="mb-4 flex-initial">
		<label class="label">
			<span>Département</span>
			<input
				bind:value={department}
				class="input"
				type="text"
				placeholder="Choisi un département"
			/>
		</label>
	</div>

	<div class="flex-initial">
		<label class="label">
			<span>Commune</span>
			<input bind:value={municipality} class="input" type="text" placeholder="Choisi une commune" />
		</label>
	</div>

	<div class="mt-6 flex items-center justify-end gap-x-6">
		<button
			on:click={buildSortirAutourDiscoverAction}
			type="submit"
			class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>
			Rechercher
		</button>
	</div>
</form>
