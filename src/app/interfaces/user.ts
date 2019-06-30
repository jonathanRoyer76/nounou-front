import { IRole } from './role'

/**
 * Interface for a user of the application
 */
export interface IUser{
    id      : number;
    email   : string;
    isActive: boolean;
    isAdmin : boolean;
    password: string;
    userName: string;
    roles   : IRole[];
}