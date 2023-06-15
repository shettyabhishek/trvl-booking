import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

//importing the route gaurds
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '', component: PlacesPage , children : [{
      path: 'discover',
      children: [
        {path: '', canLoad: [AuthGuard],
          loadChildren: () => import ('./discover/discover.module').then((m) => m.DiscoverPageModule)
        },
        {path: ':placeId', canLoad: [AuthGuard],
          loadChildren: () => import ('./discover/place-detail/place-detail.module').then((m) => m.PlaceDetailPageModule)
        }
      ]
    },{
      path: 'offers',
      children: [
        {path: '', canLoad: [AuthGuard],
          loadChildren: () => import ('./offers/offers.module').then((m) => m.OffersPageModule)},
        {path: 'new', loadChildren: () => import('./offers/new-offer/new-offer.module').then( m => m.NewOfferPageModule)},
        {path: 'edit/:placeId' , canLoad: [AuthGuard],
          loadChildren: () => import('./offers/edit-offer/edit-offer.module').then( m => m.EditOfferPageModule)},
        {path: ':placeId', canLoad: [AuthGuard],
          loadChildren: () => import('./offers/offer-bookings/offer-bookings.module').then( m => m.OfferBookingsPageModule)}
      ]
    }]
  },
  {path: '', redirectTo: 'places/discover', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
