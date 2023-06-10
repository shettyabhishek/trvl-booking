import { Component, OnInit } from '@angular/core';

//importing the service
import { PlacesService } from '../places.service';
import { Place } from '../places.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})

export class DiscoverPage implements OnInit {
  public allPlaces: Place[] | undefined;

  constructor(private _placesServ: PlacesService) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.allPlaces = this._placesServ.getPlaces();
  }
}
