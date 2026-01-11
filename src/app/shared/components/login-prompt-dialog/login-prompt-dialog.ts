import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-prompt-dialog',
  template: `
    <h2 mat-dialog-title>Login Required</h2>
    <mat-dialog-content>
      <p>You need to be logged in to book tickets.</p>
      <p>Would you like to log in now?</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="false">Cancel</button>
      <button mat-raised-button color="primary" [mat-dialog-close]="true">Login</button>
    </mat-dialog-actions>
  `,
  standalone: false
})
export class LoginPromptDialog {
  constructor(public dialogRef: MatDialogRef<LoginPromptDialog>) {}
}