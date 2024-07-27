/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Button, Card, Label, TextInput, Textarea } from 'flowbite-react';
import { useParams } from 'react-router-dom';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { HiPencilAlt } from 'react-icons/hi';
import MapConfig from '../../services/utils/MapConfig';
import axios from 'axios';

import { getAds } from '../../services/api/ads';
import { AdInterface } from '../../services/interfaces/Ad';
import { MapProvider } from '../../providers/MapProvider';

const GEOCODE_API_KEY = 'd5192c485eda412caca23991c255a796';

export default function AdsDetailPage() {
    const { idAd } = useParams<{ idAd: string }>();
    const [ads, setAds] = useState<AdInterface | null>(null);
    const [selectedAttendees, setSelectedAttendees] = useState<number>(0);
    const [remainingAttendees, setRemainingAttendees] = useState<number>(0);
    const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);

    useEffect(() => {
        const loadAds = async () => {
            try {
                const listAd = await getAds();
                if (listAd) {
                    const selectedAd = listAd.find((ad: any) => ad.id.toString() === idAd);
                    if (selectedAd) {
                        setAds({
                            ...selectedAd,
                            lat: parseFloat(selectedAd.lat),
                            lng: parseFloat(selectedAd.lng),
                        });
                    } else {
                        setAds(null);
                    }
                }
            } catch (error) {
                console.error('Erreur lors du chargement des annonces:', error);
            }
        };
        loadAds();
    }, [idAd]);

    useEffect(() => {
        if (ads) {
            const remaining = ads.attendees - selectedAttendees;
            setRemainingAttendees(remaining);

            const address = `${ads.address}, ${ads.postalCode}, ${ads.city}, ${ads.country}`;
            handleGeocode(address);
        }
    }, [ads, selectedAttendees]);

    const handleAttendeesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        setSelectedAttendees(value);
    };

    const mapConfig = new MapConfig();

    const handleGeocode = async (address: string) => {
        try {
            const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
                params: {
                    q: address,
                    key: GEOCODE_API_KEY,
                },
            });
            const { lat, lng } = response.data.results[0].geometry;
            setCoordinates({ lat, lng });
        } catch (error) {
            console.error('Erreur lors de la récupération du géocode:', error);
        }
    };

    const startDate = ads ? new Date(ads.startTime) : new Date();
    const endDate = ads ? new Date(ads.endTime) : new Date();

    const formattedDate = `${startDate.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    })} de ${startDate.toLocaleTimeString('fr-FR')} à ${endDate.toLocaleTimeString('fr-FR')}`;

    return (
        <>
            <MapProvider>
                <h1 className="font-titleTest text-3xl sm:my-40">Fiche de l'annonce</h1>

                {!ads ? (
                    <p className="font-bodyTest text-2xl my-32 italic text-orange-500">
                        Oups! Il n'y a pas d'annonce correspondante
                    </p>
                ) : (
                    <div className="flex justify-center items-center ml-1 sm:ml-0 scale-90 sm:scale-100">
                        <Card>
                            <p className="text-xl font-titleTest border-b-4 border-blue-700">
                                <strong>{ads.title}</strong>
                            </p>
                            <div className="flex justify-start items-start mt-10 gap-36 font-bodyTest italic">
                                <div className="flex flex-col justify-start items-start">
                                    <p>{ads.address}</p>
                                    <div className="flex flex-row gap-6">
                                        <p>{ads.postalCode} </p>
                                        <p>{ads.city}</p>
                                    </div>
                                </div>
                                <p>{formattedDate}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <img src={ads.adPicture} alt="Ad Image" className="w-40 h-auto" />
                                <p className="mt-10 mb-8 max-w-xs break-words">{ads.description}</p>
                            </div>

                            <div className="w-96 sm:w-full flex justify-center items-center">
                                <GoogleMap
                                    mapContainerStyle={mapConfig.defaultMapContainerStyle('400px', '30vh')}
                                    center={coordinates || mapConfig.defaultMapCenter()}
                                    zoom={mapConfig.defaultMapZoom(18)}
                                    options={mapConfig.defaultMapOptions(true, 0, 'auto', 'satellite')}
                                >
                                    {coordinates && <Marker position={coordinates} />}
                                </GoogleMap>
                            </div>

                            <div className="flex flex-row justify-start items-start mt-8 gap-44">
                                <div className="flex flex-col">
                                    <p>Places disponibles: {remainingAttendees}</p>
                                    <TextInput
                                        id="attendees"
                                        name="attendees"
                                        type="number"
                                        value={selectedAttendees.toString()}
                                        onChange={handleAttendeesChange}
                                        min="0"
                                        max={ads.attendees.toString()}
                                    />
                                </div>
                                <div className="mb-2 block">
                                    <Label htmlFor="comment" value="Discussions" />
                                </div>
                            </div>
                            <div className="flex justify-evenly gap-8 font-bodyTest mt-8 mb-10">
                                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gray-700 relative flex gap-2 mt-2">
                                    <Button className="bg-gray-700">
                                        <span className="relative m-1">Contacter</span>
                                    </Button>
                                </span>
                                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-700 relative flex gap-2 mt-2">
                                    <Button className="bg-blue-700">
                                        <span className="relative text-white m-1">S'inscrire</span>
                                    </Button>
                                </span>
                            </div>

                            <div className="relative">
                                <Textarea
                                    id="comment"
                                    name="comment"
                                    className="font-bodyTest mb-8 pl-10 h-22"
                                    placeholder="Commentaire..."
                                    rows={2}
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-6">
                                    <HiPencilAlt className="text-gray-400 h-5 w-5" />
                                </div>
                            </div>
                        </Card>
                    </div>
                )}
            </MapProvider>
        </>
    );
}