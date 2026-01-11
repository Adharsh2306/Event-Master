import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, map } from 'rxjs';
import { EventService } from '../../../core/services/event';
import { Event } from '../../../models/event.model';

@Component({
  selector: 'app-event-overview',
  template: `
    <div *ngIf="event$ | async as event">
      <h2>About this Event</h2>
      <p class="description">{{event.description}}</p>
      <p class="description">
        Join us for an unforgettable experience. This session covers the latest trends and hands-on practices.
      </p>

      <h3>What to Expect</h3>
      <div class="features-grid">
        <div class="feature-item">
          <mat-icon>public</mat-icon>
          <div>
            <strong>Networking</strong>
            <p style="margin: 0; font-size: 0.9rem; color: #666">Connect with industry leaders</p>
          </div>
        </div>
        <div class="feature-item">
          <mat-icon>school</mat-icon>
          <div>
            <strong>Workshops</strong>
            <p style="margin: 0; font-size: 0.9rem; color: #666">Hands-on learning sessions</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .description { font-size: 1.1rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 24px; }
    .features-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 24px; }
    .feature-item { display: flex; gap: 16px; align-items: flex-start; }
    .feature-item mat-icon { color: var(--accent-cyan); background: rgba(0, 188, 212, 0.1); padding: 8px; border-radius: 8px; }
  `],
  standalone: false
})
export class EventOverview implements OnInit {
  event$!: Observable<Event | undefined>;

  constructor(private route: ActivatedRoute, private eventService: EventService) {}

  ngOnInit() {
    this.event$ = this.route.parent!.paramMap.pipe(
      map(params => Number(params.get('id'))),
      switchMap(id => this.eventService.getEventById(id))
    );
  }
}