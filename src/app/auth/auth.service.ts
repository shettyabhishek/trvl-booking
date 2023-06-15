import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _isauthenticated: boolean = false;

  constructor() { }

  //Function to get the validity of the user trying to login
  validateUser(): Observable<boolean>{
    //in the future implmentation this variable would be set to true or false
    //based on some valid login, say an otp validation or email validation
    this._isauthenticated = true;
    return of(true);
  }

  //Function to get the authentication status
  getAuthentication(): boolean{
    return this._isauthenticated;
  }

  //Function to log out the user
  logOutUser(): Observable<boolean>{
    this._isauthenticated = false;
    return of(true);
  }
}
