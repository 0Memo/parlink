
const fakerCategories = [
    {
        id: "1",
        name: 'all',
        label: "Toutes",
    },
    {
        id: "2",
        name: 'poolcar',
        label: "Covoiturage",
        group: [
            {
                id: 1,
                title: 'Musées et centres d\'expositions' ,
            },
            {
                id: 2,
                title: 'Zoos et aquariums',
            },
            {
                id: 3,
                title: 'Parcs et jardins',
            },
            {
                id: 4,
                title: 'Camps de vacances',
            }
        ]
    },
    {
        id: "3",
        name: 'tutoring',
        label: "Soutien",
        group: [
            {
                id: 1,
                title: 'Mathématiques',
            },
            {
                id: 2,
                title: 'Enseignement moral et civique',
            },
            {
                id: 3,
                title: 'Histoire-géographie',
            },
            {
                id: 4,
                title: 'Technologie',
            }
        ]
    },
    {
        id: "4",
        name: 'childcare',
        label: "Garderie",
        group: [
            {
                id: 1,
                title: 'La garde à domicile partagée',
            },
            {
                id: 2,
                title: 'La crèche familial',
            },
            {
                id: 3,
                title: 'L\'assistance maternelle',
            },
            {
                id: 4,
                title: 'La garde à domicile',
            }
        ]
    },
    {
        id: "5",
        name: 'events',
        label: "Sortie",
        group: [
            {
                id: 1,
                title: 'Piscine',
            },
            {
                id: 2,
                title: 'Promenade',
            },
            {
                id: 3,
                title: 'Ressources',
            },
            {
                id: 4,
                title: 'Parc',
            }
        ]
    }
]

export default fakerCategories;