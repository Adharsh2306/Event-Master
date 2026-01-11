import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <div class="dialog-container">
      <h2 mat-dialog-title>Booking Confirmed!</h2>
      <mat-dialog-content>
        <div class="success-icon">
          <mat-icon>check_circle</mat-icon>
        </div>
        <p>Your tickets for <strong>{{data.eventTitle}}</strong> have been reserved successfully.</p>
        <div class="booking-summary">
          <p><span>Tickets:</span> {{data.tickets}}</p>
          <p><span>Booking ID:</span> #{{data.bookingId}}</p>
        </div>
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button mat-raised-button color="primary" [mat-dialog-close]="true">VIEW MY DASHBOARD</button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [`
    .dialog-container { padding: 8px; text-align: center; }
    .success-icon { color: #2E7D32; margin-bottom: 16px; }
    .success-icon mat-icon { font-size: 64px; width: 64px; height: 64px; }
    .booking-summary { background: #f5f5f5; padding: 16px; border-radius: 8px; margin-top: 16px; text-align: left; }
    .booking-summary p { margin: 4px 0; display: flex; justify-content: space-between; }
    .booking-summary span { color: #666; font-weight: 500; }
    h2 { font-family: 'Poppins', sans-serif; font-weight: 600; color: var(--primary-blue); }
  `],
  standalone: false
})
export class ConfirmationDialog {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { eventTitle: string, tickets: number, bookingId: number }
  ) {}
}