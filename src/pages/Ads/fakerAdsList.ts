import poolcar from '../../assets/poolcar.png';
import childcare from '../../assets/childcare.png';
import event from '../../assets/event.jpg';
import tutoring from '../../assets/tutoring.jpg';

const fakerAdsList = 
[
    {
        id: 1,
        title: "Covoiturage école",
        address: "18 rue Jean Moulin",
        city: "Amiens",
        postal_code: "80000",
        lat: "49.883440",
        lng: "2.281520",
        start: '10/07/2024 à 10h30',
        end: '10/07/2024 à 10h50',
        attendees: 3,
        category: 'poolcar',
        description: "Covoiturage pour emmener les enfants à l'école",
        imageUrl: poolcar,
        comments:
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
        id: 2,
        title: "Garde d'enfants",
        address: "70 rue Pasteur",
        city: "Valence",
        postal_code: "26000",
        lat: "44.951290",
        lng: "4.900990",
        start: '23/05/2024 à 14h15',
        end: '23/05/2024 à 17h15',
        attendees: 2,
        category: 'childcare',
        description: "Garde d'enfants pour l'après-midi",
        imageUrl: childcare,
        comments:
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
        id: 3,
        title: "Sortie collective au zoo",
        address: "5 rue de la victoire",
        city: "Tarbes",
        postal_code: "65000",
        lat: "43.234192",
        lng: "0.071030",
        start: '30/05/2024 à 10h30',
        end: '30/05/2024 à 15h30',
        attendees: 4,
        category: 'events',
        description: "Sortie découverte au zoo",
        imageUrl: event,
        comments:
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
        id: 4,
        title: "Soutien en maths",
        address: "30 av C. de Gaulle",
        city: "Castres",
        postal_code: "81100",
        lat: "43.601580",
        lng: "2.251310",
        start: '12/08/2024 à 15h10',
        end: '12/08/2024 à 16h10',
        attendees: 1,
        category: 'tutoring',
        description: "Cours de soutien en maths niveau CM2",
        imageUrl: tutoring,
        comments:
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
        id: 5,
        title: "Sortie collective au zoo",
        address: "20 rue du port",
        city: "Bordeaux",
        postal_code: "33800",
        lat: "44.8317861",
        lng: "-0.5613553",
        start: '30/05/2024 à 10h30',
        end: '30/05/2024 à 15h30',
        attendees: 4,
        category: 'events',
        description: "Sortie découverte au zoo",
        imageUrl: event,
        comments:
            [

            ]
    },
    {
        id: 6,
        title: "Sortie à la piscine",
        address: "10 boulevard Jean Jaurès",
        city: "Lille",
        postal_code: "59160",
        lat: "50.6362762",
        lng: "3.0189568",
        start: '02/07/202 à  1h15',
        end: '02/07/2024 à 11h45',
        attendees: 4,
        category: 'events',
        description: "Sortie à la piscine",
        imageUrl: event,
        comments:
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
        id: 7,
        title: "Garde d'enfants",
        address: "3 allée des bleuets",
        city: "Narbonne",
        postal_code: "11100",
        lat: "43.1869784",
        lng: "3.0264988",
        start: '12/06/2024 à 14h30',
        end: '12/06/2024 à 16h30',
        attendees: 4,
        category: 'childcare',
        description: "Garde d'enfants pour l'après-midi",
        imageUrl: childcare,
        comments:
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
    },
    {
        id: 8,
        title: "Garde d'enfants",
        address: "28 rue Charles Péguy",
        city: "Béziers",
        postal_code: "34500",
        lat: "43.3475315",
        lng: "3.230261",
        start: '18/10/202 à  9h30',
        end: '18/10/2024 à 10h30',
        attendees: 4,
        category: 'childcare',
        description: "Garde d'enfants pour la matinée",
        imageUrl: childcare,
        comments:
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
        id: 9,
        title: "Covoiturage école",
        address: "40 boulevard Jules Verne",
        city: "Nantes",
        postal_code: "44300",
        lat: "47.2364422",
        lng: "-1.5332915",
        start: '24/09/202 à  8h20',
        end: '24/09/202 à  8h30',
        attendees: 4,
        category: 'poolcar',
        description: "Covoiturage pour emmener les enfants à l'école",
        imageUrl: poolcar,
        comments:
            [
                
            ]
    },
    {
        id: 10,
        title: "Soutien en français",
        address: "8 rue de paris",
        city: "Nancy",
        postal_code: "54000",
        lat: "48.6927117",
        lng: "6.1653217",
        start: '28/05/2024 à 10h15',
        end: '28/05/2024 à 11h15',
        attendees: 4,
        category: 'tutoring',
        description: "Cours de soutien en français niveau CM1",
        imageUrl: tutoring,
        comments:
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
    },
    {
        id: 11,
        title: "Soutien en histoire",
        address: "24 avenue Anatole France",
        city: "Troyes",
        postal_code: "10000",
        lat: "48.285241",
        lng: "4.073956",
        start: '13/09/2024 à 14h30',
        end: '13/09/2024 à 15h30',
        attendees: 4,
        category: 'tutoring',
        description: "Cours de soutien en histoire niveau CM2",
        imageUrl: tutoring,
        comments:
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
        id: 12,
        title: "Covoiturage école",
        address: "50 allée du rossignol",
        city: "Caen",
        postal_code: "14000",
        lat: "49.1935697",
        lng: "-0.3947772",
        start: '30/05/2024 à 10h30',
        end: '30/05/2024 à 15h30',
        attendees: 4,
        category: 'poolcar',
        description: "Covoiturage pour emmener les enfants à l'école",
        imageUrl: poolcar,
        comments:
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
        id: 13,
        title: "Sortie collective au musée",
        address: "38 rue des acacias",
        city: "Montpellier",
        postal_code: "34090",
        lat: "49.1935697",
        lng: "-0.3947772",
        start: '22/09/2024 à 10h15',
        end: '22/09/2024 à 14h30',
        attendees: 4,
        category: 'events',
        description: "Sortie découverte au musée",
        imageUrl: event,
        comments:
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
        id: 14,
        title: "Covoiturage école",
        address: "6 avenue Pierre Brossolette",
        city: "Aix-en-Provence",
        postal_code: "13090",
        lat: "43.5229241",
        lng: "5.442414",
        start: '20/11/202 à  8h10',
        end: '20/11/202 à  8h20',
        attendees: 4,
        category: 'poolcar',
        description: "Covoiturage pour emmener les enfants à l'école",
        imageUrl: poolcar,
        comments:
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
        id: 15,
        title: "Sortie collective au centre aéré",
        address: "5 avenue de l'aérodrome",
        city: "Perpignan",
        postal_code: "66000",
        lat: "42.7213337",
        lng: "2.8856205",
        start: '12/07/2024 à 10h15',
        end: '12/07/2024 à 15h30',
        attendees: 4,
        category: 'events',
        description: "Sortie découverte au centre aéré",
        imageUrl: event,
        comments:
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
    {
        id: 16,
        title: "Covoiturage",
        address: "37 rue de la tour",
        city: "Agen",
        postal_code: "47000",
        lat: "44.2068383",
        lng: "0.6263647",
        start: '13/06/202 à  8h20',
        end: '13/06/202 à  8h30',
        attendees: 4,
        category: 'poolcar',
        description: "Covoiturage pour emmener les enfants à l'école",
        imageUrl: poolcar,
        comments:
            [
                
            ]
    },
    {
        id: 17,
        title: "Soutien en géo",
        address: "6 rue des tanneurs",
        city: "Rennes",
        postal_code: "35700",
        lat: "48.120503",
        lng: "-1.6731231",
        start: '20/06/2024 à 14h30',
        end: '20/06/2024 à 15h30',
        attendees: 4,
        category: 'tutoring',
        description: "Cours de soutien en géographie niveau CM1",
        imageUrl: tutoring,
        comments:
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
        id: 18,
        title: "Garde d'enfants",
        address: "52 rue de la fosse aux loups",
        city: "Nevers",
        postal_code: "58000",
        lat: "46.9859036",
        lng: "3.1822656",
        start: '12/09/202 à  9h30',
        end: '12/09/2024 à 11h30',
        attendees: 4,
        category: 'childcare',
        description: "Garde d'enfants pour la matinée",
        imageUrl: childcare,
        comments:
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
        id: 19,
        title: "Garde d'enfants",
        address: "3 rue marceau",
        city: "Dijon",
        postal_code: "21000",
        lat: "47.3276334",
        lng: "5.0448015",
        start: '30/05/2024 à 15h15',
        end: '30/05/2024 à 17h15',
        attendees: 4,
        category: 'childcare',
        description: "Garde d'enfants pour l'après-midi",
        imageUrl: childcare,
        comments:
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
    },
    {
        id: 20,
        title: "Soutien en maths",
        address: "29 avenue de provence",
        city: "Antibes",
        postal_code: "06000",
        lat: "43.5756631",
        lng: "7.1195755",
        start: '26/10/2024 à 10h30',
        end: '26/10/2024 à 15h30',
        attendees: 4,
        category: 'tutoring',
        description: "Cours de soutien en maths niveau CM1",
        imageUrl: tutoring,
        comments:
            [
                
            ]
    },
    {
        id: 21,
        title: "Sortie collective au jardin botanique",
        address: "6 boulevard de Stalingrad",
        city: "Périgueux",
        postal_code: "24000",
        lat: "45.1833",
        lng: "0.7167",
        start: '07/06/2024 à 9h30',
        end: '07/06/2024 11h30',
        attendees: 4,
        category: 'events',
        description: "Sortie découverte au jardin botanique",
        imageUrl: event,
        comments:
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

export default fakerAdsList;