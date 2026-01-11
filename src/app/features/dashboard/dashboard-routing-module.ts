import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboard } from './user-dashboard/user-dashboard';
import { authGuard } from '../../core/guards/auth-guard';

const routes: Routes = [
  { 
    path: '', 
    component: UserDashboard,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }