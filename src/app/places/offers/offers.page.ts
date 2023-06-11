import { Component, OnInit } from '@angular/core';

//importing the service
import { PlacesService } from '../places.service';
import { Place } from '../places.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})

export class OffersPage implements OnInit {
  public allOffers: Place[] | undefined;

  constructor(private _placesServ: PlacesService) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.allOffers = this._placesServ.getOffers();
  }
}
