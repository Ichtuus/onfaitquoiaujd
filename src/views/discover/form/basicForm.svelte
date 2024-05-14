<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { DiscoverBasicActionPayload } from '../discover';
	import { superForm } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { basicFormValidationSchema } from '$lib/schemas/basicForm.validation.schema';
	import SuperDebug from 'sveltekit-superforms';
	import Loader from '../../../components/loader.svelte';
	import { createQuery } from '@tanstack/svelte-query';

	interface emits {
		'build:discover-basic-action': DiscoverBasicActionPayload;
	}

	const dispatch = createEventDispatcher<emits>();

	export let data = {
		form: {
			town: '' as unknown as string,
			meta: '' as unknown as string,
			isVirtual: false as unknown as boolean,
			start: 'today'
		}
	};

	let starts = [
		{ label: "Aujourd'hui", value: 'today' },
		{ label: 'Demain', value: 'tomorrow' },
		{ label: 'Dans la semaine', value: 'week' },
		{ label: 'Ce week-end', value: 'weekend' },
		{ label: 'Le week-end prochain', value: 'next_week' },
		{ label: 'Ce mois-ci', value: 'month' },
		{ label: 'Le mois prochain', value: 'next_month' }
	];

	const { form, enhance, validateForm } = superForm(data.form, {
		validators: zod(basicFormValidationSchema),
		async onSubmit({ cancel }) {
			cancel(); // Kill process to server, just need validation
			const formResult = await validateForm({ update: true });
			if (formResult.valid) dispatch('build:discover-basic-action', formResult.data);
		}
	});


</script>


<!-- {$onSubmitForm.isPending} -->
<SuperDebug data={$form} />
<form class="flex flex-col" use:enhance>
	<div class=" mb-4 flex flex-row gap-4">
		<label class="label">
			<span>Ville</span>
			<input bind:value={$form.town} class="input" type="text" placeholder="Choisi une ville" />
		</label>

		<label class="label">
			<span>Début</span>
			<select class="select" bind:value={$form.start}>
				{#each starts as start}
					<option value={start.value}>{start.label}</option>
				{/each}
			</select>
		</label>
	</div>

	<div class="mb-4 flex-initial">
		<label class="label">
			<span>Méta</span>
			<input
				bind:value={$form.meta}
				class="input"
				type="text"
				placeholder="Ajoute des informations en plus"
			/>
		</label>
	</div>

	<div class="flex-initial">
		<label class="label inline-flex cursor-pointer items-center">
			<input type="checkbox" class="peer sr-only" bind:checked={$form.isVirtual} />
			<div
				class="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"
			></div>
			<span class="ms-3 dark:text-gray-300">Evenement virtuel</span>
		</label>
	</div>

	<div class="mt-6 flex items-center justify-end gap-x-6">
		<!-- <Loader/> -->
		<button
			class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:opacity-75 disabled:shadow-none"
		>
			Rechercher
		</button>
	</div>
</form>
