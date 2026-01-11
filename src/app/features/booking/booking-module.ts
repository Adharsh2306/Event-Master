import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing-module';
import { SharedModule } from '../../../shared/shared-module';
import { BookingForm } from './booking-form/booking-form';


@NgModule({
  declarations: [
    BookingForm
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    SharedModule
  ]
})
export class BookingModule { }
