// src/app/components/register/register.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule], 
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  isAuthenticated = false;
  errorMessage = '';
  successMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  register(): void {
    
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden';
      return;
    }

    
    this.authService.register({ username: this.username, email: this.email, password: this.password }).subscribe(
      () => {
        this.successMessage = 'Registro exitoso';
        this.isAuthenticated = true; 
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Error en el registro: ' + (error?.error?.message || 'Inténtalo de nuevo');
        this.isAuthenticated = false;
      }
    );
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']); 
  }

  logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }
}
