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

  user = new User();
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
    console.log('dans le component');
    this.usersService.signIn().subscribe(data => {
      console.log('retour des datas :')
      console.log(data)
    })
  }

  /**
   * To register a new user
   */
  signUp(){

  }
}
