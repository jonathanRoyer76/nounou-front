import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../../commons/constants';
import { IUser } from '../../interfaces/user';
import { BehaviorSubject } from 'rxjs';
import * as urls from '../../commons/urls';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public isConnected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public userConnectedSubject: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);

  constructor(
    private http: HttpClient
  ) { }

  /**
   * To retrieve a user from the token
   */
  public getUserbyToken(): void {

    this.http.get<IUser>(`${urls.SERVER_FULL_PATH}/${urls.USER_GET_BY_TOKEN}`,
    { headers: constants.GLOBAL_HEADERS}).subscribe(user => {
      this.userConnectedSubject.next(user);
      this.isConnected.next(true);
    }, error => {
      this.userConnectedSubject.next(null);
      this.isConnected.next(false);
    });
  }

}
