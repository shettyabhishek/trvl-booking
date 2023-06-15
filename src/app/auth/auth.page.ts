import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})

export class AuthPage implements OnInit {
  constructor(private _router:Router,private _authServ: AuthService,private _ldngSpnr: LoadingController) { }
  ngOnInit() {}

  logMeIn(): void{
    const loadingSpinnner = this._ldngSpnr.create({
      keyboardClose: false,message: 'Logging In...'
    })
    this._authServ.validateUser().subscribe(resp => {
      loadingSpinnner.then((spinnerElement)=>{
        spinnerElement.present();
        setTimeout(()=>{
          if(resp){
            spinnerElement.dismiss();
            this._router.navigate(['/places/discover']);
          }
        },1500)
      })
    });
  }

  //Function for sign in
  signIn(){

  }
}
