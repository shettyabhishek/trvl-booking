import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { OffersPageRoutingModule } from './offers-routing.module';
import { OffersPage } from './offers.page';

//importing shared module
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffersPageRoutingModule,
    SharedModule
  ],
  declarations: [OffersPage]
})
export class OffersPageModule {}
