import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material-module';
import { Navbar } from './components/navbar/navbar';
import { CategoryFilterPipe } from './pipes/category-filter-pipe';
import { HighlightEvent } from './directives/highlight-event';
import { Footer } from './components/footer/footer';
import { ConfirmationDialog } from './components/confirmation-dialog/confirmation-dialog';
import { LoginPromptDialog } from './components/login-prompt-dialog/login-prompt-dialog';

@NgModule({
  declarations: [
    Navbar,
    CategoryFilterPipe,
    HighlightEvent,
    Footer,
    ConfirmationDialog,
    LoginPromptDialog
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    Navbar,
    CategoryFilterPipe,
    HighlightEvent,
    Footer,
    ConfirmationDialog,
    LoginPromptDialog
  ]
})
export class SharedModule { }
