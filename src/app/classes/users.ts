import { Role } from './roles'

export class User{
    id      : number  = 0;
    email   : string  = "";
    isActive: boolean = false;
    isAdmin : boolean = false;
    password: string  = "";
    userName: string  = "";
    roles   : Role[]  = [];

    constructor(){
        
    }
}