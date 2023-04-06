import { UserInterface } from "../interfaces/user.interface";

export class User implements UserInterface {
    id!: number;
    email!: string;
    username!: string;
    password!: string;
    phone!: string;

    constructor(user: UserInterface) {
        this.id = user.id;
        this.email = user.email;
        this.username = user.username;
        this.password = user.password;
        this.phone = user.phone;
    }
}