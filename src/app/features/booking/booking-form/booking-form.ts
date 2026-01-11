import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs';
import { EventService } from '../../../core/services/event';
import { BookingService } from '../../../core/services/booking';
import { UserService } from '../../../core/services/user';
import { Event } from '../../../models/event.model';
import { Booking } from '../../../models/booking.model';
import { ConfirmationDialog } from '../../../shared/components/confirmation-dialog/confirmation-dialog';

@Component({
  selector: 'app-booking-form',
  standalone: false,
  templateUrl: './booking-form.html',
  styleUrls: ['./booking-form.css'],
})
export class BookingForm implements OnInit {
  bookingForm!: FormGroup;
  event!: Event;
  loading = true;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    private bookingService: BookingService,
    private userService: UserService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.initForm();
    
    // Load event details
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('eventId'));
        return this.eventService.getEventById(id);
      })
    ).subscribe({
      next: (event) => {
        if (event) {
          this.event = event;
          this.updateValidators();
          this.loading = false;
        } else {
          this.router.navigate(['/events']);
        }
      },
      error: () => this.loading = false
    });

    // Pre-fill if user logged in
    const user = this.userService.getCurrentUser();
    if (user) {
      this.bookingForm.patchValue({
        name: user.name,
        email: user.email
      });
    }
  }

  initForm() {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tickets: [1, [Validators.required, Validators.min(1)]]
    });
  }

  updateValidators() {
    if (this.event) {
      this.bookingForm.get('tickets')?.addValidators(Validators.max(this.event.availableSeats));
      this.bookingForm.get('tickets')?.updateValueAndValidity();
    }
  }

  onSubmit() {
    if (this.bookingForm.valid && this.event) {
      const formValue = this.bookingForm.value;
      const currentUser = this.userService.getCurrentUser();
      
      const booking: Booking = {
        id: 0, 
        eventId: this.event.id,
        userId: currentUser ? currentUser.id : 999, 
        ticketsBooked: formValue.tickets,
        bookingDate: new Date().toISOString(),
        status: 'Active'
      };

      this.bookingService.createBooking(booking).subscribe((newBooking) => {
        const dialogRef = this.dialog.open(ConfirmationDialog, {
          width: '400px',
          data: {
            eventTitle: this.event.title,
            tickets: newBooking.ticketsBooked,
            bookingId: newBooking.id
          },
          disableClose: true
        });

        dialogRef.afterClosed().subscribe(() => {
          if (currentUser) {
            this.router.navigate(['/dashboard']);
          } else {
            this.router.navigate(['/events']);
          }
        });
      });
    }
  }
}