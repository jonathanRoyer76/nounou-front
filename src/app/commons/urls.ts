/**
 * Server config
 */
export const SERVER_URL = 'http://localhost';
export const SERVER_PORT = 8080;
export const SERVER_FULL_PATH = `${SERVER_URL}:${SERVER_PORT}`;

/**
 * User
 */
export const USER_SIGNIN = 'sign-in';
export const USER_GET_ALL = 'api/users/getAll';
export const USER_GET_BY_TOKEN = 'getUserByToken';

/**
 * Types of person
 */
export const TYPES_PERSON_GET_ALL = 'typesPerson/getAll';

/**
 * Persons
 */
export const PERSONS_ADD = 'persons/add';

/**
 * Nounou
 */
export const ZONE_NOUNOU = 'nounou';
export const CONTRACT_VALUES_ADD = `${ZONE_NOUNOU}/addDefaultIndemnites`;
export const CONTRACT_VALUES_GET = `${ZONE_NOUNOU}/getDefaultIndemnites`;
