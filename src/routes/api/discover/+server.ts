import { SearchDiscoverBuilder } from '$lib/api/server/builder/searchDiscover.builder';
import { fail, json, type RequestEvent } from '@sveltejs/kit';
import 'dotenv/config';
import { RealTimeEventAPI } from './rapidApi/realtime-event';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { basicFormValidationSchema } from '$lib/schemas/basicForm.validation.schema';

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

function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function POST(event: RequestEvent) {
	const requestData = await event.request.json();

	const form = await superValidate(requestData, zod(basicFormValidationSchema));
	console.log(form);

	if (!form.valid) {
		return fail(400, { form });
	}

	// TODO: Do something with the validated form.data

	// Display a success status message
	const searchValue = new SearchDiscoverBuilder()
		.withTown(requestData.town)
		.withTypeShift(requestData.typeShift)
		.withMeta(requestData.meta)
		.build();

	await delay(3000);

	// const realTimeEvent = new RealTimeEventAPI();
	// const events = await realTimeEvent.searchEvents({ query: 'lille' });
	// console.log('EVCENTS', events);

	// return json({ events: events });
	return json([
		{
			event_id:
				'L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA0LTEyfF80Nzg4OTYxMDQ3NDk2MjQyMjQ5',
			event_mid: '/g/11vb9qlk87',
			name: 'Nuit Incolore',
			link: 'https://open.spotify.com/concert/0EWRunvZsabrnuWCHPJ2Pn',
			description:
				'Nuit Incolore concert in Lille, Tickets for Nuit Incolore in Lille, is a concert which takes place on the 04/12/2024 at 00:00 in Le Splendid, Lille, France.',
			start_time: '2024-04-12 20:00:00',
			end_time: '2024-04-13 02:00:00',
			is_virtual: false,
			thumbnail:
				'https://www.fnacspectacles.com/obj/mam/france/94/cf/l-art-dans-la-nature---dali-tickets_213192_1921419_222x222.jpg',
			ticket_links: [
				{
					source: 'bandsintown',
					link: 'https://www.bandsintown.com/e/1029617461?app_id=ggl_feed&came_from=289&utm_medium=web&utm_source=ggl_feed&utm_campaign=event'
				}
			],
			info_links: [
				{ source: 'Spotify', link: 'https://open.spotify.com/concert/0EWRunvZsabrnuWCHPJ2Pn' },
				{
					source: 'Ticketmaster',
					link: 'https://www.ticketmaster.fr/en/manifestation/nuit-incolore-ticket/idmanif/563403'
				},
				{
					source: 'Leclerc Billetterie',
					link: 'https://www.leclercbilletterie.com/en/manifestation/nuit-incolore-ticket/idmanif/563403'
				},
				{
					source: 'Wegow',
					link: 'https://www.wegow.com/au/concerts/nuit-incolore-concert-a-lille-le-splendid'
				},
				{
					source: 'Seatsnet.com',
					link: 'https://www.seatsnet.com/en/concerts/other-concerts/nuit-incolore-en-6/'
				}
			],
			venue: {
				google_id: '0x47c2d5e41be86ae7:0xc555806cb1a4c7b5',
				name: 'Le Splendid - Salle de concert',
				phone_number: '+33320331734',
				website: 'https://www.le-splendid.com/',
				review_count: 1514,
				rating: 4.2,
				subtype: 'concert_hall',
				subtypes: [
					'concert_hall',
					'art',
					'auditorium',
					'culture',
					'education_and_culture',
					'entertainment',
					'entertainment_and_recreation',
					'establishment',
					'establishment_poi',
					'event_venue',
					'feature',
					'hall',
					'live_music_venue',
					'music',
					'nightlife',
					'performing_arts',
					'public_api_establishment'
				],
				latitude: 50.623398,
				longitude: 3.0906942,
				street_number: '1',
				street: 'Place du Mont de Terre',
				city: 'Lille',
				country: 'FR',
				timezone: 'Europe/Paris',
				google_mid: '/g/1tg5yssj'
			},
			tags: ['concert', 'music', 'show'],
			language: 'en'
		},
		{
			event_id:
				'L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA0LTExfF8xNTEwMjk5MzUzOTI5NTA0NDYwNA==',
			event_mid: '/g/11v0z9bq5f',
			name: 'Marianne James',
			link: 'https://open.spotify.com/concert/6gvrCrctO3xDvJsxRTGTVJ',
			description:
				'Dans ce nouveau seule-en-scène musical et irrésistiblement drôle, Marianne James endosse le rôle de professeure de chorale et emmène les spectateurs à la découverte de leur voix.',
			start_time: '2024-04-11 20:00:00',
			end_time: '2024-04-12 02:00:00',
			is_virtual: false,
			thumbnail:
				'https://www.fnacspectacles.com/obj/mam/france/40/fb/marianne-james-tickets_181897_1636720_222x222.jpg',
			ticket_links: [
				{
					source: 'France Billet',
					link: 'https://www.francebillet.com/en/event/marianne-james-tout-est-dans-la-voix-tournee-le-splendid-lille-16850954/'
				},
				{
					source: 'bandsintown',
					link: 'https://www.bandsintown.com/e/1028388448?app_id=ggl_feed&came_from=289&utm_medium=web&utm_source=ggl_feed&utm_campaign=event'
				}
			],
			info_links: [
				{ source: 'Spotify', link: 'https://open.spotify.com/concert/6gvrCrctO3xDvJsxRTGTVJ' },
				{
					source: 'Ticketmaster',
					link: 'https://www.ticketmaster.fr/en/manifestation/marianne-james-ticket/idmanif/550110'
				},
				{ source: 'AllEvents.in', link: 'https://allevents.in/lille/douche' },
				{
					source: 'JamBase',
					link: 'https://www.jambase.com/show/marianne-james-le-splendid-20240411'
				},
				{
					source: 'GigsGuide',
					link: 'https://gigs.guide/event/9OaG8GbNXo/marianne-james-lille-11-apr-2024'
				}
			],
			venue: {
				google_id: '0x47c2d5e41be86ae7:0xc555806cb1a4c7b5',
				name: 'Le Splendid - Salle de concert',
				phone_number: '+33320331734',
				website: 'https://www.le-splendid.com/',
				review_count: 1514,
				rating: 4.2,
				subtype: 'concert_hall',
				subtypes: [
					'concert_hall',
					'art',
					'auditorium',
					'culture',
					'education_and_culture',
					'entertainment',
					'entertainment_and_recreation',
					'establishment',
					'establishment_poi',
					'event_venue',
					'feature',
					'hall',
					'live_music_venue',
					'music',
					'nightlife',
					'performing_arts',
					'public_api_establishment'
				],
				latitude: 50.623398,
				longitude: 3.0906942,
				street_number: '1',
				street: 'Place du Mont de Terre',
				city: 'Lille',
				country: 'FR',
				timezone: 'Europe/Paris',
				google_mid: '/g/1tg5yssj'
			},
			tags: ['music', 'show'],
			language: 'en'
		},
		{
			event_id:
				'L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA0LTEwfDE0MjY1NDk5MjM2MDY5NTM4ODIz',
			event_mid: '/g/11vjzdj_pz',
			name: 'Eloïz',
			link: 'https://open.spotify.com/concert/27cnzlCXrIxUvNLiNainVK',
			description:
				'Eloïz est une autrice, compositrice et interprète, originaire de la région lilloise. A 6 ans, elle découvre la chorale à l’école, puis apprend le piano et la guitare. Rapidement, elle chante les reprises et compose de manière autodidacte : « La musique fait partie intégrante de ma vie, j’en ai besoin quand je suis triste, quand je suis heureuse, j’en ai besoin tout le temps. »\n\nEngagée dans la lutte contre les violences intrafamiliales et la défense des droits des femmes, elle devient gendarme. Parallèlement, elle écrit ses premières chansons, dont "Hey Bro", évoquant l’absence de son demi-frère, qu’elle n’a pas pu voir pendant les premières années de sa vie.',
			start_time: '2024-04-10 20:00:00',
			end_time: '2024-04-10 23:00:00',
			is_virtual: false,
			thumbnail:
				'https://www.fnacspectacles.com/obj/mam/france/71/e0/eloiz-hypersensible-tour-tickets_227477_2047925_222x222.jpg',
			ticket_links: [
				{
					source: 'Fnac Spectacles',
					link: 'https://www.fnacspectacles.com/en/event/eloiz-hypersensible-tour-le-splendid-lille-18040655/'
				},
				{
					source: 'DICE',
					link: 'https://dice.fm/event/o7x6a-eloz-hypersensible-tour-10th-apr-le-splendid-lille-tickets'
				},
				{
					source: 'GigsGuide',
					link: 'https://gigs.guide/event/oBOVAEEa9-/eloiz-hypersensible-tour-lille-10-apr-2024'
				},
				{
					source: 'bandsintown',
					link: 'https://www.bandsintown.com/e/1030496121?app_id=ggl_feed&came_from=289&utm_medium=web&utm_source=ggl_feed&utm_campaign=event'
				}
			],
			info_links: [
				{ source: 'Spotify', link: 'https://open.spotify.com/concert/27cnzlCXrIxUvNLiNainVK' },
				{
					source: 'Carrefour Spectacles',
					link: 'https://www.spectacles.carrefour.fr/en/manifestation/eloiz-ticket/idmanif/571808'
				},
				{
					source: 'Cdiscount Billetterie',
					link: 'https://tickets.cdiscount.com/en/manifestation/eloiz-ticket/idmanif/571808'
				},
				{ source: 'JamBase', link: 'https://www.jambase.com/show/eloiz-le-splendid-20240410' }
			],
			venue: {
				google_id: '0x47c2d5e41be86ae7:0xc555806cb1a4c7b5',
				name: 'Le Splendid - Salle de concert',
				phone_number: '+33320331734',
				website: 'https://www.le-splendid.com/',
				review_count: 1514,
				rating: 4.2,
				subtype: 'concert_hall',
				subtypes: [
					'concert_hall',
					'art',
					'auditorium',
					'culture',
					'education_and_culture',
					'entertainment',
					'entertainment_and_recreation',
					'establishment',
					'establishment_poi',
					'event_venue',
					'feature',
					'hall',
					'live_music_venue',
					'music',
					'nightlife',
					'performing_arts',
					'public_api_establishment'
				],
				latitude: 50.623398,
				longitude: 3.0906942,
				street_number: '1',
				street: 'Place du Mont de Terre',
				city: 'Lille',
				country: 'FR',
				timezone: 'Europe/Paris',
				google_mid: '/g/1tg5yssj'
			},
			tags: ['music', 'show'],
			language: 'en'
		},
		{
			event_id:
				'L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA0LTEyfDUzNTA4Mzc2MTg2NDAzMjg5Nw==',
			event_mid: '/g/11vlcvwbwx',
			name: 'Lysistrata',
			link: 'https://open.spotify.com/concert/42nGEGBzpygtlxNLQqLPdt',
			description:
				"‣ L'Aéronef présente :\nLysistrata (France)\n+ The Big Idea (France)\n\n‣ Rock\n\n‣ Ven. 12 avril 2024\n20h\nClub\n\n6€ web / 3€ abonné.e\n5€ guichet / 7€ le soir\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\nQuatre ans après Breathe In/Out, le trio rock indé Lysistrata fait son grand retour avec Horns, un avant-goût d’un nouvel opus produit par le New-Yorkais Ben Greenberg (Metz, Algiers, Beach Fossils, DIIV) ! Adepte d’une musique dont l’héritage des 90’s n’est plus à prouver, le groupe saintais transcende les étiquettes du post-hardcore et du noise-rock. Au programme : asymétrie, dissonance, murs du son, labyrinthes noise et émotion frontale. Avec une écriture habitée et la part belle faite aux mélodies, le groupe saintais développe encore sa créativité pop, sans jamais dissimuler l'énergie explosive qui a fait sa renommée.\n\nLe sextet voyageur The Big Idea est de retour sur terre un an après The Fabulous Expedition of Le Grand Vésigue (enregistré sur un voilier entre La Rochelle, Mindelo et Pointe-à-Pitre). L’objecti…",
			start_time: '2024-04-12 19:00:00',
			end_time: '2024-04-13 01:00:00',
			is_virtual: false,
			thumbnail:
				'https://aeronef.fr/sites/aeronef/files/styles/16x9_1920/public/2023-11/lysistrata_press_credit_emilija_milusauskaite_copie.jpg?h=82f92a78&itok=di41mbzy',
			ticket_links: [
				{
					source: 'bandsintown',
					link: 'https://www.bandsintown.com/e/105170740?app_id=ggl_feed&came_from=289&utm_medium=web&utm_source=ggl_feed&utm_campaign=event'
				}
			],
			info_links: [
				{ source: 'Spotify', link: 'https://open.spotify.com/concert/42nGEGBzpygtlxNLQqLPdt' },
				{
					source: 'Facebook',
					link: 'https://www.facebook.com/events/la%C3%A9ronef/lysistrata-the-big-idea-la%C3%A9ronefclub/1008610150222085/'
				}
			],
			venue: {
				google_id: '0x47c2d58ad501e803:0x11b7fe335dbc3367',
				name: "L'Aéronef",
				phone_number: '+33320135000',
				website: 'https://aeronef.fr/',
				review_count: 1631,
				rating: 4.6,
				subtype: 'live_music_venue',
				subtypes: [
					'live_music_venue',
					'art',
					'culture',
					'education_and_culture',
					'entertainment',
					'entertainment_and_recreation',
					'establishment',
					'establishment_poi',
					'event_venue',
					'feature',
					'music',
					'performing_arts',
					'public_api_establishment'
				],
				latitude: 50.636887,
				longitude: 3.0735648,
				street_number: '168',
				street: 'Avenue Willy Brandt',
				city: 'Lille',
				country: 'FR',
				timezone: 'Europe/Paris',
				google_mid: '/g/122s8w55'
			},
			tags: ['music', 'show'],
			language: 'en'
		},
		{
			event_id:
				'L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA0LTA5fF8xNzc3ODAwMDQ5MDI1NDUwMTM2NQ==',
			event_mid: '/g/11vbxwx3dc',
			name: 'Dionysos',
			link: 'https://open.spotify.com/concert/23uaEKkxBUMwnYSTiRd8C2',
			description:
				"TU M’ETONNES EN ACCORD AVEC ZOUAVE PRESENTE\nDIONYSOS\nL’EXTRAORDINARIUM\n\n   Mardi 9 Avril 2024 • 20:00\n  L'Aéronef\n   https://www.ticketmaster.fr/.../dionysos.../idmanif/565331\n\n_________________________________________________________________\n\n   DIONYSOS EN CONCERT À LILLE LE 09 AVRIL 2024 !  \n\nDionysos revient à ses premiers amours rock n’roll pour fêter ses 30 ans !\nPlus qu’un concert, c’est un véritable spectacle de rock n’roll à 360 degrés incluant chansons et mise en scène des personnages emblématiques de l’histoire du groupe.\nDe la magie, de l’adrénaline, de l’émotion et des (invités) surprises !\nTout l’univers de Dionysos revisité, plus exactement augmenté car le spectacle comprendra également de nouvelles chansons, histoires et spin-off de personnages.\nComment le Jack de la mécanique du cœur est devenu le Giant Jack de Monsters in love ?\nLe retour du Jedi aura-t-il bien lieu ?\n\nVous le saurez en visitant l’Extraordinarium de Dionysos sur la scène de l'Aéronef.\n\n   Le vestiaire sera …",
			start_time: '2024-04-09 20:00:00',
			end_time: '2024-04-10 02:00:00',
			is_virtual: false,
			thumbnail:
				'https://www.fnacspectacles.com/obj/mam/france/3a/c4/dionysos---l-extraordinarium---tickets_214091_1929081_222x222.jpg',
			ticket_links: [
				{
					source: 'Bandsintown',
					link: 'https://www.bandsintown.com/e/104804833-dionysos-at-l%27aeronef'
				},
				{ source: 'tm7516', link: 'https://www.jambase.com/show/dionysos-laeronef-20240409' }
			],
			info_links: [
				{ source: 'Spotify', link: 'https://open.spotify.com/concert/23uaEKkxBUMwnYSTiRd8C2' },
				{
					source: 'Ticketmaster',
					link: 'https://www.ticketmaster.fr/en/manifestation/dionysos-ticket/idmanif/565331'
				},
				{
					source: 'Carrefour Spectacles',
					link: 'https://www.spectacles.carrefour.fr/en/manifestation/dionysos-ticket/idmanif/565331'
				},
				{
					source: 'Leclerc Billetterie',
					link: 'https://www.leclercbilletterie.com/en/manifestation/dionysos-ticket/idmanif/565331'
				},
				{
					source: 'Evvnt',
					link: 'https://evvnt.com/events/?_evDiscoveryPath=/event/32241906t-dionysos'
				}
			],
			venue: {
				google_id: '0x47c2d58ad501e803:0x11b7fe335dbc3367',
				name: "L'Aéronef",
				phone_number: '+33320135000',
				website: 'https://aeronef.fr/',
				review_count: 1631,
				rating: 4.6,
				subtype: 'live_music_venue',
				subtypes: [
					'live_music_venue',
					'art',
					'culture',
					'education_and_culture',
					'entertainment',
					'entertainment_and_recreation',
					'establishment',
					'establishment_poi',
					'event_venue',
					'feature',
					'music',
					'performing_arts',
					'public_api_establishment'
				],
				latitude: 50.636887,
				longitude: 3.0735648,
				street_number: '168',
				street: 'Avenue Willy Brandt',
				city: 'Lille',
				country: 'FR',
				timezone: 'Europe/Paris',
				google_mid: '/g/122s8w55'
			},
			tags: ['music', 'show'],
			language: 'en'
		},
		{
			event_id:
				'L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA0LTEzfDE4NDE0MjUxMDUyOTczMjk2MDMw',
			event_mid: '/g/11vjt2dt9_',
			name: 'Ben PLG',
			link: 'https://open.spotify.com/concert/6vs0oPJ6ZEfJWvVujiRpU6',
			start_time: '2024-04-13 20:00:00',
			end_time: '2024-04-14 02:00:00',
			is_virtual: false,
			thumbnail:
				'https://aeronef.fr/sites/aeronef/files/styles/16x9_1920/public/2023-12/1080x1350_benplg_photo.jpg?h=e8711843&itok=QrIzBzOu',
			ticket_links: [
				{
					source: 'bandsintown',
					link: 'https://www.bandsintown.com/e/104968118?app_id=ggl_feed&came_from=289&utm_medium=web&utm_source=ggl_feed&utm_campaign=event'
				}
			],
			info_links: [
				{ source: 'Spotify', link: 'https://open.spotify.com/concert/6vs0oPJ6ZEfJWvVujiRpU6' }
			],
			venue: {
				google_id: '0x47c2d58ad501e803:0x11b7fe335dbc3367',
				name: "L'Aéronef",
				phone_number: '+33320135000',
				website: 'https://aeronef.fr/',
				review_count: 1631,
				rating: 4.6,
				subtype: 'live_music_venue',
				subtypes: [
					'live_music_venue',
					'art',
					'culture',
					'education_and_culture',
					'entertainment',
					'entertainment_and_recreation',
					'establishment',
					'establishment_poi',
					'event_venue',
					'feature',
					'music',
					'performing_arts',
					'public_api_establishment'
				],
				latitude: 50.636887,
				longitude: 3.0735648,
				street_number: '168',
				street: 'Avenue Willy Brandt',
				city: 'Lille',
				country: 'FR',
				timezone: 'Europe/Paris',
				google_mid: '/g/122s8w55'
			},
			tags: ['music', 'show'],
			language: 'en'
		},
		{
			event_id:
				'L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA1LTMxfF83NzYyMTgxODgyMDA1OTIyOTI4',
			event_mid: '/g/11y1mkbcv7',
			name: 'Patrick Bruel',
			link: 'https://www.wegow.com/au/concerts/patrick-bruel-concert-a-lille-zenith-arena-8',
			description:
				'Patrick Bruel concert in Lille, Tickets for Patrick Bruel in Lille, is a concert which takes place on the 05/31/2024 at 20:00 in Zenith Arena, Lille, France.',
			start_time: '2024-05-31 20:00:00',
			end_time: '2024-06-01 02:00:00',
			is_virtual: false,
			thumbnail:
				'https://www.fnacspectacles.com/obj/mam/france/55/42/patrick-bruel-tickets_214885_1935949_222x222.jpg',
			ticket_links: [
				{
					source: 'bandsintown',
					link: 'https://www.bandsintown.com/e/1027825836?app_id=ggl_feed&came_from=289&utm_medium=web&utm_source=ggl_feed&utm_campaign=event'
				}
			],
			info_links: [
				{
					source: 'Wegow',
					link: 'https://www.wegow.com/au/concerts/patrick-bruel-concert-a-lille-zenith-arena-8'
				},
				{
					source: 'JamBase',
					link: 'https://www.jambase.com/show/patrick-bruel-zenith-arena-lille-20240531'
				},
				{
					source: 'GigsGuide',
					link: 'https://gigs.guide/event/jmk4Nx6jRmQ/patrick-bruel-lille-31-may-2024'
				}
			],
			venue: {
				google_id: '0x47c2d5f3b13dfd17:0xe01c612e260896a',
				name: 'Zenith Arena Lille',
				phone_number: '+33320141516',
				website: 'http://www.zenithdelille.com/',
				review_count: 8598,
				rating: 4.4,
				subtype: 'live_music_venue',
				subtypes: [
					'live_music_venue',
					'art',
					'culture',
					'education_and_culture',
					'entertainment',
					'entertainment_and_recreation',
					'establishment',
					'establishment_poi',
					'event_venue',
					'feature',
					'music',
					'performing_arts',
					'public_api_establishment'
				],
				latitude: 50.632656,
				longitude: 3.078077,
				street_number: '1',
				street: 'Boulevard des Cités Unies',
				city: 'Lille',
				country: 'FR',
				timezone: 'Europe/Paris',
				google_mid: '/g/11bc6z2ptj'
			},
			tags: ['music', 'show'],
			language: 'en'
		},
		{
			event_id:
				'L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA0LTEyfF8xNDA0MTcwNDg1MTE4NTAxNjI4Ng==',
			event_mid: '/g/11v1125w78',
			name: 'Yamandú Costa',
			link: 'https://open.spotify.com/concert/6cxHZGYocXFJFZi37rTxC9',
			start_time: '2024-04-12 20:00:00',
			end_time: '2024-04-13 02:00:00',
			is_virtual: false,
			thumbnail:
				'https://cdn.helloasso.com/images/campaign_banners/image-concert.jpg?resize=fill:500:360',
			ticket_links: [
				{
					source: 'Bandsintown',
					link: 'https://www.bandsintown.com/e/1028944613-yamandu-costa-at-theatre-charcot'
				}
			],
			info_links: [
				{ source: 'Spotify', link: 'https://open.spotify.com/concert/6cxHZGYocXFJFZi37rTxC9' }
			],
			venue: {
				google_id: '0x47c32a3e9aa89897:0x720a56c815c246f0',
				name: 'Théâtre Charcot',
				phone_number: '+33320454545',
				website: 'http://www.marcq-en-baroeul.org/',
				review_count: 352,
				rating: 4.4,
				subtype: 'performing_arts_theater',
				subtypes: [
					'performing_arts_theater',
					'art',
					'culture',
					'education_and_culture',
					'entertainment',
					'entertainment_and_recreation',
					'establishment',
					'establishment_poi',
					'event_venue',
					'feature',
					'nightlife',
					'performing_arts',
					'public_api_establishment'
				],
				latitude: 50.663418,
				longitude: 3.0834253,
				street_number: '122',
				street: 'Rue du Docteur Charcot',
				city: 'Marcq-en-Barœul',
				country: 'FR',
				timezone: 'Europe/Paris',
				google_mid: '/g/11clydmssc'
			},
			tags: ['music', 'show'],
			language: 'en'
		},
		{
			event_id:
				'L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA0LTEyfDc2MTAxOTQ3NDc0OTkxNDk0NDQ=',
			event_mid: '/g/11vlw39h3r',
			name: 'Jean-Baptiste Guégan - Lille - Le Splendid - Apr 12, 2024',
			link: 'http://ticketmaster-fr.tm7516.net/c/252938/427761/7516?u=https://www.ticketmaster.fr/fr/manifestation/jean-baptiste-guegan-billet/idmanif/556570/idtier/18864121',
			start_time: '2024-04-12 20:00:00',
			is_virtual: false,
			thumbnail:
				'https://www.jambase.com/wp-content/uploads/2021/08/jambase-default-band-image-bw-1480x832.png',
			ticket_links: [
				{
					source: 'tm7516',
					link: 'https://www.jambase.com/show/jean-baptiste-guegan-le-splendid-20240412'
				}
			],
			info_links: [
				{
					source: 'JamBase',
					link: 'https://www.jambase.com/show/jean-baptiste-guegan-le-splendid-20240412'
				}
			],
			venue: {
				google_id: '0x47c2d5e41be86ae7:0xc555806cb1a4c7b5',
				name: 'Le Splendid - Salle de concert',
				phone_number: '+33320331734',
				website: 'https://www.le-splendid.com/',
				review_count: 1514,
				rating: 4.2,
				subtype: 'concert_hall',
				subtypes: [
					'concert_hall',
					'art',
					'auditorium',
					'culture',
					'education_and_culture',
					'entertainment',
					'entertainment_and_recreation',
					'establishment',
					'establishment_poi',
					'event_venue',
					'feature',
					'hall',
					'live_music_venue',
					'music',
					'nightlife',
					'performing_arts',
					'public_api_establishment'
				],
				latitude: 50.623398,
				longitude: 3.0906942,
				street_number: '1',
				street: 'Place du Mont de Terre',
				city: 'Lille',
				country: 'FR',
				timezone: 'Europe/Paris',
				google_mid: '/g/1tg5yssj'
			},
			tags: ['music', 'show'],
			language: 'en'
		},
		{
			event_id:
				'L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA0LTA5fDE0NzYwNTM1MjAzNzkwOTQxODE3',
			event_mid: '/g/11vq8_8q2v',
			name: 'Sean',
			link: 'https://open.spotify.com/concert/1V7sKhskNuoU4ZOCIWePrF',
			description:
				'Sean B concert in Lille, Tickets for Sean B in Lille, is a concert which takes place on the 04/09/2024 at 00:00 in La Bulle Café, Lille, France.',
			start_time: '2024-04-09 20:30:00',
			is_virtual: false,
			thumbnail:
				'https://www.fnacspectacles.com/obj/mam/france/4c/bc/sean-tickets_241497_2177028_222x222.jpg',
			ticket_links: [
				{
					source: 'Fnac Spectacles',
					link: 'https://www.fnacspectacles.com/en/event/sean-la-bulle-cafe-lille-18252533/'
				},
				{
					source: 'Wegow',
					link: 'https://www.wegow.com/se/concerts/sean-b-concert-a-lille-la-bulle-cafe'
				},
				{
					source: 'GigsGuide',
					link: 'https://gigs.guide/event/bxPjtY7Axa/Sean-Lille-2024-04-09'
				}
			],
			info_links: [
				{ source: 'Spotify', link: 'https://open.spotify.com/concert/1V7sKhskNuoU4ZOCIWePrF' },
				{
					source: 'Ticketmaster',
					link: 'https://www.ticketmaster.fr/en/manifestation/sean-ticket/idmanif/575244'
				},
				{
					source: 'Carrefour Spectacles',
					link: 'https://www.spectacles.carrefour.fr/en/manifestation/sean-ticket/idmanif/575244'
				},
				{
					source: 'Leclerc Billetterie',
					link: 'https://www.leclercbilletterie.com/en/manifestation/sean-ticket/idmanif/575244'
				},
				{
					source: 'Ticketmaster France | Secure Online Ticketing For Music, Sport, Family & Shows',
					link: 'https://tickets.cdiscount.com/en/artiste/sean/idartiste/26386'
				}
			],
			venue: {
				google_id: '0x47c2d59404def699:0xbf9af23b9b41d42',
				name: 'La Bulle Cafe',
				phone_number: '+33320950882',
				website: 'http://www.facebook.com/labullecafe/',
				review_count: 76,
				rating: 4.6,
				subtype: 'bar',
				subtypes: [
					'bar',
					'art',
					'auditorium',
					'bars_and_pubs',
					'beverages',
					'concert_hall',
					'culture',
					'education_and_culture',
					'entertainment',
					'entertainment_and_recreation',
					'establishment',
					'establishment_poi',
					'event_venue',
					'feature',
					'food_and_drink',
					'hall',
					'live_music_venue',
					'music',
					'nightlife',
					'performing_arts',
					'public_api_establishment'
				],
				latitude: 50.623135,
				longitude: 3.0677722,
				street_number: '47/49',
				street: "Rue d'Arras",
				city: 'Lille',
				country: 'FR',
				timezone: 'Europe/Paris',
				google_mid: '/g/11gy0szbv8'
			},
			tags: ['music', 'show'],
			language: 'en'
		}
	]);
}
