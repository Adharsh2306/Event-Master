import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing-module';
import { SharedModule } from '../../shared/shared-module';
import { EventList } from './event-list/event-list';
import { EventDetail } from './event-detail/event-detail';
import { EventOverview } from './event-overview/event-overview';
import { EventVenueInfo } from './event-venue-info/event-venue-info';
import { EventReviews } from './event-reviews/event-reviews';


@NgModule({
  declarations: [
    EventList,
    EventDetail,
    EventOverview,
    EventVenueInfo,
    EventReviews
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule
  ]
})
export class EventsModule { }
