import { Role } from './roles';

export class User {
    id: number;
    email: string;
    active: boolean;
    admin: boolean;
    password: string;
    userName: string ;
    roles: Role[]  = [];

    constructor() {
    }
}
