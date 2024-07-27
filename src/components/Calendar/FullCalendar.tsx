/* eslint-disable @typescript-eslint/no-explicit-any */
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';
import { EventInput } from '@fullcalendar/core';
import RenderEventContent from './RenderEventContent';

interface CustomFullCalendarProps {
    mobileView: boolean;
    showWeekNumbers: boolean;
    eventInputs: EventInput[];
    handleEventClick: (eventClickInfo: any) => void;
}

const CustomFullCalendar: React.FC<CustomFullCalendarProps> = ({
    mobileView,
    showWeekNumbers,
    eventInputs,
    handleEventClick,
}) => {
    return (
        <FullCalendar
            timeZone={'local'}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={'dayGridMonth'}
            headerToolbar={{
                start: mobileView ? 'title' : 'prev,today,next',
                center: mobileView ? 'prev,next,today' : 'title',
                end: mobileView ? '' : 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            weekends={true}
            events={eventInputs}
            eventContent={(eventInfo) => <RenderEventContent eventInfo={eventInfo} />}
            eventClick={handleEventClick}
            locale={frLocale}
            weekNumbers={showWeekNumbers}
            navLinks={true}
            dayMaxEvents={true}
            selectable={true}
            height={mobileView ? '95vh' : '90vh'}
        />
    );
};

export default CustomFullCalendar;
