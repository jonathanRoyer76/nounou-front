import { Injectable } from '@angular/core';
import * as constants from '../../commons/constants';
import { isNullOrUndefined } from 'util';
import * as jwtDecode from 'jwt-decode';
import { IJwtToken } from 'src/app/interfaces/jwtToken';
import { UtilsMethods } from 'src/app/commons/utilsMethods';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _token: string;
  private _decodedToken: IJwtToken;

  constructor() { }

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
}
