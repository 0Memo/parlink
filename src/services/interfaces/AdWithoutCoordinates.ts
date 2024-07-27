import { EventInput } from '@fullcalendar/core';

/* export interface Comment {
    id: number;
    firstname: string;
    lastname: string;
    message: string;
    date: string;
} */

export interface AdWithoutCoordinatesInterface extends Omit<EventInput, 'id'> {
    id: number;
    title: string;
    description: string;
    startTime: Date;
    endTime: Date;
    duration: number;
    address: string;
    postalCode: string;
    city: string;
    country: string;
    attendees: number;
    category: string;
    transport: ["car", "van"];
    conform: boolean;
    status: ["cancel", "report"];
    adPicture: string;
    userId: string;
    categoryId: string;
    subCategoryId: string;
    // comments: Comment[] | null;
}

export interface SidebarProps {
    events: AdWithoutCoordinatesInterface[];
}

export interface SidebarEventProps {
    event: AdWithoutCoordinatesInterface;
}