import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/users';
import { IUser } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  user: IUser = new User();
  // To know if a user is connected
  isConnected: boolean = false;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
  }

  /**
   * To sign out a user
   */
  signOut(){

  }

  /**
   * To sign in a user
   */
  signIn(){
    this.usersService.signIn(this.user);
  }

  /**
   * To register a new user
   */
  signUp(){

  }
}
