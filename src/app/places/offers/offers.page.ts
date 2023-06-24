import { Component, OnInit } from '@angular/core';

//importing the service
import { PlacesService } from '../places.service';
import { Offers } from '../offers.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})

export class OffersPage implements OnInit {
  public allOffers: Offers[] | undefined;

  constructor(private _placesServ: PlacesService) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.allOffers = this._placesServ.getOffers();
  }
}
