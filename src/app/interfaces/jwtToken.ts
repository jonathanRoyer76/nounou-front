/**
 * Interface représentant le contenu du token JWT décodé
 */
export interface IJwtToken {
    aud: string;
    exp: number;    // Date d'expiration en milliseconds
    rol: Array<string>; // Tableau contenant les roles de l'utilisateur
    sub: string;    // nom de la personne du token
}
