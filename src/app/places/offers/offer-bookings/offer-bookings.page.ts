import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//importing the services
import { PlacesService } from '../../places.service';

//importing the model
import { Place } from '../../places.model';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  selectedOffer: Place | undefined;

  constructor(private _router:ActivatedRoute,private _placeServ:PlacesService) { }
  ngOnInit() {
    this._router.paramMap.subscribe((param)=>{
      this.selectedOffer = this._placeServ.getOfferDetails(param.get('placeId'));
    })
  }
}
