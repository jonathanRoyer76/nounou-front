import { HttpHeaders } from "@angular/common/http";

/**
 * General
 */
export const LOCAL_STORAGE_TOKEN: string = "JWT_Token";
export const TOKEN_BEARER: string = "Bearer ";

/**
 * Server config
 */
export const SERVER_URL : string = "http://localhost";
export const SERVER_PORT: number = 8080;
export const SERVER_FULL_PATH: string = `${SERVER_URL}:${SERVER_PORT}`;
export const GLOBAL_HEADERS: HttpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
                                                         .set('Content-Type', 'application/json')

/**
 * User 
 */
export const USER_SIGNIN: string = "sign-in";
export const USER_GET_ALL: string = "users/getAll"
export const USER_GET_BY_TOKEN : string = "users/getByToken";