import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//importing the gards
import { AuthGuard } from './auth/auth.guard'

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full'},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)},
  { path: 'places', loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)},
  { path: 'bookings', loadChildren: () => import('./bookings/bookings.module').then( m => m.BookingsPageModule),
    canLoad: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
