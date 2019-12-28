import { ITypePerson } from './typePerson';

export interface IPerson {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: Date;
    adress: string;
    mobileNumber: string;
    email: string;
    isActive: boolean;
    typePerson: ITypePerson;
    avatarFilePath: string;
}
