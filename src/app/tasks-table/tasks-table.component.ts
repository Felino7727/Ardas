import {Component, Input, OnInit} from '@angular/core';
import {TasksServices} from '../Services/tasks.services';
import {TasksModels} from '../Models/tasks.models';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css']
})
export class TasksTableComponent implements OnInit {
  @Input()
  task: TasksModels[] = [];
  stat: string = 'active';
  Search = '';

  constructor(private taskService: TasksServices) {
  }

  ngOnInit() {
    this.taskService.GetTasks().subscribe(task => {
      this.task = task.filter(obj =>
        obj.obj_status == this.stat
      );
      this.task.forEach(c=>
      {
        c.due_date=c.due_date.replace('T',' ');
        c.start_date=c.due_date.replace('T',' ');
        c.start_date=c.due_date.replace('Z',' ');
      });
    });
  }

}
