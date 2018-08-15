import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TasksServices} from './Services/tasks.services';
import { TasksTableComponent } from './tasks-table/tasks-table.component';
import { TasksEditComponent } from './tasks-edit/tasks-edit.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchPipe} from './Pipe/search.pipe';
import { TasksCorrectComponent } from './tasks-correct/tasks-correct.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksTableComponent,
    TasksEditComponent,
    SearchPipe,
    TasksCorrectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TasksServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
