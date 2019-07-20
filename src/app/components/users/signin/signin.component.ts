import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/classes/users';
import { IUser } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users/users.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import Swal from 'sweetalert2';
import { UtilsMethods } from 'src/app/commons/utilsMethods';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnDestroy {

  user: IUser = new User(); // User prompted
  userConnected: IUser = null;  // connected user
  isConnected: boolean; // To know if a user is connected

  constructor(
    private usersService: UsersService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {

    this.usersService.isConnected.subscribe(value => {
      this.isConnected = value;
    });
    this.usersService.userConnectedSubject.subscribe(user => {
      this.userConnected = user;
    });
    if (!this.isConnected) {
      if (this.authenticationService.isTokenInLocalStorage() && this.authenticationService.isTokenAvailable()) {
        this.usersService.getUserbyTokenAndSignIn();
      }
    }
  }

  /**
   * To sign in a user
   */
  signIn() {

    this.authenticationService.signIn(this.user);

  }

  /**
   * To unsubscribe BehaviourSubject
   */
  ngOnDestroy() {
    this.usersService.isConnected.unsubscribe();
    this.usersService.userConnectedSubject.unsubscribe();
  }
}
