/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from 'react';
import { MapProvider } from '../../providers/MapProvider';
import { GoogleMap, MarkerF, InfoWindowF } from "@react-google-maps/api";
import { Link, useNavigate } from 'react-router-dom';
import { Label, TextInput } from 'flowbite-react';
import { HiSearch } from "react-icons/hi";
import MapConfig from '../../services/utils/MapConfig';
import { debounce } from '../../services/utils/debounce';
import { getAds, getAdsByParams, getCategories, getSubCategories } from '../../services/api/ads';
import { AdWithoutCoordinatesInterface } from '../../services/interfaces/AdWithoutCoordinates';

type Category = string;

export default function MapPage({ searchQuery }: { searchQuery: string }) {
    const [adsList, setAdsList] = useState<any[]>([]);
    const [activeMarker, setActiveMarker] = useState<number | null>(null);
    const [localSearchQuery, setLocalSearchQuery] = useState<string>('');
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
    const [isAllSelected, setIsAllSelected] = useState<boolean>(true);
    const [categories, setCategories] = useState<Category[]>([]);
    const [subCategories, setSubCategories] = useState<Record<Category, string[]>>({});

    useEffect(() => {
        fetchAndSetAds();
        fetchCategories();
    }, []);

    useEffect(() => {
        fetchFilteredAds();
    }, [selectedCategories, localSearchQuery, searchQuery]);

    const fetchAndSetAds = async () => {
        try {
            const listAd = await getAds();
            if (listAd) {
                setAdsList(listAd.map((ad: AdWithoutCoordinatesInterface) => ({
                    ...ad,
                    lat: parseFloat(ad.lat),
                    lng: parseFloat(ad.lng),
                })));
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des annonces:', error);
        }
    };

    const fetchFilteredAds = async () => {
        try {
            const query = localSearchQuery || searchQuery || '';
            const response = await getAdsByParams(query);

            const ads = response.data.ads;

            if (!Array.isArray(ads)) {
                console.error('Attendait une liste d\'annonces mais a reçu:', ads);
                return;
            }

            setAdsList(ads.map((ad: AdWithoutCoordinatesInterface) => ({
                ...ad,
                lat: parseFloat(ad.lat),
                lng: parseFloat(ad.lng),
            })));
        } catch (error) {
            console.error('Erreur lors de la récupération des annonces:', error);
        }
    };

    const filteredAds = adsList.filter((ad) => {
        const matchesCategory =
            selectedCategories.length === 0 || selectedCategories.includes(ad.category as Category);
        const matchesSearchQuery =
            !localSearchQuery ||
            ad.title.toLowerCase().includes(localSearchQuery.toLowerCase()) ||
            ad.city.toLowerCase().includes(localSearchQuery.toLowerCase());
        return matchesCategory && matchesSearchQuery;
    });

    const handleCategoryChange = (category: Category) => {
        if (category === 'all') {
            setSelectedCategories([]);
            setIsAllSelected(true);
        } else {
            setIsAllSelected(false);
            setSelectedCategories((prevCategories) =>
                prevCategories.includes(category)
                    ? prevCategories.filter((c) => c !== category)
                    : [...prevCategories, category]
            );
        }
    };

    const debouncedHandleSearchChange = useCallback(debounce((query: string) => {
        setLocalSearchQuery(query);
    }, 500), []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        debouncedHandleSearchChange(value);
    };

    const handleCategoryHover = async (category: Category) => {
        try {
            const response = await getSubCategories(category);
            if (response && response.data && Array.isArray(response.data.subCategories)) {
                setSubCategories((prevSubCategories) => ({
                ...prevSubCategories,
                [category]: response.data.subCategories,
                }));
            } else {
                console.warn(`Réponse inattendue pour les sous-catégories de la catégorie ${category}:`, response);
                // Handle the case where the response is an empty array or not as expected
                setSubCategories((prevSubCategories) => ({
                    ...prevSubCategories,
                    [category]: [],
                }));
            }
        } catch (error) {
            console.error(`Erreur lors de la récupération des sous-catégories de la catégorie ${category}:`, error);

            setSubCategories((prevSubCategories) => ({
            ...prevSubCategories,
            [category]: [],
            }));
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await getCategories();
            const fetchedCategories = response.data.categories;

            setCategories(fetchedCategories);
            console.log('Catégories récupérées:', fetchedCategories);
        } catch (error) {
            console.error('Erreur lors de la récupération des catégories:', error);
        }
    };

    const handleActiveMarker = (adId: number) => {
        if (adId === activeMarker) {
            return;
        }
        setActiveMarker(adId);
    };

    const navigate = useNavigate();

    const handleViewDetail = (ad: AdWithoutCoordinatesInterface) => {
        navigate(`/annonce/${ad.id}`, { state: { ad } });
    };

    const mapConfig = new MapConfig();

    return (
        <>
            <div className="flex justify-around items-center gap-4 my-6 border-b-2 py-4 text-xs sm:text-lg font-bodyTest">
            {categories.map((category) => (
                        <div className="event_filter_wrapper relative group" key={category}>
                            <div className='relative'>
                                <Link
                                    to=""
                                    onClick={() => handleCategoryChange(category)}
                                    onMouseEnter={() => handleCategoryHover(category)}
                                    className='flex active:ring focus:outline-none focus:border-b-2 focus:border-b-blue-800'
                                >
                                    <span className='active:before:block active:before:absolute active:before:-inset-1 active:before:-skew-y-3 active:before:bg-blue-700 active:relative active:inline-block hover:before:block hover:before:absolute hover:before:-inset-1 hover:before:-skew-y-3 hover:before:bg-blue-700 hover:relative hover:inline-block'>
                                        <Label
                                            htmlFor={category}
                                            className={`flex ${selectedCategories.includes(category) ? 'font-bold border-b-4 border-b-blue-800 active:relative active:text-white hover:relative hover:text-white text-lg' : 'flex active:relative active:text-white hover:relative hover:text-white text-lg'} ${isAllSelected ? 'font-bold border-b-4 border-b-blue-800 active:relative active:text-white hover:relative hover:text-white text-lg' : 'flex active:relative active:text-white hover:relative hover:text-white text-lg'}`}
                                        >
                                            {category}
                                        </Label>
                                    </span>
                                </Link>
                            </div>
                            {subCategories[category] && (
                                <div className="absolute right-0 mt-2 bg-white shadow-lg p-2 rounded-md w-60 z-10 hidden group-hover:block">
                                    {subCategories[category].map((subcategory, index) => (
                                        <Link
                                            to=""
                                            key={index}
                                            className="block px-3 py-1 text-sm text-gray-800 hover:bg-blue-700 hover:text-white"
                                        >
                                            {subcategory}
                                        </Link>
                                    ))}
                                </div>
                            )}
                            <p className={`${selectedCategories.includes(category) || isAllSelected ? 'font-bold text-sm text-center' : 'font-light text-sm text-center'}`}>
                            </p>
                        </div>
                    ))}
            </div>

            {filteredAds.length === 0 ? (
                <p className='font-bodyTest text-2xl my-32 italic text-orange-500'>Nous n'avons pas trouvé d'évènement.</p>
            ) : (
                <h1 className="font-titleTest text-3xl my-14">
                    Voir les annonces sur la carte
                </h1>
            )}

            <div className="sm:hidden w-50 my-16">
                <TextInput
                    className="w-80"
                    id="search"
                    type="text"
                    icon={HiSearch}
                    placeholder="Rechercher..."
                    value={localSearchQuery}
                    onChange={handleSearchChange}
                />
            </div>

            <MapProvider>
                <div className="w-50 sm:w-full flex justify-center items-center">
                    <GoogleMap
                        mapContainerStyle={mapConfig.defaultMapContainerStyle('1200px', '80vh')}
                        center={mapConfig.defaultMapCenter()}
                        zoom={mapConfig.defaultMapZoom(6)}
                        options={mapConfig.defaultMapOptions(true,0,'auto','satellite')}
                    >
                        {filteredAds.map(ad => (
                            <MarkerF
                                key={ad.id}
                                position={{ lat: +ad.lat, lng: +ad.lng }}
                                onClick={() => handleActiveMarker(ad.id)}>
                                {activeMarker === ad.id ? (
                                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                                        <button
                                            className="text-blue-800 font-bold"
                                            onClick={() => handleViewDetail(ad)}
                                        >
                                            <div>
                                                <p className="font-bold">{ad.title}</p>
                                                <p>{ad.postalCode} {ad.city}</p>
                                            </div>
                                        </button>
                                    </InfoWindowF>
                                ) : null}
                            </MarkerF>
                        ))}
                    </GoogleMap>
                </div>
            </MapProvider>
        </>
    );
}