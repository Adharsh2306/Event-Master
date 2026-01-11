import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventList } from './event-list/event-list';
import { EventDetail } from './event-detail/event-detail';
import { EventOverview } from './event-overview/event-overview';
import { EventVenueInfo } from './event-venue-info/event-venue-info';
import { EventReviews } from './event-reviews/event-reviews';

const routes: Routes = [
  { path: '', component: EventList },
  { 
    path: ':id', 
    component: EventDetail,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: EventOverview },
      { path: 'venue', component: EventVenueInfo },
      { path: 'reviews', component: EventReviews }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
