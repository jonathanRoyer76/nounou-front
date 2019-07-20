import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as constants from '../../commons/constants';
import { IUser } from '../../interfaces/user';
import { IToken } from '../../interfaces/token';
import { BehaviorSubject } from 'rxjs';
import { Toaster } from '../../commons/Toaster';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public isConnected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public userConnectedSubject: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);
  public userConnected: IUser = null;

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) { }

  /**
   * To sign out a user
   */
  signOut() {

  }

  /**
   * To register a new user
   */
  signUp() {

  }

  /**
   * To sign in a user
   */
  public signIn(p_user: IUser): void {

    this.http.post<IToken>(`${constants.SERVER_FULL_PATH}/${constants.USER_SIGNIN}`, p_user, { headers: constants.GLOBAL_HEADERS})
    .subscribe(token => {
      this.authenticationService.saveToken(token.token);
      Toaster.showSuccessPopup(`Bon retour sur le site.`, `Bienvenue`);
      this.isConnected.next(true);
    }, error => {
      Toaster.error(error.message, 'Identification impossible');
      this.isConnected.next(false);
    });
  }

  /**
   * To retrieve a user from the token
   */
  public getUserbyTokenAndSignIn(): void {

    this.http.get<IUser>(`${constants.SERVER_FULL_PATH}/${constants.USER_GET_BY_TOKEN}`,
    { headers: constants.GLOBAL_HEADERS}).subscribe(user => {
      Toaster.showSuccessPopup(`Bon retour sur le site.`, `Bienvenue`);
      this.userConnected = user;
      this.userConnectedSubject.next(user);
      this.isConnected.next(true);
    }, error => {
      Toaster.error(error.message, `Erreur d'identification`);
      this.userConnectedSubject.next(null);
      this.userConnected = null;
      this.isConnected.next(false);
    });
  }
}
