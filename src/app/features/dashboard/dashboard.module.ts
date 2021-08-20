import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ListService} from './services/list.service';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { LastTodosComponent } from './last-todos/last-todos.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CreateTodoComponent,
    LastTodosComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ListService
  ]
})
export class DashboardModule { }
