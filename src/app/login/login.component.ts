
import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  isAuthenticated = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  login(): void {
    this.errorMessage = '';

    this.authService.login({ email: this.username, password: this.password }).subscribe(
      (response) => {
        this.authService.setToken(response.token);
        this.isAuthenticated = true;
        this.router.navigate(['/']);
      },
      (error) => {
        this.errorMessage = 'Usuario o contraseña incorrectos';
        this.isAuthenticated = false;
      }
    );
  }

  redirectToRegister(): void {
    this.router.navigate(['/register']);
  }

  logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }
}


