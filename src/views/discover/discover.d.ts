export interface DiscoverEventBriteActionPayload {
	town: string;
	meta?: string;
}

export interface DiscoverTripadvisorActionPayload {
	town: string;
	meta?: string;
}

export interface DiscoverSortirAutourActionPayload {
	region: string;
	department: string;
	municipality: string;
}

export interface DiscoverBasicActionPayload {
	town: string;
	start?: string;
	virtual_event?: boolean;
	meta?: string;
}

export type DiscoverEventBriteActionPayloadWithSource = DiscoverEventBriteActionPayload & {
	source: string;
};

export type DiscoverTripadvisorActionPayloadWithSource = DiscoverTripadvisorActionPayload & {
	source: string;
};

export type DiscoverSortirAutourActionPayloadWithSource = DiscoverSortirAutourActionPayload & {
	source: string;
};

export type DiscoverBasicActionPayloadWithSource = DiscoverBasicActionPayload & {
	source: string;
};
