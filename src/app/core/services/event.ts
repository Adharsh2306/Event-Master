import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Event } from '../../models/event.model';
import { Venue } from '../../models/venue.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsUrl = 'assets/data/events.json';
  private venuesUrl = 'assets/data/venues.json';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl);
  }

  getEventById(id: number): Observable<Event | undefined> {
    return this.getEvents().pipe(
      map(events => events.find(event => event.id === id))
    );
  }

  getVenues(): Observable<Venue[]> {
    return this.http.get<Venue[]>(this.venuesUrl);
  }
  
  getVenueById(id: number): Observable<Venue | undefined> {
    return this.getVenues().pipe(
      map(venues => venues.find(venue => venue.id === id))
    );
  }
}