export interface User {
    id: string;
    firstName: string;
    lastName: string;
    userName: string;
    phone: string;
    email: string;
    password: string;
    address: Address[];
}

export interface Address {
    type: string;
    address: string;
    city: string;
    country: string;
    code: number;
}