import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as constants from '../commons/constants';
import { IUser } from '../interfaces/user';
import { User } from '../classes/users';

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
  public signIn(){
    console.log('dans le service') 
    let headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'multipart/form-data')
      // .set('userName', 'jojo') 
      // .set('password', 'pass')
      let body = new User();
      body.password = 'pass';
      body.userName = 'jojo' 
    return this.http.post('http://localhost:8080/login', body, { headers: headers}); 
  }
}
