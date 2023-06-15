import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

//importing the services
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanLoad {
  constructor(private _authServ: AuthService, private _router: Router) {}
  canLoad(route: Route): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("Inside canLoad of authguard ",this._authServ.getAuthentication())
    let allowRouting: boolean = this._authServ.getAuthentication() ?  true :  false;
    if(allowRouting)
      return true;
    return this._router.navigate(['auth']);
  }
}
