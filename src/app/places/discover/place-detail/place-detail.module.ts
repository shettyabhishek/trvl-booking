import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceDetailPageRoutingModule } from './place-detail-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { PlaceDetailPage } from './place-detail.page';

//import { CreateBookingComponent } from '../../../shared/create-booking/create-booking.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [PlaceDetailPage],
})
export class PlaceDetailPageModule {}
