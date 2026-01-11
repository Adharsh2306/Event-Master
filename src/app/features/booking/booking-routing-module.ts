import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingForm } from './booking-form/booking-form';

const routes: Routes = [
  { path: ':eventId', component: BookingForm }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }