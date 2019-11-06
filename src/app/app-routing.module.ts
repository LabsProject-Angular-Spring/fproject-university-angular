import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SolisalaComponent} from './components/solisala/solisala.component';
const routes: Routes = [
  {path: 'solisala', component: SolisalaComponent},
  {path: '*', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
