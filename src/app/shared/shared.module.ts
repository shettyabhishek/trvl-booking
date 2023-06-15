import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

//adding the component
import { CreateBookingComponent } from './create-booking/create-booking.component';

@NgModule({
  declarations: [CreateBookingComponent],
  imports: [
    CommonModule,IonicModule
  ],
  exports: [CreateBookingComponent]
})
export class SharedModule { }
