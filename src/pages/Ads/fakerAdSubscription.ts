/* eslint-disable @typescript-eslint/no-explicit-any */
import poolcar from '../../assets/poolcar.png';
import childcare from '../../assets/childcare.png';
import event from '../../assets/event.jpg';
import tutoring from '../../assets/tutoring.jpg';

const fakeSubscribedProfile = [
    {
        id: 1,
        firstname: "Luis",
        lastname: "Jaramillo",
        birthDate: new Date(1982, 3, 22),
        email: "ljaramillo@gmail.com",
        phone: "0601060601",
        isSubscribed: true,
        subscriptions: [
            {
                ad_id: 3,
                ad_title: "Sortie collective au zoo",
                ad_address: "5 rue de la victoire",
                ad_city: "Tarbes",
                ad_postal_code: "65000",
                ad_lat: "43.234192",
                ad_lng: "0.071030",
                ad_start: parseDate('30/05/2024', 10, 30),
                ad_end: parseDate('30/05/2024', 15, 30),
                ad_attendees: 4,
                ad_category: 'events',
                ad_description: "Sortie découverte au zoo",
                ad_imageUrl: event,
                ad_comments:
                    [
                        {
                            id: 1,
                            firstname: "Raúl",
                            lastname: "Duque",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                    ]
            },
            {
                ad_id: 5,
                ad_title: "Sortie collective au zoo",
                ad_address: "20 rue du port",
                ad_city: "Bordeaux",
                ad_postal_code: "33800",
                ad_lat: "44.8317861",
                ad_lng: "-0.5613553",
                ad_start: parseDate('30/05/2024', 10, 30),
                ad_end: parseDate('30/05/2024', 15, 30),
                ad_attendees: 4,
                ad_category: 'events',
                ad_description: "Sortie découverte au zoo",
                ad_imageUrl: event,
                ad_comments:
                    [

                    ]
            },
            {
                ad_id: 10,
                ad_title: "Soutien en français",
                ad_address: "8 rue de paris",
                ad_city: "Nancy",
                ad_postal_code: "54000",
                ad_lat: "48.6927117",
                ad_lng: "6.1653217",
                ad_start: parseDate('28/05/2024', 10, 15),
                ad_end: parseDate('28/05/2024', 11, 15),
                ad_attendees: 4,
                ad_category: 'tutoring',
                ad_description: "Cours de soutien en français niveau CM1",
                ad_imageUrl: tutoring,
                ad_comments:
                    [
                        {
                            id: 1,
                            firstname: "Alba",
                            lastname: "Urrutia",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 2,
                            firstname: "Federico",
                            lastname: "Vázquez",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 3,
                            firstname: "Roberto",
                            lastname: "Celedón",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 4,
                            firstname: "Miriam",
                            lastname: "Gómez",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                    ]
            }
        ]
    },
    {
        id: 2,
        firstname: "Paulina",
        lastname: "Delgado",
        birthDate: new Date(1981, 11, 12),
        email: "pdelgado@gmail.com",
        phone: "0601060601",
        isSubscribed: true,
        subscriptions: [
            {
                ad_id: 7,
                ad_title: "Garde d'enfants",
                ad_address: "3 allée des bleuets",
                ad_city: "Narbonne",
                ad_postal_code: "11100",
                ad_lat: "43.1869784",
                ad_lng: "3.0264988",
                ad_start: parseDate('12/06/2024', 14, 30),
                ad_end: parseDate('12/06/2024', 16, 30),
                ad_attendees: 4,
                ad_category: 'childcare',
                ad_description: "Garde d'enfants pour l'après-midi",
                ad_imageUrl: childcare,
                ad_comments:
                    [
                        {
                            id: 1,
                            firstname: "Jorge",
                            lastname: "De León",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 2,
                            firstname: "Emiliano",
                            lastname: "Rodríguez",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 3,
                            firstname: "Lucía",
                            lastname: "Cepeda",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                    ]
            }
        ]
    },
    {
        id: 3,
        firstname: "Gabriel",
        lastname: "Lozano",
        birthDate: new Date(1987, 2, 21),
        email: "glozano@gmail.com",
        phone: "0601060601",
        isSubscribed: true,
        subscriptions: [
            {
                ad_id: 2,
                ad_title: "Garde d'enfants",
                ad_address: "70 rue Pasteur",
                ad_city: "Valence",
                ad_postal_code: "26000",
                ad_lat: "44.951290",
                ad_lng: "4.900990",
                ad_start: parseDate('23/05/2024', 14, 15),
                ad_end: parseDate('23/05/2024', 17, 15),
                ad_attendees: 2,
                ad_category: 'childcare',
                ad_description: "Garde d'enfants pour l'après-midi",
                ad_imageUrl: childcare,
                ad_comments:
                    [
                        {
                            id: 1,
                            firstname: "Laura",
                            lastname: "Morelo",
                            message: "Un message est un test.",
                            date: "envoyé le 22/02/2024",
                        },
                        {
                            id: 2,
                            firstname: "Eduardo",
                            lastname: "Restrepo",
                            message: "Voici mon message de test.",
                            date: "envoyé le 17/03/2024",
                        },
                    ]
            },
            {
                ad_id: 18,
                ad_title: "Garde d'enfants",
                ad_address: "52 rue de la fosse aux loups",
                ad_city: "Nevers",
                ad_postal_code: "58000",
                ad_lat: "46.9859036",
                ad_lng: "3.1822656",
                ad_start: parseDate('12/09/2024', 9, 30),
                ad_end: parseDate('12/09/2024', 11, 30),
                ad_attendees: 4,
                ad_category: 'childcare',
                ad_description: "Garde d'enfants pour la matinée",
                ad_imageUrl: childcare,
                ad_comments:
                    [
                        {
                            id: 1,
                            firstname: "Julia",
                            lastname: "Robles",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 2,
                            firstname: "Helena",
                            lastname: "Zúñiga",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 3,
                            firstname: "Óscar",
                            lastname: "Valiente",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 4,
                            firstname: "Susana",
                            lastname: "León",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                    ]
            },
            {
                ad_id: 4,
                ad_title: "Soutien en maths",
                ad_address: "30 av C. de Gaulle",
                ad_city: "Castres",
                ad_postal_code: "81100",
                ad_lat: "43.601580",
                ad_lng: "2.251310",
                ad_start: parseDate('12/08/2024', 15, 10),
                ad_end: parseDate('12/08/2024', 16, 10),
                ad_attendees: 1,
                ad_category: 'tutoring',
                ad_description: "Cours de soutien en maths niveau CM2",
                ad_imageUrl: tutoring,
                ad_comments:
                    [
                        {
                            id: 1,
                            firstname: "Manuel",
                            lastname: "Torres",
                            message: "Voilà ce message de test.",
                            date: "envoyé le 04/11/2024",
                        },
                        {
                            id: 2,
                            firstname: "Flavia",
                            lastname: "Suárez",
                            message: "Ceci est un message de test.",
                            date: "envoyé le 25/01/2024",
                        },
                        {
                            id: 3,
                            firstname: "Javier",
                            lastname: "Luna",
                            message: "Et un message de test.",
                            date: "envoyé le 04/07/2024",
                        },
                    ]
            },
            {
                ad_id: 1,
                ad_title: "Covoiturage école",
                ad_address: "18 rue Jean Moulin",
                ad_city: "Amiens",
                ad_postal_code: "80000",
                ad_lat: "49.883440",
                ad_lng: "2.281520",
                ad_start: parseDate('10/07/2024', 10, 30),
                ad_end: parseDate('10/07/2024', 10, 50),
                ad_attendees: 3,
                ad_category: 'poolcar',
                ad_description: "Covoiturage pour emmener les enfants à l'école",
                ad_imageUrl: poolcar,
                ad_comments:
                    [
                        {
                            id: 1,
                            firstname: "Gabriel",
                            lastname: "Rubio",
                            message: "Ce message est un test.",
                            date: "envoyé le 10/07/2024",
                        },
                        {
                            id: 2,
                            firstname: "María",
                            lastname: "Moreno",
                            message: "Ceci est un message de test.",
                            date: "envoyé le 25/01/2024",
                        },
                        {
                            id: 3,
                            firstname: "Enrique",
                            lastname: "Quesada",
                            message: "Voici un message de test.",
                            date: "envoyé le 29/09/2024",
                        },
                        {
                            id: 4,
                            firstname: "Teresa",
                            lastname: "Hernández",
                            message: "Mon message de test.",
                            date: "envoyé le 17/05/2024",
                        },
                    ]
            },
            {
                ad_id: 21,
                ad_title: "Sortie collective au jardin botanique",
                ad_address: "6 boulevard de Stalingrad",
                ad_city: "Périgueux",
                ad_postal_code: "24000",
                ad_lat: "45.1833",
                ad_lng: "0.7167",
                ad_start: parseDate('07/06/2024', 9, 30),
                ad_end: parseDate('07/06/2024', 11, 30),
                ad_attendees: 4,
                ad_category: 'events',
                ad_description: "Sortie découverte au jardin botanique",
                ad_imageUrl: event,
                ad_comments:
                    [
                        {
                            id: 1,
                            firstname: "Flavia",
                            lastname: "Feliciano",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 2,
                            firstname: "Luisa",
                            lastname: "Echevarría",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 3,
                            firstname: "Patricia",
                            lastname: "Muñoz",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                    ]
            },
        ]
    },
    {
        id: 4,
        firstname: "Diana",
        lastname: "Reyes",
        birthDate: new Date(1984, 4, 17),
        email: "dreyes@gmail.com",
        phone: "0601060601",
        isSubscribed: true,
        subscriptions: [
            {
                ad_id: 12,
                ad_title: "Covoiturage école",
                ad_address: "50 allée du rossignol",
                ad_city: "Caen",
                ad_postal_code: "14000",
                ad_lat: "49.1935697",
                ad_lng: "-0.3947772",
                ad_start: parseDate('30/05/2024', 10, 30),
                ad_end: parseDate('30/05/2024', 15, 30),
                ad_attendees: 4,
                ad_category: 'poolcar',
                ad_description: "Covoiturage pour emmener les enfants à l'école",
                ad_imageUrl: poolcar,
                ad_comments:
                    [
                        {
                            id: 1,
                            firstname: "Jaime",
                            lastname: "Narváez",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 2,
                            firstname: "Lidia",
                            lastname: "Vélez",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                    ]
            },
            {
                ad_id: 6,
                ad_title: "Sortie à la piscine",
                ad_address: "10 boulevard Jean Jaurès",
                ad_city: "Lille",
                ad_postal_code: "59160",
                ad_lat: "50.6362762",
                ad_lng: "3.0189568",
                ad_start: parseDate('02/07/2024', 10,15),
                ad_end: parseDate('02/07/2024', 11, 45),
                ad_attendees: 4,
                ad_category: 'events',
                ad_description: "Sortie à la piscine",
                ad_imageUrl: event,
                ad_comments:
                    [
                        {
                            id: 1,
                            firstname: "Ernesto",
                            lastname: "Vaerla",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 2,
                            firstname: "Marisa",
                            lastname: "Caicedo",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                    ]
            },
            {
                ad_id: 20,
                ad_title: "Soutien en maths",
                ad_address: "29 avenue de provence",
                ad_city: "Antibes",
                ad_postal_code: "06000",
                ad_lat: "43.5756631",
                ad_lng: "7.1195755",
                ad_start: parseDate('26/10/2024', 10, 30),
                ad_end: parseDate('26/10/2024', 15, 30),
                ad_attendees: 4,
                ad_category: 'tutoring',
                ad_description: "Cours de soutien en maths niveau CM1",
                ad_imageUrl: tutoring,
                ad_comments:
                    [
                        
                    ]
            },
            {
                ad_id: 19,
                ad_title: "Garde d'enfants",
                ad_address: "3 rue marceau",
                ad_city: "Dijon",
                ad_postal_code: "21000",
                ad_lat: "47.3276334",
                ad_lng: "5.0448015",
                ad_start: parseDate('30/05/2024', 15, 15),
                ad_end: parseDate('30/05/2024', 17, 15),
                ad_attendees: 4,
                ad_category: 'childcare',
                ad_description: "Garde d'enfants pour l'après-midi",
                ad_imageUrl: childcare,
                ad_comments:
                    [
                        {
                            id: 1,
                            firstname: "Josefina",
                            lastname: "Enríquez",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 2,
                            firstname: "Mateo",
                            lastname: "Monterola",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 3,
                            firstname: "Ricardo",
                            lastname: "Ruiz",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 4,
                            firstname: "Eduardo",
                            lastname: "Montaner",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 5,
                            firstname: "Juan",
                            lastname: "Alvaredo",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                    ]
            }
        ]
    },
    {
        id: 5,
        firstname: "Laura",
        lastname: "Vives",
        birthDate: new Date(1980, 5, 20),
        email: "lvives@gmail.com",
        phone: "0601060601",
        isSubscribed: true,
        subscriptions: [
            {
                ad_id: 11,
                ad_title: "Soutien en histoire",
                ad_address: "24 avenue Anatole France",
                ad_city: "Troyes",
                ad_postal_code: "10000",
                ad_lat: "48.285241",
                ad_lng: "4.073956",
                ad_start: parseDate('13/09/2024', 14, 30),
                ad_end: parseDate('13/09/2024', 15, 30),
                ad_attendees: 4,
                ad_category: 'tutoring',
                ad_description: "Cours de soutien en histoire niveau CM2",
                ad_imageUrl: tutoring,
                ad_comments:
                    [
                        {
                            id: 1,
                            firstname: "Tina",
                            lastname: "Paz",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 2,
                            firstname: "David",
                            lastname: "Londoño",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                    ]
            },
            {
                ad_id: 14,
                ad_title: "Covoiturage école",
                ad_address: "6 avenue Pierre Brossolette",
                ad_city: "Aix-en-Provence",
                ad_postal_code: "13090",
                ad_lat: "43.5229241",
                ad_lng: "5.442414",
                ad_start: parseDate('20/11/2024', 8, 10),
                ad_end: parseDate('20/11/2024', 8, 20),
                ad_attendees: 4,
                ad_category: 'poolcar',
                ad_description: "Covoiturage pour emmener les enfants à l'école",
                ad_imageUrl: poolcar,
                ad_comments:
                    [
                        {
                            id: 1,
                            firstname: "Iván",
                            lastname: "Gallardo",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 2,
                            firstname: "Cecilia",
                            lastname: "Bravo",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 3,
                            firstname: "Efraín",
                            lastname: "Zuluaga",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 4,
                            firstname: "Héctor",
                            lastname: "Peña",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                    ]
            },
            {
                ad_id: 15,
                ad_title: "Sortie collective au centre aéré",
                ad_address: "5 avenue de l'aérodrome",
                ad_city: "Perpignan",
                ad_postal_code: "66000",
                ad_lat: "42.7213337",
                ad_lng: "2.8856205",
                ad_start: parseDate('12/07/2024', 10, 15),
                ad_end: parseDate('12/07/2024', 15, 30),
                ad_attendees: 4,
                ad_category: 'events',
                ad_description: "Sortie découverte au centre aéré",
                ad_imageUrl: event,
                ad_comments:
                    [
                        {
                            id: 1,
                            firstname: "Pablo",
                            lastname: "Torres",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 2,
                            firstname: "Isabel",
                            lastname: "Montoya",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 3,
                            firstname: "Aleida",
                            lastname: "Jiménez",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                    ]
            },
        ]
    },
    {
        id: 6,
        firstname: "Elías",
        lastname: "Fuentes",
        birthDate: new Date(1984, 4, 17),
        email: "efuentes@gmail.com",
        phone: "0601060601",
        isSubscribed: true,
        subscriptions: [
            {
                ad_id: 8,
                ad_title: "Garde d'enfants",
                ad_address: "28 rue Charles Péguy",
                ad_city: "Béziers",
                ad_postal_code: "34500",
                ad_lat: "43.3475315",
                ad_lng: "3.230261",
                ad_start: parseDate('18/10/2024', 9, 30),
                ad_end: parseDate('18/10/2024', 10, 30),
                ad_attendees: 4,
                ad_category: 'childcare',
                ad_description: "Garde d'enfants pour la matinée",
                ad_imageUrl: childcare,
                ad_comments:
                    [
                        {
                            id: 1,
                            firstname: "Diego",
                            lastname: "Linares",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                    ]
            },
            {
                ad_id: 13,
                ad_title: "Sortie collective au musée",
                ad_address: "38 rue des acacias",
                ad_city: "Montpellier",
                ad_postal_code: "34090",
                ad_lat: "49.1935697",
                ad_lng: "-0.3947772",
                ad_start: parseDate('22/09/2024', 10, 15),
                ad_end: parseDate('22/09/2024', 14, 30),
                ad_attendees: 4,
                ad_category: 'events',
                ad_description: "Sortie découverte au musée",
                ad_imageUrl: event,
                ad_comments:
                    [
                        {
                            id: 1,
                            firstname: "Pedro",
                            lastname: "Clemente",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 2,
                            firstname: "Carolina",
                            lastname: "Heredia",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 3,
                            firstname: "Gabriela",
                            lastname: "Quiñónez",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                    ]
            },
            {
                ad_id: 17,
                ad_title: "Soutien en géo",
                ad_address: "6 rue des tanneurs",
                ad_city: "Rennes",
                ad_postal_code: "35700",
                ad_lat: "48.120503",
                ad_lng: "-1.6731231",
                ad_start: parseDate('20/06/2024', 14, 30),
                ad_end: parseDate('20/06/2024', 15, 30),
                ad_attendees: 4,
                ad_category: 'tutoring',
                ad_description: "Cours de soutien en géographie niveau CM1",
                ad_imageUrl: tutoring,
                ad_comments:
                    [
                        {
                            id: 1,
                            firstname: "Carlos",
                            lastname: "Núñez",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 2,
                            firstname: "Francisco",
                            lastname: "Villanueva",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 3,
                            firstname: "Jairo",
                            lastname: "Márquez",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                        {
                            id: 4,
                            firstname: "Beatriz",
                            lastname: "Galarza",
                            message: "Un petit message de test.",
                            date: "envoyé le 24/04/2024",
                        },
                    ]
            },
            {
                ad_id: 9,
                ad_title: "Covoiturage école",
                ad_address: "40 boulevard Jules Verne",
                ad_city: "Nantes",
                ad_postal_code: "44300",
                ad_lat: "47.2364422",
                ad_lng: "-1.5332915",
                ad_start: parseDate('24/09/2024', 8, 20),
                ad_end: parseDate('24/09/2024', 8, 30),
                ad_attendees: 4,
                ad_category: 'poolcar',
                ad_description: "Covoiturage pour emmener les enfants à l'école",
                ad_imageUrl: poolcar,
                ad_comments:
                    [
                        
                    ]
            },
            {
                ad_id: 16,
                ad_title: "Covoiturage",
                ad_address: "37 rue de la tour",
                ad_city: "Agen",
                ad_postal_code: "47000",
                ad_lat: "44.2068383",
                ad_lng: "0.6263647",
                ad_start: parseDate('13/06/2024', 8, 20),
                ad_end: parseDate('13/06/2024', 8, 30),
                ad_attendees: 4,
                ad_category: 'poolcar',
                ad_description: "Covoiturage pour emmener les enfants à l'école",
                ad_imageUrl: poolcar,
                ad_comments:
                    [
                        
                    ]
            },
        ]
    },
]

function parseDate(dateString:any, hour = 0, minute = 0) {
    const [day, month, year] = dateString.split('/');
    return new Date(year, month - 1, day, hour, minute);
}

export default fakeSubscribedProfile;