import type { SearchEvents } from '$lib/types/realtime-event';
import 'dotenv/config';

interface RealTimeEventAPIContract {
	searchEvents(arg: SearchEventsParameters): Promise<SearchEvents>;
	eventDetails(): any;
}

interface SearchEventsParameters {
	query: string;
	date?: 'today' | 'tomorrow' | 'week' | 'weekend' | 'next_week' | 'month' | 'next_month'; // Return events in a certain date / time period.
	is_virtual?: boolean; // If true, only virtual events will be returned.
	start?: number; // Allowed values: positive integers.
}

const ENDPOINTS = {
	searchEvents: '/search-events'
};

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.RAPIDAPI_API_KEY as string,
		'X-RapidAPI-Host': process.env.RAPIDAPI_HOST as string
	}
};

export class RealTimeEventAPI implements RealTimeEventAPIContract {
	async searchEvents(parameters: SearchEventsParameters): Promise<SearchEvents> {
		const queryParams = new URLSearchParams(parameters as unknown as Record<string, string>);
		const response = await fetch(
			`https://${process.env.RAPIDAPI_HOST}${ENDPOINTS.searchEvents}?${queryParams.toString()}`,
			options
		);

		return JSON.parse(await response.text());
	}

	eventDetails(): Promise<any> {}
}
