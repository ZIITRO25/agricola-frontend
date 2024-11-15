
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ConsejoService {
  private apiUrl = 'http://localhost:3000/consejos';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthHeaders() {
    const token = this.authService.getToken();
    return {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };
  }

  getAllConsejos(): Observable<any> {
    return this.http.get(this.apiUrl, this.getAuthHeaders());
  }

  createConsejo(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, this.getAuthHeaders());
  }

  updateConsejo(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data, this.getAuthHeaders());
  }

  deleteConsejo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }
}
