import { writable } from 'svelte/store';
import type { DiscoverActionPayload } from '../../views/discover/discover';
import { ENDPOINTS } from '$lib/api/endpoints';
import { apiClient } from '$lib/api';

interface requestSendDiscoverAction extends DiscoverActionPayload {}

export const discover = writable({
	sendDiscoverAction: (request: requestSendDiscoverAction) => {
		console.log('discover store');
		apiClient.post(ENDPOINTS.discover, request);
	}
});
