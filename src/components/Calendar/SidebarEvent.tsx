import { AdWithoutCoordinatesInterface } from '../../services/interfaces/AdWithoutCoordinates';
import { useNavigate } from 'react-router-dom';

interface SidebarEventProps {
    event: AdWithoutCoordinatesInterface;
}

export function SidebarEvent({ event }: SidebarEventProps) {
    const startDate = new Date(event.startTime);
    const endDate = new Date(event.endTime);

    const day = startDate.getDate().toString().padStart(2, '0');
    const month = (startDate.getMonth() + 1).toString().padStart(2, '0');
    const year = startDate.getFullYear();
    const hour = startDate.getHours().toString().padStart(2, '0');
    const minute = startDate.getMinutes().toString().padStart(2, '0');

    const endHour = endDate.getHours().toString().padStart(2, '0');
    const endMinute = endDate.getMinutes().toString().padStart(2, '0');

    const formattedDate = `Le ${day}/${month}/${year} de ${hour}h${minute} à ${endHour}h${endMinute}`;

    const navigate = useNavigate();

    const handleViewDetail = (event: AdWithoutCoordinatesInterface) => {
        navigate(`/ad/${event.id}`, { state: { event } });
    };

    return (
        <>
            <li key={event.id}>
                <button
                    className="text-blue-800 text-bold text-bodyTest"
                    onClick={() => handleViewDetail(event)}
                >
                    <div className='flex flex-col'>
                        <b>
                            {event.title}
                        </b>
                        <i className='tracking-wider'>{formattedDate}</i>
                        
                        <i className='flex justify-between items-center'>
                            {event.city} <span className='text-blue-700 font-bold'> Nbp {event.attendees}</span>
                        </i>
                        <img src={event.adPicture} alt="Ad Image" className="w-96 h-40 md:w-80 mt-2" />
                    </div>
                </button>
            </li>
        </>
    )
}