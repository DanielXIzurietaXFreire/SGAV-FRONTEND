import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  recuperarContraseña(email: string) {
    return this.http.post(`${this.apiUrl}/api/recuperar-contraseña`, { email });
  }

}
