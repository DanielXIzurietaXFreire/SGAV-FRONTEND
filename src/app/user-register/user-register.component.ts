// user-register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html'
})
export class UserRegisterComponent {
  registerForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Aquí es donde se llama al servicio para registrar al usuario
      this.userService.registerUser(this.registerForm.value).subscribe(
        (response: any) => { // Agrega el tipo explícito para response
          this.successMessage = 'Usuario registrado exitosamente';
          this.registerForm.reset();
        },
        (error: any) => { // Agrega el tipo explícito para error
          this.errorMessage = 'Error en el registro: ' + error.error.message;
        }
      );
    } else {
      this.errorMessage = 'Por favor, completa todos los campos requeridos.';
    }
  }
}
