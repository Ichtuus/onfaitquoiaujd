<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { DiscoverActionPayload } from './discover';

	interface emits {
		'build:discover-action': DiscoverActionPayload;
	}

	const dispatch = createEventDispatcher<emits>();
	let town = null as unknown as string;
	let typeShift = null as unknown as string;
	let meta = null as unknown as string;

	function buildDiscoverAction() {
		const payload: DiscoverActionPayload = {
			...(town && { town }),
			...(typeShift && { typeShift }),
			...(meta && { meta })
		};
		dispatch('build:discover-action', payload);
	}
</script>

<div class="rounded-lg bg-white p-8 shadow-lg">
	<form class="flex flex-col">
		<div class="mb-4 flex flex-row gap-4">
			<label class="label">
				<span>Ville</span>
				<input bind:value={town} class="input" type="text" placeholder="Choisi une ville" />
			</label>

			<label class="label">
				<span>Type</span>
				<input
					bind:value={typeShift}
					class="input"
					type="text"
					placeholder="Choisi un type de sortie"
				/>
			</label>
		</div>
		<div class="flex-initial">
			<label class="label">
				<span>Méta</span>
				<input
					bind:value={meta}
					class="input"
					type="text"
					placeholder="Ajoute des informations en plus"
				/>
			</label>
		</div>

		<div class="mt-6 flex items-center justify-end gap-x-6">
			<button
				on:click={buildDiscoverAction}
				type="submit"
				class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				Save
			</button>
		</div>
	</form>
</div>
