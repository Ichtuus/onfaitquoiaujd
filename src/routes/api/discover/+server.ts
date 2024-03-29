import { json, type RequestEvent } from '@sveltejs/kit';

export async function POST(event: RequestEvent) {
	const data = await event.request.json();
	console.log('Discover API', data);

	return json({ success: 'try' });
}
