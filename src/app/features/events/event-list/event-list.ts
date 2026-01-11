import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from '../../../core/services/event';
import { Event } from '../../../models/event.model';

@Component({
  selector: 'app-event-list',
  standalone: false,
  templateUrl: './event-list.html',
  styleUrls: ['./event-list.css'],
})
export class EventList implements OnInit {
  events$!: Observable<Event[]>;
  categories = ['All', 'Music', 'Tech', 'Sports', 'Business'];
  selectedCategory = 'All';

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events$ = this.eventService.getEvents();
  }
}