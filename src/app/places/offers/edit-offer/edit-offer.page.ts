import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//importing the services
import { PlacesService } from '../../places.service';

//importing the models
import { Place } from '../../../places/places.model';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})

export class EditOfferPage implements OnInit {
  editingOffer: Place | undefined;

  constructor(private _placesServ: PlacesService,private _router:ActivatedRoute) { }
  ngOnInit() {
    this._router.paramMap.subscribe((param) => {
      this.editingOffer = this._placesServ.getOfferDetails(param.get('placeId'));
    });
  }
}
