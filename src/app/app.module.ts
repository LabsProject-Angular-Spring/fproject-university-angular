import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SolisalaComponent } from './components/solisala/solisala.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormBuilder } from 'ngx-dynamic-form-builder';
import { BloqueComponent } from './components/bloque/bloque.component';
import { LaboratorioComponent } from './components/laboratorio/laboratorio.component';
import { ListaLaboratorioComponent } from './components/lista-laboratorio/lista-laboratorio.component';
import { ListaBloqueComponent } from './components/lista-bloque/lista-bloque.component';
import { ListaFacultadComponent } from './components/lista-facultad/lista-facultad.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SolisalaComponent,
    BloqueComponent,
    LaboratorioComponent,
    ListaLaboratorioComponent,
    ListaBloqueComponent,
    ListaFacultadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [    DynamicFormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
