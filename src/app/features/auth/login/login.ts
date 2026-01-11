import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../../core/services/user';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      const email = this.loginForm.get('email')?.value;

      this.userService.login(email).subscribe(success => {
        this.loading = false;
        if (success) {
          this.snackBar.open('Welcome back!', 'Close', { duration: 3000 });
          this.router.navigate(['/dashboard']);
        } else {
          this.snackBar.open('Invalid credentials. Try rahul.d@example.com', 'Close', { 
            duration: 4000,
            panelClass: ['error-snackbar']
          });
        }
      });
    }
  }
}