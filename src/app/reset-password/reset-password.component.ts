import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  email: string = '';
  nuevaContrasena: string = '';
  confirmContrasena: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  resetPassword() {
    if (this.nuevaContrasena !== this.confirmContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }

    this.http.post<any>('http://localhost:3000/api/restablecer-contrasena', { email: this.email, nuevaContrasena: this.nuevaContrasena })
      .subscribe(
        response => {
          console.log('Contraseña restablecida con éxito', response);
          // Aquí puedes redirigir al usuario a la página de inicio o login
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Error al restablecer la contraseña', error);
          alert('Ocurrió un error al restablecer la contraseña. Inténtalo de nuevo.');
        }
      );
  }
}
