import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent {

  email: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  /**sendRecoveryEmail() {
    this.http.post<any>('http://localhost:3000/api/recuperar-contrasena', { email: this.email })
      .subscribe(
        response => {
          console.log('Correo de recuperación enviado', response);
          // Redirigir al usuario a la página de restablecimiento de contraseña
          this.router.navigate(['/reset-password', { email: this.email }]);
        },
        error => {
          console.error('Error al enviar el correo de recuperación', error);
          alert('Ocurrió un error al enviar el correo de recuperación. Inténtalo de nuevo.');
        }
      );
  }**/

      sendRecoveryEmail(){
        this.router.navigate(['/reset-password']);
      }
}
