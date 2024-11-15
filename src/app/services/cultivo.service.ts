
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CultivoService {
  private apiUrl = 'http://localhost:3000/cultivos';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthHeaders() {
    const token = this.authService.getToken();
    return {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };
  }

  getAllCultivos(): Observable<any> {
    return this.http.get(this.apiUrl, this.getAuthHeaders());
  }

  createCultivo(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, this.getAuthHeaders());
  }

  updateCultivo(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data, this.getAuthHeaders());
  }

  deleteCultivo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }
}
