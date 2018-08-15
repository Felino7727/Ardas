import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TasksModels} from '../Models/tasks.models';
import {Observable} from 'rxjs';

@Injectable()
export class TasksServices {

  constructor(private http: HttpClient) {
  }

  GetTasks(): Observable<TasksModels[]> {
    return this.http.get<TasksModels[]>('http://localhost:3000/tasks');
  }

  PutTasks(obj: TasksModels[]): Observable<TasksModels[]> {
    return this.http.put<TasksModels[]>('http://localhost:3000/tasks', obj);
  }

}
