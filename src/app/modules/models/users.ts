export interface User {
    status: number;
    message(message: any);
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
    type: string;
    address: string;
    city: string;
    country: string;
    code: number;
}