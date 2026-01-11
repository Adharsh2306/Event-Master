import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-form',
  standalone: false,
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.css']
})
export class ContactForm {
  contactData = {
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  };

  subjects = ['General Inquiry', 'Technical Support', 'Booking Issue', 'Event Partnership'];

  constructor(private snackBar: MatSnackBar) {}

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', this.contactData);
      this.snackBar.open('Thank you! Your message has been sent.', 'Close', {
        duration: 4000,
        panelClass: ['success-snackbar']
      });
      form.resetForm({
        subject: 'General Inquiry'
      });
    }
  }
}