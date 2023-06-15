import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//importing the service
import { PlacesService } from '../places.service';
import { AuthService } from 'src/app/auth/auth.service';

//importing the model
import { Place } from '../places.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})

export class DiscoverPage implements OnInit {
  public allPlaces: Place[] | undefined;

  constructor(private _placesServ: PlacesService,private _auth:AuthService,private _router:Router) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.allPlaces = this._placesServ.getPlaces();
  }

  //application logout function
  logOut(){
    this._auth.logOutUser().subscribe(loggedOut => {
      if(loggedOut) this._router.navigate(['auth']);
    })
  }
}
