import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, map, filter } from 'rxjs';
import { EventService } from '../../../core/services/event';
import { Venue } from '../../../models/venue.model';

@Component({
  selector: 'app-event-venue-info',
  template: `
    <div *ngIf="venue$ | async as venue">
      <h2>{{venue.name}}</h2>
      <p class="description">{{venue.address}}, {{venue.city}}</p>
      
      <div style="background: #f5f5f5; height: 300px; display: flex; align-items: center; justify-content: center; border-radius: 12px; margin-top: 24px;">
        <div style="text-align: center; color: #999;">
          <mat-icon style="font-size: 48px; width: 48px; height: 48px;">map</mat-icon>
          <p>Interactive Map View</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .description { font-size: 1.1rem; line-height: 1.8; color: var(--text-secondary); }
  `],
  standalone: false
})
export class EventVenueInfo implements OnInit {
  venue$!: Observable<Venue | undefined>;

  constructor(private route: ActivatedRoute, private eventService: EventService) {}

  ngOnInit() {
    this.venue$ = this.route.parent!.paramMap.pipe(
      map(params => Number(params.get('id'))),
      switchMap(id => this.eventService.getEventById(id)),
      filter(e => !!e),
      switchMap(e => this.eventService.getVenueById(e!.venueId))
    );
  }
}