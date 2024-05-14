export interface SearchEvents {
	properties: {
		status: string;
		request_id: string;
		parameters: {
			query: string;
			start: number;
			date?: string;
			is_virtual?: boolean;
			start?: number;
		};
	};
	data: SearchData[];
}

export interface SearchDataLinks {
	source: string;
	link: string;
}

export interface SearchDataVenue {
	google_id: string;
	name: string;
	phone_number: string;
	website: string;
	review_count: number;
	rating: number;
	subtype: string;
	subtypes: string[];
	latitude: number;
	longitude: number;
	street_number: string;
	street: string;
	city: string;
	country: string;
	timezone: string;
	google_mid: string;
	full_address: string;
	state: string;
}

export interface SearchData {
	event_id: string;
	event_mid: string;
	name: string;
	link: string;
	description: string;
	start_time: string;
	end_time: string;
	is_virtual: boolean;
	thumbnail: string;
	ticket_links: SearchDataLinks[];
	info_links: SearchDataLinks[];
	venue: SearchDataVenue;
	tags: string[];
	language: string;
}