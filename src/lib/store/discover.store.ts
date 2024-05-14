import { writable } from 'svelte/store';
import type {
	DiscoverEventBriteActionPayloadWithSource,
	DiscoverSortirAutourActionPayloadWithSource,
	DiscoverTripadvisorActionPayloadWithSource
} from '../../views/discover/discover';
import { ENDPOINTS } from '$lib/api/client/endpoints';
import { apiClient } from '$lib/api/client';
import { createQuery, useQueryClient } from '@tanstack/svelte-query';
import { setContext } from 'svelte';
import type { SearchData } from '$lib/types/realtime-event';

type requestSendDiscoverAction =
	| DiscoverEventBriteActionPayloadWithSource
	| DiscoverTripadvisorActionPayloadWithSource
	| DiscoverSortirAutourActionPayloadWithSource;

// })
// const query = createQuery({
// 	queryKey: ['onSubmitForm'],
// 	queryFn: () => discover.subscribe((t) => t.sendDiscoverAction)
// });

type discoverType = {
	events: SearchData[];
	sendDiscoverAction: (param: requestSendDiscoverAction) => void;
};

export const discover = writable<discoverType>({
	events: null as unknown as SearchData[],
	sendDiscoverAction: async (request: requestSendDiscoverAction) => {
		const result: SearchData[] = await apiClient.post(ENDPOINTS.discover, request);
		discover.update((current) => {
			return {
				...current,
				events: result
			};
		});
	}
});
