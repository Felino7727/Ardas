import {Injectable} from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {TasksModels} from '../Models/tasks.models';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';



@Injectable()
export class TasksServices {

  constructor(private http: HttpClient) {
  }

  private handleError<T>(operation='operation',result?:T){
    return(error:any):Observable<T>=>{
      console.error(error);
      return of(result as T);
    };
  }
  GetTasks(): Observable<TasksModels[]> {
    return this.http.get<TasksModels[]>('http://localhost:3000/tasks/').pipe(
      tap(()=>console.log('Task')),
      catchError(this.handleError('get Task',[]))
    );
  }

  PutTasks(obj: TasksModels): Observable<TasksModels[]> {
    console.log(obj);
    return this.http.post<TasksModels[]>('http://localhost:3000/tasks', obj)
  }


}
