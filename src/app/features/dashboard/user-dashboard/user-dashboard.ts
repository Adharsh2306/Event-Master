import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { BookingService } from '../../../core/services/booking';
import { UserService } from '../../../core/services/user';
import { EventService } from '../../../core/services/event';
import { Booking } from '../../../models/booking.model';

interface BookingView extends Booking {
  eventTitle?: string;
  eventDate?: string;
}

@Component({
  selector: 'app-user-dashboard',
  standalone: false,
  templateUrl: './user-dashboard.html',
  styleUrls: ['./user-dashboard.css'],
})
export class UserDashboard implements OnInit {
  displayedColumns: string[] = ['id', 'eventTitle', 'bookingDate', 'ticketsBooked', 'status'];
  bookings$: Observable<BookingView[]> = of([]);

  constructor(
    private bookingService: BookingService,
    private userService: UserService,
    private eventService: EventService
  ) {}

  ngOnInit() {
    this.bookings$ = this.userService.currentUser$.pipe(
      filter((u): u is NonNullable<typeof u> => !!u),
      switchMap(user => this.bookingService.getBookingsForUser(user.id)),
      switchMap(bookings => {
        if (bookings.length === 0) {
          return of([]);
        }
        
        const requests = bookings.map(b => 
          this.eventService.getEventById(b.eventId).pipe(
            map(event => ({
              ...b, 
              eventTitle: event?.title || 'Unknown Event',
              eventDate: event?.date 
            } as BookingView))
          )
        );
        
        return forkJoin(requests);
      })
    );
  }
}