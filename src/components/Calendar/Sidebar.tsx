import { Card } from 'flowbite-react';
import { AdWithoutCoordinatesInterface } from '../../services/interfaces/AdWithoutCoordinates';
import { SidebarEvent } from './SidebarEvent';
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from 'react';

interface SidebarProps {
    events: AdWithoutCoordinatesInterface[];
}

export default function Sidebar({ events }: SidebarProps) {
    const [loading, setLoading] = useState(true);
        
    useEffect(() => {
        // Simulate loading for skeleton demo
        const timer = setTimeout(() => {
        setLoading(false);
        }, 1500); // Adjust the timeout as needed
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <>
            {loading ? (
                // Skeleton Loader
                <div className="flex justify-center items-center mt-22 mb-24">
                    <div className="max-w-sm bg-gray-50 shadow-lg p-4">
                        <Skeleton height={300} width={350} className="mb-4" />
                        <Skeleton count={3} />
                    </div>
                </div>
            ) : events.length > 0 ? (
                    <div className='demo-app-sidebar-section'>
                        <h2 className="text-lg font-titleTest font-bold mb-4 border-e-4 border-solid border-blue-700">Toutes les annonces ({events.length})</h2>
                        <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            
                                    {events.map((event: AdWithoutCoordinatesInterface) => (
                                        <Card key={event.id} className='my-4 shadow-lg'>
                                            <Link to={`/edit-ad/${event.id}`} className="link text-red-800 text-bodyTest">
                                                <CiEdit />
                                            </Link>
                                            <SidebarEvent key={event.id} event={event} />
                                        </Card>
                                    ))}
                        </ul>
                    </div>
                ) : (
                    <>
                        <p className='font-bodyTest text-2xl mt-28 italic text-orange-500'>
                            Nous n'avons pas trouvé d'évènement.
                        </p>
                    </>
                )
            }
        </>
    );
}