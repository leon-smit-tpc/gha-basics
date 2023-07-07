import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TabControlGuard } from './tab-control/tab-control.guard';
import { TabControlPageComponent } from './tab-control/tab-control-page/tab-control-page.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
    canActivate: [TabControlGuard]
  },
  {
    path: 'tab-control',
    component: TabControlPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
