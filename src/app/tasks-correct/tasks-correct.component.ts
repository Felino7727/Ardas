import {Component, Input, OnInit} from '@angular/core';
import {TasksModels} from '../Models/tasks.models';
import {ActivatedRoute} from '@angular/router';
import {TasksServices} from '../Services/tasks.services';

@Component({
  selector: 'app-tasks-correct',
  templateUrl: './tasks-correct.component.html',
  styleUrls: ['./tasks-correct.component.css']
})


export class TasksCorrectComponent implements OnInit {
  @Input()
  id: number;
  task: TasksModels[] = [];
  task1: any;
  name;
  creation_date;
  due_date;
  physical_progress;
  obj_status;
  description;
  tags;

  constructor(private router: ActivatedRoute, private taskService: TasksServices) {
  }

  Onclick() {

    this.task1 = new TasksModels(
      this.name,
      this.creation_date,
      this.due_date,
      this.task[0].start_date,
      this.task[0].is_completed,
      this.task[0].is_archived,
      this.task[0].estimated_effort,
      this.task[0].actual_effort,
      this.physical_progress,
      this.obj_status,
      this.description,
      0,
      this.tags,
      this.task[0].is_high_priorit,
      this.task[0].id);

    this.taskService.DelTasks(this.task1).subscribe();
    this.taskService.PostTasks(this.task1).subscribe();

  }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id);
    this.taskService.GetTasks().subscribe(obj => {
        this.task = obj.filter(c => c.id == this.id);
        this.name = this.task[0].name;
        this.creation_date = this.task[0].creation_date;
        this.due_date = this.task[0].due_date;
        this.physical_progress = this.task[0].physical_progress;
        this.obj_status = this.task[0].obj_status;
        this.description = this.task[0].description;
        this.tags = this.task[0].tags;
      }
    );
  }

}
