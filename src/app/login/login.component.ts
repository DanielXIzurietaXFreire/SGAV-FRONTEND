import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}
  redirectToRecoverPassword() {
    this.router.navigate(['/recover-password']);
  }

  redirectToproductCatalog() {
    this.router.navigate(['/product-catalog']);
  }
}
