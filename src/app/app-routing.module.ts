import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BloqueComponent } from './components/bloque/bloque.component';
import {LaboratorioComponent } from './components/laboratorio/laboratorio.component';
import {SolisalaComponent} from './components/solisala/solisala.component';
import {ListaBloqueComponent} from './components/lista-bloque/lista-bloque.component';
import {ListaLaboratorioComponent} from './components/lista-laboratorio/lista-laboratorio.component';
import {ListaFacultadComponent} from './components/lista-facultad/lista-facultad.component';
const routes: Routes = [
  {path: 'bloque', component: BloqueComponent},
  {path: 'facultad', component: SolisalaComponent},
  {path: 'laboratorio', component: LaboratorioComponent},
  {path: 'lista-laboratorio', component: ListaLaboratorioComponent},
  {path: 'lista-bloque', component: ListaBloqueComponent},
  {path: 'lista-facultad', component: ListaFacultadComponent},
  {path: '*', redirectTo: 'bloque'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
