import { HttpHeaders } from "@angular/common/http";

/**
 * General
 */
export const LOCAL_STORAGE_TOKEN: string = "JWT_Token";

/**
 * Server config
 */
export const SERVER_URL : string = "http://localhost";
export const SERVER_PORT: number = 8080;
export const GLOBAL_HEADERS: HttpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
                                                         .set('Content-Type', 'application/json')

/**
 * User 
 */
export const USER_SIGNIN: string = "sign-in";
export const USER_GET_ALL: string = "users/getAll"