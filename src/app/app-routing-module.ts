import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { 
    path: 'events', 
    loadChildren: () => import('./features/events/events-module').then(m => m.EventsModule) 
  },
  { 
    path: 'event', // Changed from 'events' to match specific guidelines '/event/:id'
    loadChildren: () => import('./features/events/events-module').then(m => m.EventsModule) 
  },
  { 
    path: 'book', 
    loadChildren: () => import('./features/booking/booking-module').then(m => m.BookingModule) 
  },
  { 
    path: 'dashboard', 
    loadChildren: () => import('./features/dashboard/dashboard-module').then(m => m.DashboardModule) 
  },
  { 
    path: 'contact', 
    loadChildren: () => import('./features/contact/contact-module').then(m => m.ContactModule) 
  },
  { path: '**', redirectTo: '/events' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
