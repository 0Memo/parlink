/* export interface Comment {
    id: number;
    firstname: string;
    lastname: string;
    message: string;
    date: string;
} */

export interface AdInterface {

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
    categoryId?: string;
    subCategoryId?: string;
    // comments: Comment[] | null;
}
// 
// interface Transport {
//     car: 'car',
//     van: 'van'
//   };
//   interface AdStatus {
//     cancel: 'cancel',
//     report: 'report'
//   };

// interface BodyAdCreate {

//      title: string;
//     description: string;
 
//     startTime?: Date;

//     endTime?: Date;

//     duration?: number;

//     address?: string;

//     postalCode?: string;

//     city?: string;

//     country?: string;

//     attendees?: number;

//     lat: string;

//      lng: string;
//     transport?: Transport;

//     conform?: boolean;

//     status?: AdStatus;

//     adPicture?: string;

//     userId: string;

//     categoryId?: string;

//     subCategoryId?: string;

//     adHasFile?: null; 

//     userHasAd?: null;
// }