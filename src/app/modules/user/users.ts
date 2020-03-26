export class Users {
    id: string;
    firstName: string;
    lastName: string;
    userName: string;
    phone: string;
    email: string;
    password: string;

    constructor(id, firstName, lastName, userName, phone, email, password)
    {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }
}