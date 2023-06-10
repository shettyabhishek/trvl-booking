import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../places.service';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../../places.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})

export class PlaceDetailPage implements OnInit {
  placeDetails: Place | undefined;
  constructor(private _placeServ: PlacesService,private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this._activatedRoute.paramMap.subscribe((param) => {
      //obtaining the placeId and fetching the place details using the service method
      let placeId = param.get('placeId') ? param.get('placeId') : undefined;
      this.placeDetails = this._placeServ.getPlaceDetails(placeId);
    })
  }
}
