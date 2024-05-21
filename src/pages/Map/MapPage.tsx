/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAds } from '../../services/api/ads';
import { useEffect, useState } from 'react';
import { MapProvider } from '../../providers/MapProvider';
import { GoogleMap, MarkerF, InfoWindowF } from "@react-google-maps/api";
import { useNavigate } from 'react-router-dom';
import fakerCategories from '../Ads/fakerCategories';
import { TextInput } from 'flowbite-react';
import { HiSearch } from "react-icons/hi";

type Category = typeof fakerCategories[number]['name'];

interface AdInterface {
    id: number;
    title: string;
    address: string;
    city: string;
    postal_code: string;
    lat: string;
    lng: string;
    start: Date;
    end: Date;
    attendees: number;
    category: string;
    description: string;
    imageUrl: string;
    comments: {
        id: number;
        firstname: string;
        lastname: string;
        message: string;
        date: string;
    }[] | null;
}

interface AdInterfaceWithCoordinates {
    id: number;
    title: string;
    address: string;
    city: string;
    postal_code: string;
    lat: number;
    lng: number;
    start: Date;
    end: Date;
    attendees: number;
    category: string;
    description: string;
    imageUrl: string;
    comments: {
        id: number;
        firstname: string;
        lastname: string;
        message: string;
        date: string;
    }[] | null;
}

export default function MapPage(props: any) {
    const searchQueryFromNavbar = props.searchQuery || '';

    const [ads, setAds] = useState<AdInterfaceWithCoordinates[]>([]);
    const [activeMarker, setActiveMarker] = useState<number | null>(null);
    const [localSearchQuery, setLocalSearchQuery] = useState<string>('');
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
    const [isAllSelected, setIsAllSelected] = useState<boolean>(true);

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

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocalSearchQuery(event.target.value);
    };

    const filteredAds = ads.filter((ad) => {
        const matchesCategory = isAllSelected || selectedCategories.includes(ad.category as Category);
        const matchesSearchQueryFromNavbar = !searchQueryFromNavbar || ad.title.toLowerCase().includes(searchQueryFromNavbar.toLowerCase()) || ad.city.toLowerCase().includes(searchQueryFromNavbar.toLowerCase());
        const matchesLocalSearchQuery = !localSearchQuery || ad.title.toLowerCase().includes(localSearchQuery.toLowerCase()) || ad.city.toLowerCase().includes(localSearchQuery.toLowerCase());
        return matchesCategory && matchesSearchQueryFromNavbar && matchesLocalSearchQuery;
    });

    const handleActiveMarker = (adId: number) => {
        if (adId === activeMarker) {
            return;
        }
        setActiveMarker(adId);
    };

    const navigate = useNavigate();

    const handleViewDetail = (ad: AdInterfaceWithCoordinates) => {
        navigate(`/annonce/${ad.id}`, { state: { ad } });
    };

    useEffect(() => {
        const fetchAndSetAds = async () => {
            try {
                const listAd = await getAds();
                if (listAd) {
                    setAds(listAd.map((ad: AdInterface) => ({
                        ...ad,
                        lat: parseFloat(ad.lat),
                        lng: parseFloat(ad.lng),
                    })));
                }
            } catch (error) {
                console.error('Error fetching ads:', error);
            }
        };

        fetchAndSetAds();
    }, []);

    const defaultMapContainerStyle = {
        width: '1200px',
        height: '80vh',
        borderRadius: '10px 10px 10px 10px',
    };

    const defaultMapCenter = {
        lat: ads.length > 0 ? ads[0].lat : 0,
        lng: ads.length > 0 ? ads[0].lng : 0,
    };

    const defaultMapZoom = 6;

    const defaultMapOptions = {
        zoomControl: true,
        tilt: 0,
        gestureHandling: 'auto',
        mapTypeId: 'satellite',
    };

    if (!filteredAds || filteredAds.length === 0) {
        return (
            <>

                <div className="flex justify-around items-center gap-4 my-6 border-b-2 py-4 text-xs sm:text-lg font-bodyTest">
                {fakerCategories.map((category) => (
                    <div className="event_filter_wrapper relative group" key={category.id}>
                        <div className='relative'>
                            <button
                                onClick={() => handleCategoryChange(category.name as Category)}
                                className={`flex ${selectedCategories.includes(category.name as Category) ? 'font-bold border-b-4 border-b-blue-800' : ''} ${isAllSelected ? 'font-bold border-b-4 border-b-blue-800' : ''}`}
                            >
                                <span>{category.label}</span>
                            </button>
                        </div>
                    </div>
                ))}
                
            </div>

            <h1 className="font-titleTest text-3xl my-8">
                Voir les annonces sur la carte
            </h1>

            <p className='font-bodyTest text-2xl'>Nous n'avons pas trouvé d'évènement.</p>

            <div className="sm:hidden w-50 my-4">
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
                        mapContainerStyle={defaultMapContainerStyle}
                        center={defaultMapCenter}
                        zoom={defaultMapZoom}
                        options={defaultMapOptions}
                    >
                        {filteredAds.map(ad => (
                            <MarkerF
                                key={ad.id}
                                position={{ lat: ad.lat, lng: ad.lng }}
                                onClick={() => handleActiveMarker(ad.id)}>
                                {activeMarker === ad.id ? (
                                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                                        <button
                                            className="text-blue-800 font-bold"
                                            onClick={() => handleViewDetail(ad)}
                                        >
                                            <div>
                                                <p className="font-bold">{ad.title}</p>
                                                <p>{ad.postal_code} {ad.city}</p>
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

    return (
        <>
            

            <div className="flex justify-around items-center gap-4 my-6 border-b-2 py-4 text-xs sm:text-lg font-bodyTest">
                {fakerCategories.map((category) => (
                    <div className="event_filter_wrapper relative group" key={category.id}>
                        <div className='relative'>
                            <button
                                onClick={() => handleCategoryChange(category.name as Category)}
                                className={`flex ${selectedCategories.includes(category.name as Category) ? 'font-bold border-b-4 border-b-blue-800' : ''} ${isAllSelected ? 'font-bold border-b-4 border-b-blue-800' : ''}`}
                            >
                                <span>{category.label}</span>
                            </button>
                        </div>
                    </div>
                ))}
                
            </div>

            <h1 className="font-titleTest text-3xl my-8">
                Voir les annonces sur la carte
            </h1>

            <div className="sm:hidden w-50 my-4">
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
                        mapContainerStyle={defaultMapContainerStyle}
                        center={defaultMapCenter}
                        zoom={defaultMapZoom}
                        options={defaultMapOptions}
                    >
                        {filteredAds.map(ad => (
                            <MarkerF
                                key={ad.id}
                                position={{ lat: ad.lat, lng: ad.lng }}
                                onClick={() => handleActiveMarker(ad.id)}>
                                {activeMarker === ad.id ? (
                                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                                        <button
                                            className="text-blue-800 font-bold"
                                            onClick={() => handleViewDetail(ad)}
                                        >
                                            <div>
                                                <p className="font-bold">{ad.title}</p>
                                                <p>{ad.postal_code} {ad.city}</p>
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