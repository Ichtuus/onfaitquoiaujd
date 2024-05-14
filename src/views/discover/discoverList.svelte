<script lang="ts">
	import DateUtil from '$lib/global/date';
	import type { SearchData } from '$lib/types/realtime-event';

	export let events: SearchData[];
</script>

{#if events}
	{#each events as event}
		<div class="discover-list card p-4">
			<header class="card-header font-bold text-indigo-600">{event.name}</header>
			<section class="p-4">
				<p>{event.description ?? 'La description est introuvable'}</p>
			</section>
			<footer class="card-footer">
				<div class="flex">
					<div class="flex-initial mr-2">
						<span class="font-bold">Début: </span>{new DateUtil(event.start_time).format('short')}
					</div>

					<div class="flex-1">
						<span class="font-bold">Fin: </span>{new DateUtil(event.end_time).format('short')}
					</div>
					<a
						class=" justify-end font-medium text-blue-600 hover:underline dark:text-blue-500"
						href={event.link}
						target="_blank">test</a
					>
				</div>
			</footer>
		</div>
	{/each}
{:else}
	<p>Il faut faire une recherche pour visualiser des events</p>
{/if}
