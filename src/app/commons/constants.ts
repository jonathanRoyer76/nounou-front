import { HttpHeaders } from '@angular/common/http';

/**
 * General
 */
export const LOCAL_STORAGE_TOKEN = 'JWT_Token';
export const TOKEN_BEARER = 'Bearer ';


export const GLOBAL_HEADERS: HttpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
                                                         .set('Content-Type', 'application/json');
