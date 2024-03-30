<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import type { DiscoverTripadvisorActionPayload } from "../discover";

	interface emits {
		'build:discover-tripadvisor-action': DiscoverTripadvisorActionPayload;
	}

	const dispatch = createEventDispatcher<emits>();
	let town = null as unknown as string;
	let meta = null as unknown as string;

    function builTripAdvisordDiscoverAction() {
		const payload: DiscoverTripadvisorActionPayload = {
			town,
			...(meta && { meta }),
		};
		dispatch('build:discover-tripadvisor-action', payload);
	}
</script>

<form class="flex flex-col">
	<div class="mb-4 flex flex-row gap-4">
		<label class="label">
			<span>Ville</span>
			<input bind:value={town} class="input" type="text" placeholder="Choisi une ville" />
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
			on:click={builTripAdvisordDiscoverAction}
			type="submit"
			class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>
			Rechercher
		</button>
	</div>
</form>
