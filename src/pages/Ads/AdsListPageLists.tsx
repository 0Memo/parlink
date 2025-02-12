/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { format, isSameDay } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Carousel, Label } from "flowbite-react";
import { HiViewList } from "react-icons/hi";
import { MdOutlineApps } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import InfiniteScroll from 'react-infinite-scroll-component';
import { getAds, getAdById, getAdsByParams, getCategories, getSubCategories, getAdsByCategories, getAdsBySubCategories } from '../../services/api/ads';
import { MapProvider } from '../../providers/MapProvider';
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import MapConfig from '../../services/utils/MapConfig';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';
import Nouveau from '../../assets/nouveau.png';
/* import { GiFlexibleStar } from "react-icons/gi"; */

type Category = string;

const initialCategoryCounts: Record<Category, number> = {
    all: 0,
};

const GEOCODE_API_KEY = 'd5192c485eda412caca23991c255a796';

export default function AdsListPage({ searchQuery }: { searchQuery: string }) {
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
    const [isAllSelected, setIsAllSelected] = useState<boolean>(true);
    const [items, setItems] = useState<any[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [adsList, setAdsList] = useState<any[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [categoryCounts, setCategoryCounts] = useState(initialCategoryCounts);
    const [subCategories, setSubCategories] = useState<Record<Category, string[]>>({});
    const { id } = useParams<{ id: string }>();

    console.log('categoryCounts', categoryCounts)

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const ads = await getAds();
                if (ads) {
                    const fetchedAds = await Promise.all(
                        ads.map(async (ad: any) => ({
                            ...ad,
                            coordinates: await fetchCoordinates(ad),
                        }))
                    );
                    setAdsList(fetchedAds);
                    updateCategoryCounts(fetchedAds);
                    fetchInitialItems(fetchedAds);
                }
            } catch(error) {
                console.error('Erreur lors du chargement des annonces:', error);
            }
            
        };
        fetchAds();
        fetchCategories();
    }, []);

    useEffect(() => {
        if (id) {
            fetchAdDetails(id);
        }
    }, [id]);

    useEffect(() => {        
        fetchFilteredAds();
    }, [selectedCategories, searchQuery]);

    const fetchCoordinates = async (ad: any) => {
        const address = `${ad.address}, ${ad.postalCode}, ${ad.city}, ${ad.country}`;
        try {
            const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
                params: {
                    q: address,
                    key: GEOCODE_API_KEY,
                },
            });
            const { lat, lng } = response.data.results[0].geometry;
            return { lat, lng };
        } catch (error) {
            console.error('Erreur lors de la récupération du géocode:', error);
            return null;
        }
    };

    const fetchFilteredAds = async () => {
        try {
            const query = searchQuery || '';
            let response;

            if (isAllSelected || selectedCategories.length === 0) {
                response = await getAdsByParams(query);
            } else {
                const categoryAds = await Promise.all(
                    selectedCategories.map(category => getAdsByCategories(category))
                );
                const ads = categoryAds.flatMap(category => category.data.ads);
                response = { data: { ads } };
            }
            if (!response || !response.data || !Array.isArray(response.data.ads)) {
                console.error(`Erreur: réponse inattendue ou liste d'annonces manquante`, response);
                return;
            }
            const fetchedAds = await Promise.all(
                response.data.ads.map(async (ad: any) => ({
                    ...ad,
                    coordinates: await fetchCoordinates(ad),
                }))
            );
            setItems(fetchedAds.slice(0, 10));
            setHasMore(fetchedAds.length > 10);
        } catch (error) {
            console.error('Erreur lors de la récupération des annonces:', error);
        }
    };

    const fetchInitialItems = (ads: any[]) => {        
        const filteredAds = ads.filter((ad) => {
            const matchesCategory =
                isAllSelected || selectedCategories.length === 0 || selectedCategories.includes(ad.category as Category);
            const matchesSearchQuery =
                !searchQuery ||
                ad.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                ad.city.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearchQuery;
        });

        setItems(filteredAds.slice(0, 6));
        setHasMore(filteredAds.length > 6);
    };

    const handleCategoryChange = async (category: Category) => {
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

        await fetchFilteredAds();
    };

    const handleSubCategoryChange = async (subCategory: string) => {
        try {
            const response = await getAdsBySubCategories(subCategory);
            if (!response || !response.data || !Array.isArray(response.data.ads)) {
                console.error(`Erreur: réponse inattendue ou liste d'annonces manquante pour la sous-catégorie ${subCategory}`, response);
                return;
            }
    
            const fetchedAds = await Promise.all(
                response.data.ads.map(async (ad: any) => ({
                    ...ad,
                    coordinates: await fetchCoordinates(ad),
                }))
            );

            setItems(fetchedAds.slice(0, 10));
            setHasMore(fetchedAds.length > 10);
        } catch (error) {
            console.error(`Erreur lors de la récupération des annonces pour la sous-catégorie ${subCategory}:`, error);
        }
    };

    const handleCategoryHover = async (category: Category) => {
        if (category === 'all') {
            setSubCategories((prevSubCategories) => ({
                ...prevSubCategories,
                [category]: [], // No sub-categories for 'all'
            }));
            return;
        }

        try {
            const response = await getSubCategories(category);
            if (response && response.data && Array.isArray(response.data.subCategories)) {
                setSubCategories((prevSubCategories) => ({
                ...prevSubCategories,
                [category]: response.data.subCategories,
                }));
            } else {
                console.warn(`Réponse inattendue pour les sous-catégories de la catégorie ${category}:`, response);
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

    const fetchMoreData = () => {        
        const currentLength = items.length;
        const filteredAds = adsList.filter((ad) => {
            const matchesCategory =
                isAllSelected || selectedCategories.length === 0 || selectedCategories.includes(ad.category as Category);
            const matchesSearchQuery =
                !searchQuery ||
                ad.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                ad.city.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearchQuery;
        });

        const nextBatch = filteredAds.slice(currentLength, currentLength + 10);
        if (nextBatch.length === 0) {
            setHasMore(false);
            return;
        }

        setTimeout(() => {
            setItems([...items, ...nextBatch]);
        }, 1500);
    };
    
    const updateCategoryCounts = (ads: any[]) => {
        const counts = ads.reduce((acc, ad) => {
            const category = ad.category as Category;
            acc[category] = (acc[category] || 0) + 1;
            acc['all'] = (acc['all'] || 0) + 1;
            return acc;
        }, {} as Record<Category, number>);

        setCategoryCounts((prevCounts) => ({
            ...prevCounts,
            ...counts,
        }));
    };

    const fetchCategories = async () => {
        try {
            const response = await getCategories();
            if (response && response.data && Array.isArray(response.data.categories)) {
                setCategories(response.data.categories);
            } else {
                console.warn(`Réponse inattendue lors de la récupération des catégories:`, response);
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des catégories:', error);
        }
    };

    const fetchAdDetails = async (id: string) => {
        try {
            const ad = await getAdById(id);
            if (ad) {
                const coordinates = await fetchCoordinates(ad);
                setItems([{ ...ad, coordinates }]);
            }
        } catch (error) {
            console.error(`Erreur lors de la récupération des détails de l'annonce avec l'id ${id}:`, error);
        }
    };

    const mapConfig = new MapConfig();

    return (
        <>
            <MapProvider>
                <div className='flex flex-row justify-around items-center gap-4 my-6 border-b-2 py-4 font-bodyTest'>
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
                                            className={`categories flex ${selectedCategories.includes(category) || (category === 'all' && isAllSelected) ? 'font-bold border-b-4 border-b-blue-800 active:relative active:text-white hover:relative hover:text-white text-xs sm:text-lg' : 'flex active:relative active:text-white hover:relative hover:text-white text-xs sm:text-lg'}`}
                                        >
                                            {category === 'all' ? 'Toutes' : category}
                                        </Label>
                                    </span>
                                </Link>
                            </div>
                            {subCategories[category] && subCategories[category].length > 0 && category !== 'all' && (
                                <div className="absolute right-0 mt-2 bg-white shadow-lg p-2 rounded-md w-60 z-10 hidden group-hover:block">
                                    {subCategories[category].map((subcategory, index) => (
                                        <Link
                                            to=""
                                            key={index}
                                            className="block px-3 py-1 text-sm text-gray-800 hover:bg-blue-700 hover:text-white"
                                            onClick={() => handleSubCategoryChange(subcategory)}
                                        >
                                            {subcategory}
                                        </Link>
                                    ))}
                                </div>
                            )}
                            <p className={`${selectedCategories.includes(category) || (category === 'all' && isAllSelected) ? 'font-bold text-sm text-center' : 'font-light text-sm text-center'}`}>
                            </p>
                        </div>
                    ))}
                    <div className='flex justify-end items-center max-sm:hidden'>
                        <Link className='text-blue-800' to="/ads-grid">
                            <MdOutlineApps className='w-8 h-8 tex-blue-800' />
                        </Link>
                        <Link className='text-blue-800' to="/ads-list">
                            <HiViewList className='w-8 h-8' />
                        </Link>
                    </div>
                </div>
                
                {
                    items.length === 0 ? (
                        <>
                            <h2 className="font-titleTest text-3xl my-14">Fil des annonces : {items.length}</h2>
                            <p className='font-bodyTest text-2xl mt-28 italic text-orange-500'>Nous n'avons pas trouvé d'évènement.</p>
                        </>
                    ) : (
                        <h2 className="font-titleTest text-3xl my-14">Fil des annonces : {items.length}</h2>
                    )
                }
                
                <div className="grid grid-cols-1 mb-2">
                    <Carousel>
                        {items.map((event) => (
                            <div key={
                                    event.id
                                } className="relative h-64 md:h-96">
                                <Link to={`/ad/${
                                        event.id
                                    }`} className="link">
                                    <div 
                                        className="absolute inset-0 flex items-end justify-end p-5 bg-cover bg-center bg-no-repeat"
                                        style={{ backgroundImage: `url(${event.adPicture})` }}
                                    >                                    
                                        <div className="p-3 bg-gray-500 bg-opacity-50 text-white">
                                            <b>{format(new Date(event.startTime), "'le' dd/MM/yyyy 'à' HH'h'mm", { locale: fr })}</b><br />
                                            <i>{event.title}</i><br />
                                            <b>{event.city}</b>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </Carousel>
                </div> 
                <InfiniteScroll
                    dataLength={items.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={
                        <div className="flex justify-center items-center w-full">
                            <ThreeDots
                            visible={true}
                            height="80"
                            width="80"
                            color="#1A56DB"
                            radius="8"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            />
                        </div>
                    }
                    endMessage={
                        <p className='text-center mt-6 text-blue-800 endMessage'>
                            <b>Fin de la liste!</b>
                        </p>
                    }
                >            
                    <div className='md:flex flex-wrap justify-between item-center gap-2 mt-8'>
                        {items
                            .filter((event) => {
                                if (searchQuery === '') { return event; }
                                else if (event.title.toLowerCase().includes(searchQuery.toLowerCase()) || event.city.toLowerCase().includes(searchQuery.toLowerCase())) { return event }
                            })
                            .map((event) => 
                                (
                                    <Card key={event.id} className='w-full my-4 shadow-lg relative ...'>
                                        {isSameDay(new Date(event.createdAt), new Date()) && (
                                            <img src={Nouveau} alt="new" className="w-10 h-10 absolute top-0 right-0 ..." />
                                        )}
                                        <Link to={`/ad/${event.id}`} className="w-full link text-blue-800 text-bodyTest">
                                            
                                            <Link to={`/edit-ad/${event.id}`} className="link text-red-800 text-bodyTest">
                                                <CiEdit />
                                            </Link>
                                            <div className=" grid grid-cols-1 md:grid-cols-3" color="violet-900">
                                                <div className='col-span-2 flex flex-col '>
                                                <p className="text-start text-blue-600 p-1">{event.start}</p>
                                                <p className="text-center p-1"><b >{event.title}</b> </p>
                                                <p className="text-justify visible max-sm:hidden mb-1 line-clamp-1">{event.description}</p>
                                                <span className="grid grid-cols-2 ">
                                                    <i className="text-start">{event.city}</i>
                                                    <span className=" text-blue-700 flex gap-1 justify-end items-center font-bold">Nbp: {event.attendees} </span>
                                                </span>
                                                </div>
                                                <div className="w-96 sm:w-full flex justify-center items-center">
                                                    {event.coordinates ? (
                                                        <GoogleMap
                                                            mapContainerStyle={mapConfig.defaultMapContainerStyle('250px','18vh')}
                                                            center={event.coordinates || mapConfig.defaultMapCenter()}
                                                            zoom={mapConfig.defaultMapZoom(18)}
                                                            options={mapConfig.defaultMapOptions(true, 0, 'auto', 'satellite')}
                                                        >
                                                            <MarkerF key={event.id} position={event.coordinates} />
                                                        </GoogleMap>
                                                    ) : (
                                                        <p>Coordonnées indisponibles</p>
                                                    )}
                                                </div>
                                                <i className="flex justify-start absolute bottom-0">{format(new Date(event.startTime), "'le' dd/MM/yyyy 'à' HH'h'mm", { locale: fr })}</i>
                                            </div>
                                    
                                        </Link>
                                    </Card>
                                )
                            )
                        }
                    </div>
                </InfiniteScroll>
            </MapProvider>
        </>
    );
}