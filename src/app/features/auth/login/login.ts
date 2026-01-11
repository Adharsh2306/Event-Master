import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../../core/services/user';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login implements OnInit {
  loginForm: FormGroup;
  loading = false;
  returnUrl: string = '/dashboard';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      const email = this.loginForm.get('email')?.value;

      this.userService.login(email).subscribe(success => {
        this.loading = false;
        if (success) {
          this.snackBar.open('Welcome back!', 'Close', { duration: 3000 });
          this.router.navigateByUrl(this.returnUrl);
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