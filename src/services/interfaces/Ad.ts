/* export interface Comment {
    id: number;
    firstname: string;
    lastname: string;
    message: string;
    date: string;
} */

export interface AdInterface {
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
    lat: string;
    lng: string;
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