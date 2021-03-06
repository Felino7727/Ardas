import {RouterModule, Routes} from '@angular/router';
import {TasksTableComponent} from './tasks-table/tasks-table.component';
import {TasksEditComponent} from './tasks-edit/tasks-edit.component';
import {NgModule} from '@angular/core';
import {TasksCorrectComponent} from './tasks-correct/tasks-correct.component';
import {TasksNewComponent} from './tasks-new/tasks-new.component';

const routes:Routes=[
  {path:'',component:TasksTableComponent},
  {path:'view/:id',component:TasksEditComponent},
  {path:'edit/:id',component:TasksCorrectComponent},
  {path:'new',component:TasksNewComponent}
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {
  
}
