import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  departamentos: any[] = [];
  isAuthenticated = false;
  userName = '';
  userRole = '';
  userImage = '';
  isDropdownOpen = false;

  constructor(

    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.isAuthenticated = this.authService.isAuthenticated();

    if (this.isAuthenticated) {
      const userData = this.authService.getUserData();
      this.userName = userData.username;
      this.userRole = userData.role;
      this.userImage = this.userRole === 'admin' ? 
                       'https://static.vecteezy.com/system/resources/previews/020/429/953/non_2x/admin-icon-vector.jpg' : 
                       'https://static.vecteezy.com/system/resources/previews/020/429/953/non_2x/admin-icon-vector.jpg';
    }
  }



  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  redirectToConfiguracion(): void {
    this.router.navigate(['/configuracion']);
  }

  logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
    this.userName = '';
    this.userRole = '';
  }
}
