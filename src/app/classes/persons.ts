import { TypePerson } from './typePerson';

export class Person {
    public id: number;
    public firstName: string;
    public lastName: string;
    public birthDate: Date;
    public adress: string;
    public mobileNumber: string;
    public email: string;
    public isActive: boolean;
    public avatarFilePath: string;
    public typePerson: TypePerson;

    constructor() {
    }
}
