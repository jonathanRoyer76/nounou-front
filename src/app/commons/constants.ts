import { HttpHeaders } from "@angular/common/http";

/**
 * Server config
 */
export const SERVER_URL : string = "localhost";
export const SERVER_PORT: number = 8080;
export const HEADER_CORS: HttpHeaders = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });

/**
 * User 
 */
export const USER_SIGNIN: string = "/login";
export const USER_GET_ALL: string = "users/getAll"