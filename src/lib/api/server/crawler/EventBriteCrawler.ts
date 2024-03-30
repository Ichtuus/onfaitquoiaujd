import puppeteer from 'puppeteer';
import { type UpComingEventProvider } from './crawler';
import type { DiscoverEventBriteActionRequest } from '../../../../routes/api/discover/+server';

export class UpcomingEventFromEventBriteCrawler<T> implements UpComingEventProvider<T> {
	url: string;
	requestData: DiscoverEventBriteActionRequest;

	constructor(url: string, requestData: DiscoverEventBriteActionRequest) {
		this.url = url;
		this.requestData = requestData;
	}

	async getUpcomingEvents(): Promise<T[]> {
		return [
			{
				title: 'Event 1',
				img: 'string',
				date: 'string',
				price: 'number',
				position: 'string'
			} as T
		];
	}

	async crawl(): Promise<any> {
		console.log('data', this.requestData.town);
		const browser = await puppeteer.launch();
		const page = await browser.newPage();

		await page.goto(this.url, { waitUntil: 'domcontentloaded' });
		await page.setViewport({ width: 1080, height: 1024 });

		const searchbarSelector = '.SearchBarFull-module__searchLabelContainer___3SzQr';
		const acceptCookieSectionSelector = '#transcend-consent-manager';
		const modalActive = '.search-takeover-wrapper';
		const bodypage = '#root';
		const modalSearchInputSelector = '#search-autocomplete-input';

		await page.waitForSelector(bodypage);
		await page.waitForSelector(acceptCookieSectionSelector);
		await page.evaluate((sel) => {
			let element = document.querySelector(sel);
			element?.remove();
		}, acceptCookieSectionSelector);
		await page.waitForSelector(acceptCookieSectionSelector, { hidden: true });

		await page.waitForSelector(bodypage, {
			visible: true
		});
		await page.click(searchbarSelector);

		await page.waitForSelector(modalActive, {
			visible: true,
			timeout: 10000
		});
		// await page.waitForSelector(modalSearchInputSelector);
		// await page.waitForSelector(modalSearchInputSelector, {
		// 	visible: true
		// });
		// await page.click(modalSearchInputSelector);

		// await page.keyboard.type(this.requestData.town);
		// await page.waitForSelector(searchBodySelector);
		// await page.waitForSelector(searchBarLayerSelector);

		// await page.keyboard.type(this.requestData.town);

		// const globalPage = '.L3eUgb';
		// const acceptCookieSectionSelector = '#L2AGLb';
		// const searchbarSelector = 'textarea.gLFyf';
		// const firedSearchBtnSelector = '.gNO89b';
		// const searchBodySelector = '.GyAeWb';

		// await page.waitForSelector(globalPage);
		// await page.click(acceptCookieSectionSelector);

		// await page.click(searchbarSelector);
		// await page.keyboard.type(searchValue);
		// await page.waitForSelector(firedSearchBtnSelector);
		// await page.click(firedSearchBtnSelector);
		// await page.waitForSelector(searchBodySelector);
		await page.screenshot({
			type: 'png', // can also be "jpeg" or "webp" (recommended)
			path: 'screenshot.png', // where to save it
			fullPage: true // will scroll down to capture everything if true
		});

		await browser.close();
	}
}
// example
// const crawlerWithEvent1 = new Crawler<UpcomingEventFromEventBrite>(new UpcomingEventFromEventBriteCrawler('https://www.eventbrite.fr/'));
// crawlerWithEvent1.getUpcomingEvents().then(events => console.log(events));
