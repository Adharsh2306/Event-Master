import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, map, shareReplay, filter } from 'rxjs';
import { EventService } from '../../../core/services/event';
import { Event } from '../../../models/event.model';
import { Venue } from '../../../models/venue.model';

@Component({
  selector: 'app-event-detail',
  standalone: false,
  templateUrl: './event-detail.html',
  styleUrls: ['./event-detail.css'],
})
export class EventDetail implements OnInit {
  event$!: Observable<Event | undefined>;
  venue$!: Observable<Venue | undefined>;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit() {
    this.event$ = this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      switchMap(id => this.eventService.getEventById(id)),
      shareReplay(1)
    );

    this.venue$ = this.event$.pipe(
      filter((e): e is Event => !!e),
      switchMap(e => this.eventService.getVenueById(e.venueId))
    );
  }
}