import { HttpHeaders } from '@angular/common/http';

/**
 * General
 */
export const LOCAL_STORAGE_TOKEN = 'JWT_Token';
export const TOKEN_BEARER = 'Bearer ';

/**
 * Server config
 */
export const SERVER_URL = 'http://localhost';
export const SERVER_PORT = 8080;
export const SERVER_FULL_PATH = `${SERVER_URL}:${SERVER_PORT}`;
export const GLOBAL_HEADERS: HttpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
                                                         .set('Content-Type', 'application/json');

/**
 * User
 */
export const USER_SIGNIN = 'sign-in';
export const USER_GET_ALL = 'users/getAll';
export const USER_GET_BY_TOKEN = 'getByToken';

/**
 * Types of person
 */
export const TYPES_PERSON_GET_ALL = 'typesPerson/getAll';

/**
 * Persons
 */
export const PERSONS_ADD = 'persons/add';
