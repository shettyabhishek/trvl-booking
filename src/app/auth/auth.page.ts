import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AbstractControl , NgForm, NgModel } from '@angular/forms';
import { ToastController } from '@ionic/angular';

//custom constants
import { AppSettingsConstants } from '../shared/appSettings.constants';

//importing the services
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})

export class AuthPage implements OnInit {
  errorMsg: string = AppSettingsConstants.DEFAULT_ERROR;

  constructor(private _router:Router,private _authServ: AuthService,private _ldngSpnr: LoadingController,private _toaster: ToastController) { }
  ngOnInit() {}

  //Function for the form submit
  loginSubmit(frm: NgForm):void{
    if(frm.invalid) return;
    this.logMeIn(frm.controls['email'],frm.controls['pwd']);
  }

  logMeIn(emailInp: NgModel | AbstractControl ,pwdInp: NgModel | AbstractControl): void{
    const loadingSpinnner = this._ldngSpnr.create({
      keyboardClose: false,message: 'Logging In...'
    })
    loadingSpinnner.then((spinnerElement)=>{
      this._authServ.logIn(emailInp.value,pwdInp.value).subscribe(responseData => {
        if(!responseData) { spinnerElement.dismiss(); return};
        console.log("@@@@@@@@@@@@@@@@@ Logged in Successful and Redirecting to Application @@@@@@@@@@@@@@@");
        this._authServ.validateUser().subscribe(resp => {
          if(resp){
            spinnerElement.dismiss();
            this._router.navigate(['/places/discover']);
          }
        })
      },errorResponse => {
        spinnerElement.dismiss();
        const errorType = errorResponse?.error?.error?.message;
        this._loginOrSignUpErrorHandler(errorType);
      });
    })
  }

  //Function for sign in
  signUp(emailInp: NgModel,pwdInp: NgModel){
    const loadingSpinnner = this._ldngSpnr.create({
      keyboardClose: false,message: 'Signing In...'
    })
    loadingSpinnner.then((spinnerElement)=>{
      spinnerElement.present();
      this._authServ.signUp(emailInp.value,pwdInp.value).subscribe(responseData => {
        if(!responseData) { spinnerElement.dismiss(); return};
        console.log("@@@@@@@@@@@@@@@@@ Sign Up Successful and Redirecting to Application @@@@@@@@@@@@@@@");
        this._authServ.validateUser().subscribe(resp => {
          if(resp){
            spinnerElement.dismiss();
            this._router.navigate(['/places/discover']);
          }
        })
      },errorResponse => {
        spinnerElement.dismiss();
        const errorType = errorResponse?.error?.error?.message;
        this._loginOrSignUpErrorHandler(errorType);
      });
    });
  }

  //Function to handle the various error scenarios during sign up or login
  private _loginOrSignUpErrorHandler(errorType: string): void{
    switch(errorType){
      case 'EMAIL_NOT_FOUND': this.errorMsg = 'Invalid user. Email not found.'; break;
      case 'INVALID_PASSWORD': this.errorMsg = 'Invalid password. Please try again.'; break;
      case 'EMAIL_EXISTS': this.errorMsg = 'This USERID already exists.'; break;
      default: break;
    }
    this._toaster.create({
      message: this.errorMsg,
      duration: 2000,
      position: 'middle',
      color: 'danger'
    }).then((toasterElem)=> {
      toasterElem.present();})
  }
}
