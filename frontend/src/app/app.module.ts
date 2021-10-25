import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { EditarUsuariosComponent } from './components/editar-usuarios/editar-usuarios.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';

import { HttpClientModule } from '@angular/common/http';
import { CrudService } from './services/crud.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditarUsuariosComponent,
    NavbarComponent,
    ListarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    CrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }