import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { SharedModule } from '../../../shared/shared-module';
import { UserDashboard } from './user-dashboard/user-dashboard';


@NgModule({
  declarations: [
    UserDashboard
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
