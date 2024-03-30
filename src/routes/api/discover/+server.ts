import { SearchDiscoverBuilder } from '$lib/api/server/builder/searchDiscover.builder';
import { Crawler } from '$lib/api/server/crawler/crawler';
import { UpcomingEventFromEventBriteCrawler } from '$lib/api/server/crawler/EventBriteCrawler';
import { json, type RequestEvent } from '@sveltejs/kit';

export interface DiscoverEventBriteActionRequest {
	town: string;
	meta?: string;
	source: string;
}

interface UpcomingEventFromEventBrite {
	title: string;
	img: string;
	date: string;
	price: string;
	position: string;
}

export async function POST(event: RequestEvent) {
	console.log('Discover API');
	const requestData = await event.request.json();

	// const searchValue = new SearchDiscoverBuilder()
	// 	.withTown(data.town)
	// 	.withTypeShift(data.typeShift)
	// 	.withMeta(data.meta)
	// 	.build();

	// console.log('test', searchValue);

	const crawler = new Crawler<UpcomingEventFromEventBrite>(
		new UpcomingEventFromEventBriteCrawler('https://www.eventbrite.fr/', requestData)
	);

	await crawler.startCrawler();
	// const crawlerWithEvent1 = new Crawler<UpcomingEventFromEventBrite>(new UpcomingEventFromEventBriteCrawler('https://www.eventbrite.fr/'));
	// crawlerWithEvent1.getUpcomingEvents().then(events => console.log(events));

	return json({ success: 'try' });
}
