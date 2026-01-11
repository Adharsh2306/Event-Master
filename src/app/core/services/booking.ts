import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Booking } from '../../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookingsUrl = 'assets/data/bookings.json';
  // Simulating in-memory database for new bookings in this session
  private sessionBookings: Booking[] = [];

  constructor(private http: HttpClient) { }

  getBookingsForUser(userId: number): Observable<Booking[]> {
    // In a real app, this would be a filtered backend query.
    // Here we combine static file data with session data.
    return new Observable(observer => {
      this.http.get<Booking[]>(this.bookingsUrl).subscribe({
        next: (data) => {
          const allBookings = [...data, ...this.sessionBookings];
          const userBookings = allBookings.filter(b => b.userId === userId);
          observer.next(userBookings);
          observer.complete();
        },
        error: (err) => observer.error(err)
      });
    });
  }

  createBooking(booking: Booking): Observable<Booking> {
    // Assign a mock ID
    booking.id = Math.floor(Math.random() * 10000) + 1000;
    this.sessionBookings.push(booking);
    return of(booking);
  }
}