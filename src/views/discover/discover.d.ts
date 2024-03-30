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

export type DiscoverEventBriteActionPayloadWithSource = DiscoverEventBriteActionPayload & {
    source: string;
};

export type DiscoverTripadvisorActionPayloadWithSource = DiscoverTripadvisorActionPayload & {
    source: string;
};

export type DiscoverSortirAutourActionPayloadWithSource = DiscoverSortirAutourActionPayload & {
    source: string;
};