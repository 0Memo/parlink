import { Card } from 'flowbite-react';
import { AdWithoutCoordinatesInterface } from '../../services/interfaces/AdWithoutCoordinates';
import { SidebarEvent } from './SidebarEvent';
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";

interface SidebarProps {
    events: AdWithoutCoordinatesInterface[];
}

export default function Sidebar({ events }: SidebarProps) {
    return (
        <>
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
        </>
    );
}