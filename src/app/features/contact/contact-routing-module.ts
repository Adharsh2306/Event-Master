import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactForm } from './contact-form/contact-form';

const routes: Routes = [
  { path: '', component: ContactForm }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }