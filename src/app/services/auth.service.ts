
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
        tap((response: any) => {
            localStorage.setItem('token', response.token);  
        })
    );
}

  register(userData: { username: string, email: string, password: string, role?: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;  
}

  getUserData(): any {
    const token = this.getToken();
    if (token) {
      return this.decodeToken(token); 
    }
    return null;
  }

  private decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (error) {
      console.error("Error al decodificar el token:", error);
      return null;
    }
  }
}

