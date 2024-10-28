// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/usuario'; // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient) { }

  // Asegúrate de que este método exista
  registerUser(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData); // Especifica el tipo de retorno
  }
}
