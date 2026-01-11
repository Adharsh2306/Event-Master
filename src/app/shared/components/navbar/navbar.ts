import { Component } from '@angular/core';
import { UserService } from '../../../core/services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  standalone: false
})
export class Navbar {
  isLoggedIn$ = this.userService.isAuthenticated$;
  currentUser$ = this.userService.currentUser$;

  constructor(private userService: UserService, private router: Router) {}

  login() {
    // Simulating login for demo
    this.userService.login('john.doe@example.com').subscribe();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/events']);
  }
}