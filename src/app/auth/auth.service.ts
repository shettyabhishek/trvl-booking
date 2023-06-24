import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

//importing constants
import { AppSettingsConstants } from '../shared/appSettings.constants';

//importing the environment
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

//importing all models
import { AuthResponseData } from './auth.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _isauthenticated: boolean = false;

  constructor(private http: HttpClient) { }

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

  signUp(emailInp: string,pwdInp: string): Observable<AuthResponseData>{
    console.log("@@@@@@@@@@@@@@@@@@@@@@@ Sign Up process initiated @@@@@@@@@@@@@@@@@@@@@@@");
    let url = AppSettingsConstants.FIREBASE_SIGN_UP_URL+`${environment.firebaseAPIKEY}`;
    return this.http.post<AuthResponseData>(url,{email: emailInp,password: pwdInp, returnSecureToken: true});
  }

  logIn(emailInp: string,pwdInp: string): Observable<AuthResponseData>{
    let url = AppSettingsConstants.FIREBASE_LOG_IN_URL+`${environment.firebaseAPIKEY}`;
    return this.http.post<AuthResponseData>(url,{email: emailInp,password: pwdInp, returnSecureToken: true});
  }
}
