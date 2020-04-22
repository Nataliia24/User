export interface User {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    phone: string;
    email: string;
    password: string;
    userAddresses: Address[];
}

export interface Address {
    id: number;
    type: string;
    address: string;
    city: string;
    country: string;
    code: number;
}