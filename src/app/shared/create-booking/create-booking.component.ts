import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})

export class CreateBookingComponent  implements OnInit {
  @Input() name: string | undefined;
  @Input() price: number | undefined;

  constructor(private _modalCntl: ModalController) { }

  ngOnInit() {}

  //Function to cancel booking takes 3 parametes.
  /**
   * data to be passed
   * role that is defined for
   * id of the modal to be closed, if undefined then it closes the top most open modal
   */
  cancelBooking(){
    this._modalCntl.dismiss({},'cancel','my_bkng_modal');
  }

  //Function to confirm booking
  bookThePlace(){
    this._modalCntl.dismiss({message: 'Place has been booked.'},'book','my_bkng_modal');
  }

}
