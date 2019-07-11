import * as constants from './constants'

export class UtilsMethods{

    // Save JWT token in local Storage 
    static saveToken(p_token: string){
        localStorage.setItem(constants.LOCAL_STORAGE_TOKEN, p_token);
    }

    // Load and return token in local storage
    static getStoredToken(): string{
        return localStorage.getItem(constants.LOCAL_STORAGE_TOKEN);
    }
}