export interface SubscribedProfileInterface {
    id: number;
    firstname: string,
    lastname: string,
    birthDate: Date,
    email: string,
    phone: string,
    isSubscribed: true,
    subscriptions:
        {
            ad_id: number;
            ad_title: string;
            ad_address: string;
            ad_city: string;
            ad_postal_code: string;
            ad_lat: number;
            ad_lng: number;
            ad_start: Date;
            ad_end: Date;
            ad_attendees: number;
            ad_category: string;
            ad_description: string;
            ad_imageUrl: string | undefined;
            ad_comments: {
                id:number;
                firstname: string;
                lastname: string;
                message: string;
                date: string;
            } [] | null;
        }[] | null;
}