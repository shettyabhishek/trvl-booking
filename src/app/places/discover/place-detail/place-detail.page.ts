import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../places.service';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../../places.model';

//importing the component that needs to be added as a component to the modal
import { CreateBookingComponent } from '../../../shared/create-booking/create-booking.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})

export class PlaceDetailPage implements OnInit {
  placeDetails: Place | undefined;

  constructor(private _placeServ: PlacesService,private _activatedRoute: ActivatedRoute,private _modalCntl: ModalController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this._activatedRoute.paramMap.subscribe((param) => {
      //obtaining the placeId and fetching the place details using the service method
      let placeId = param.get('placeId') ? param.get('placeId') : undefined;
      this.placeDetails = this._placeServ.getPlaceDetails(placeId);
    })
  }

  //function to book the selectedPlace
  async bookMyPlace(){
    const bookingModal = await this._modalCntl.create({
      component: CreateBookingComponent,
      componentProps: {
        'name': this.placeDetails?.name,
        'price': this.placeDetails?.price
      },
      id: 'my_bkng_modal'
    });

    //Handling the dismiss scenario
    bookingModal.onDidDismiss().then(modalData => {
      console.log(modalData);
    })

    return await bookingModal.present();
  }


}
