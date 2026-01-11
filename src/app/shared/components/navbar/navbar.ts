import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  standalone: false
})
export class Navbar implements OnInit {
  isLoggedIn$!: Observable<boolean>;
  currentUser$!: Observable<User | null>;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.isLoggedIn$ = this.userService.isAuthenticated$;
    this.currentUser$ = this.userService.currentUser$;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/events']);
  }
}
