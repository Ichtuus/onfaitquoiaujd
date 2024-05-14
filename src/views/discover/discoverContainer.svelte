<script lang="ts">
	import { discover } from '$lib/store/discover.store';
	import type {
		DiscoverEventBriteActionPayloadWithSource,
		DiscoverSortirAutourActionPayloadWithSource,
		DiscoverTripadvisorActionPayloadWithSource
	} from './discover';
	import DiscoverForm from './discoverForm.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import search from '$lib/assets/icons/search.svg';
	import DiscoverList from './discoverList.svelte';

	$: sections = [
		{
			icon: search,
			summary: 'Formulaire',
			component: DiscoverForm,
			componentEvent: {
				handleBasicAction: discoverAction, // Propriété de rappel pour chaque événement
				handleEventbriteAction: discoverAction,
				handleTripAdvisorAction: discoverAction,
				handleSortirAutourAction: discoverAction
			},
			isOpen: true
		},
		{
			icon: '',
			summary: 'Events',
			component: DiscoverList,
			componentProps: {
				events: $discover.events
			},
			isOpen: false
		}
	];

	$: if ($discover.events && $discover.events.length > 0) {
		sections[0].isOpen = false;
		sections[1].isOpen = true;
	}

	function discoverAction(
		emitedValues: CustomEvent<
			| DiscoverEventBriteActionPayloadWithSource
			| DiscoverTripadvisorActionPayloadWithSource
			| DiscoverSortirAutourActionPayloadWithSource
		>
	) {
		$discover.sendDiscoverAction(emitedValues.detail);
	}
</script>

<Accordion>
	{#each sections as item}
		<AccordionItem open={item.isOpen}>
			<svelte:fragment slot="lead"><img src={item.icon} alt="" /></svelte:fragment>
			<svelte:fragment slot="summary">{item.summary}</svelte:fragment>
			<svelte:fragment slot="content">
				<svelte:component
					this={item.component}
					{...item.componentProps}
					on:build:discover-basic-action-withsource={item.componentEvent?.handleBasicAction}
					on:build:discover-eventbrite-action-withsource={item.componentEvent
						?.handleEventbriteAction}
					on:build:discover-tripadvisor-action-withsource={item.componentEvent
						?.handleTripAdvisorAction}
					on:build:discover-sortirautour-action-withsource={item.componentEvent
						?.handleSortirAutourAction}
				/>
			</svelte:fragment>
		</AccordionItem>
	{/each}
</Accordion>
