import { Role } from './roles';

export class User {
    id: number;
    email: string;
    isActive: boolean;
    isAdmin: boolean;
    password: string;
    userName: string ;
    roles: Role[]  = [];

    constructor() {
    }
}
