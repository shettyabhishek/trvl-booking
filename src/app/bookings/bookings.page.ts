import { Component, OnInit } from '@angular/core';

//importing the services
import { BookingsService } from './bookings.service';
import { Bookings } from './bookings.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})

export class BookingsPage implements OnInit {
  allBookings: Bookings[] | undefined;

  constructor(private _bookingsService: BookingsService) { }

  ngOnInit() {
    this.allBookings = this._bookingsService.getAllBookings();
  }
}
