import { writable } from 'svelte/store';
import type {
	DiscoverEventBriteActionPayloadWithSource,
	DiscoverSortirAutourActionPayloadWithSource,
	DiscoverTripadvisorActionPayloadWithSource
} from '../../views/discover/discover';
import { ENDPOINTS } from '$lib/api/client/endpoints';
import { apiClient } from '$lib/api/client';

type requestSendDiscoverAction =
	| DiscoverEventBriteActionPayloadWithSource
	| DiscoverTripadvisorActionPayloadWithSource
	| DiscoverSortirAutourActionPayloadWithSource;

export const discover = writable({
	sendDiscoverAction: (request: requestSendDiscoverAction) => {
		console.log('discover store');
		apiClient.post(ENDPOINTS.discover, request);
	}
});
