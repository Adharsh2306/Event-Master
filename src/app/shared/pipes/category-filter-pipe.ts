import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../../models/event.model';

@Pipe({
  name: 'categoryFilter',
  standalone: false
})
export class CategoryFilterPipe implements PipeTransform {

  transform(events: Event[] | null, category: string): Event[] {
    if (!events) {
      return [];
    }
    if (!category || category === 'All') {
      return events;
    }
    return events.filter(event => event.category === category);
  }

}