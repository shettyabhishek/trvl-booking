import { Injectable } from '@angular/core';

//importing the models
import { Bookings } from './bookings.model';

@Injectable({
  providedIn: 'root'
})

export class BookingsService {
  private _allBookings: Bookings[] = [
    new Bookings("16HATkrH398pmixtKxBUEi25krx1VJyUQN","Jakubowski, Hermiston and Nicolas",3779.91,2,new Date("23-01-2023"),new Date("26-01-2023"),"Booked"),
    new Bookings("16ovymxEK5cHKnUTHPXZeqJrU7ERsFZK5g","Sporer Inc",6979.84, 5,new Date("01-08-2022"), new Date("07-08-2022"),"Booked"),
    new Bookings("1B62xDqL3ufvxCCmrdQDjUAHvHVTWdgLTa","Russel, Lebsack and Runolfsson",6890.90,2,new Date("09-09-2022"),new Date("11-09-2022"),"Booked"),
    new Bookings("1FRBAF7hkVr2zabm1vzNqe7YeEq1EyxU5R","Miller and Sons",3404.09,1,new Date("09-04-2023"),new Date("16-04-2023"),"Confirmed"),
    new Bookings("1HMgN5qUAboFSj7QeeuGR4Acm3vUCtxfF","Mohr, Kovacek and Friesen",4363.59,1,new Date("22-09-2022"),new Date("29-09-2022"),"Confirmed"),
    new Bookings("124nADMjXsgf3V6vyVURYKAGxrMpgYDd7N","Halvorson Inc",9865.06,1,new Date("21-09-2022"),new Date("26-09-2022"),"Confirmed")
  ]
  constructor() { }

  //Function to get all the bookings
  getAllBookings():Bookings[]{
    return [...this._allBookings];
  }

}
