import { IRole } from './role';

/**
 * Interface for a user of the application
 */
export interface IUser {
    id: number;
    email: string;
    active: boolean;
    admin: boolean;
    password: string;
    userName: string;
    roles: IRole[];
}
