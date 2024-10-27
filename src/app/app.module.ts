import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductCatalogComponent,
    RecoverPasswordComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Asegúrate de agregar esto a imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
