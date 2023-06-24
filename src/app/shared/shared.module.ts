import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

//adding the component
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { DateFormatterPipe } from './date-formatter.pipe';

@NgModule({
  declarations: [CreateBookingComponent, DateFormatterPipe],
  imports: [
    CommonModule,IonicModule
  ],
  exports: [CreateBookingComponent,DateFormatterPipe]
})
export class SharedModule { }
