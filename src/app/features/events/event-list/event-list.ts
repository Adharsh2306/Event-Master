import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { EventService } from '../../../core/services/event';
import { Event } from '../../../models/event.model';

@Component({
  selector: 'app-event-list',
  standalone: false,
  templateUrl: './event-list.html',
  styleUrls: ['./event-list.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('400ms cubic-bezier(0.35, 0, 0.25, 1)', 
              style({ opacity: 1, transform: 'none' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class EventList implements OnInit {
  events$!: Observable<Event[]>;
  categories = ['All', 'Tech', 'Music', 'Sports', 'Business', 'Arts'];
  selectedCategory = 'All';

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events$ = this.eventService.getEvents();
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
