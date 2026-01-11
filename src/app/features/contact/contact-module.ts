import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing-module';
import { SharedModule } from '../../shared/shared-module';
import { ContactForm } from './contact-form/contact-form';

@NgModule({
  declarations: [
    ContactForm
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ContactModule { }