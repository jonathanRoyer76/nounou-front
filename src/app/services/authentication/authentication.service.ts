import { Injectable } from '@angular/core';
import * as constants from '../../commons/constants';
import { isNullOrUndefined } from 'util';
import * as jwtDecode from 'jwt-decode';
import { IJwtToken } from 'src/app/interfaces/jwtToken';
import { UtilsMethods } from 'src/app/commons/utilsMethods';
import { IUser } from 'src/app/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { IToken } from 'src/app/interfaces/token';
import { Toaster } from 'src/app/commons/Toaster';
import { UsersService } from '../users/users.service';
import { IPerson } from 'src/app/interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _token: string;
  private _decodedToken: IJwtToken;

  constructor(
    private http: HttpClient,
    private usersService: UsersService) { }

  /**
   * Decode the token and retrieve th eexpiration time
   */
  public decodeToken(): IJwtToken {
    if (!isNullOrUndefined(this._token)) {
      this._decodedToken = jwtDecode(this._token);
      return this._decodedToken;
    }
  }

  /**
   * To know if the token is available
   */
  public isTokenAvailable(): boolean {

    let returnValue: boolean;

    if (isNullOrUndefined(this._token)) {
      this.getStoredToken();
    } else {
      this.decodeToken();
    }
    const actualDate = new Date(Date.now());

    if (actualDate < UtilsMethods.getDateFromTimeStamp(this._decodedToken.exp)) {
      returnValue = true;
    }

    return returnValue;
  }

  /**
   * Return the timestamp in token
   */
  public getExpirationTimestampFromToken(): number {

    let returnValue: number;

    if (isNullOrUndefined(this._decodedToken)) {
      this.decodeToken();
    }
    returnValue = this._decodedToken.exp;

    return returnValue;
  }

  /**
   * Save JWT token in local Storage
   * @param p_token token in localStorage
   */
  public saveToken(p_token: string) {
    this._token = p_token;
    localStorage.setItem(constants.LOCAL_STORAGE_TOKEN, p_token);
  }

  /**
   * Load and return token in local storage
   */
  public getStoredToken(): string {

    if (this.isTokenInLocalStorage()) {
      if (isNullOrUndefined(this._token)) {
        this._token = localStorage.getItem(constants.LOCAL_STORAGE_TOKEN);
        this._decodedToken = this.decodeToken();
      }
    }
    return this._token;

  }

  /**
   * To know if a token is in localStorage
   */
  public isTokenInLocalStorage(): boolean {

    if (!isNullOrUndefined(this._token)) {
      return true;
    }
    if (!isNullOrUndefined(localStorage.getItem(constants.LOCAL_STORAGE_TOKEN))) {
      return true;
    }
    return false;
  }

  /**
   * To sign out a user
   */
  signOut() {
    this._token = null;
    this._decodedToken = null;
    localStorage.setItem(constants.LOCAL_STORAGE_TOKEN, null);
    this.usersService.userConnected = null;
    this.usersService.isConnected.next(false);
    this.usersService.userConnectedSubject.next(null);
  }

  /**
   * To register a new user
   */
  signUp(p_person: IPerson) {

  }

  /**
   * To sign in a user
   */
  public signIn(p_user: IUser): void {

    this.http.post<IToken>(`${constants.SERVER_FULL_PATH}/${constants.USER_SIGNIN}`, p_user, { headers: constants.GLOBAL_HEADERS})
    .subscribe(token => {
      this.saveToken(token.token);
      Toaster.showSuccessPopup(`Bon retour sur le site.`, `Bienvenue`);
      this.usersService.isConnected.next(true);
    }, error => {
      Toaster.error(error.message, 'Identification impossible');
      this.usersService.isConnected.next(false);
    });
  }
}
