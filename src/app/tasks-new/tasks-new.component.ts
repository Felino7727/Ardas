import {Component, Input} from '@angular/core';
import {TasksModels} from '../Models/tasks.models';
import {TasksServices} from '../Services/tasks.services';

@Component({
  selector: 'app-tasks-new',
  templateUrl: './tasks-new.component.html',
  styleUrls: ['./tasks-new.component.css']
})
export class TasksNewComponent {
  @Input()
  id: number;
  task: TasksModels;
  name;
  creation_date;
  due_date;
  physical_progress;
  obj_status;
  description;
  tags;
  start_date;
  is_completed;
  is_archived;
  estimated_effort;
  actual_effort;
  is_high_priority;

  constructor(private taskService: TasksServices) {
  }

  Save() {

    this.task = new TasksModels(
      this.name,
      this.creation_date,
      this.due_date,
      this.start_date,
      this.is_completed,
      this.is_archived,
      this.estimated_effort,
      this.actual_effort,
      this.physical_progress,
      this.obj_status,
      this.description,
      0,
      this.tags,
      this.is_high_priority
    );
    //console.log(this.task);
    this.taskService.PostTasks(this.task).subscribe();

  }

}
