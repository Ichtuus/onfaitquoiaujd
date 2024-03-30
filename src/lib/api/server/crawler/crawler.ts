
interface UpcomingEventFromEventBrite {
	title: string;
	img: string;
	date: string;
	price: string;
	position: string;
}

interface UpcomingEventFromSortirAutour {
	title: string;
    img: string;
    categorie: string;
}

interface UpcomingEventFromTripAdvisor {
    title: string;
    img: string;
    categorie: string;
    price: string;
}

export interface UpComingEventProvider<T> {
    url: string;
    getUpcomingEvents(): Promise<T[]>;
    crawl(): Promise<T[]>
}



// class UpcomingEventFromSortirAutourProvider<T> implements UpComingEventProvider<T> {
//     async getUpcomingEvents(): Promise<T[]> {
//         return [
//             {
//                 title: 'Event 1',
//                 img: 'string',
//                 categorie: 'string'
//             } as T
//         ];
//     }
// }

export class Crawler<T> {
    url: string; 
    private eventProvider: UpComingEventProvider<T>;

    constructor(eventProvider: UpComingEventProvider<T>) {
        this.eventProvider = eventProvider;
    }

    async startCrawler() {
        this.eventProvider.crawl()
    }

    async getUpcomingEvents(): Promise<T[]> {
        return this.eventProvider.getUpcomingEvents() as Promise<T[]>;
    }
}


