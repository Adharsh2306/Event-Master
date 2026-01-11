import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing-module';
import { SharedModule } from '../../shared/shared-module';
import { EventList } from './event-list/event-list';
import { EventDetail } from './event-detail/event-detail';


@NgModule({
  declarations: [
    EventList,
    EventDetail
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule
  ]
})
export class EventsModule { }
