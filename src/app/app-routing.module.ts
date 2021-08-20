import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Parent1Component} from './parent-child-cd1/parent1/parent1.component';

const routes: Routes = [
  {path: '', redirectTo: 'cd1', pathMatch: 'full'},
  {path: 'cd1', component: Parent1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
