export interface ProfileInterface {
    id: number;
    file: string;
    firstname: string;
    lastname: string;
    password: string;
    birthDate: Date | null;
    email: string;
    phone: string;
}