import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as constants from '../commons/constants';
import { IUser } from '../interfaces/user';
import { IToken } from '../interfaces/token';
import { UtilsMethods } from '../commons/utilsMethods'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * To sign in a user
   */
  public signIn(p_user: IUser){
    this.http.post<IToken>(`${constants.SERVER_URL}:${constants.SERVER_PORT}/${constants.USER_SIGNIN}`, p_user, { headers: constants.GLOBAL_HEADERS})
      .subscribe(data => {
        if (data.token != ""){
          UtilsMethods.saveToken(data.token);
        }
      }, err => console.error(err))
  }
}
