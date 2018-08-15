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
  id: any;
  task: TasksModels[] = [];
  name;
  creation_date;
  due_date;
  physical_progress;
  obj_status;
  description;
  tags;

  constructor(private router: ActivatedRoute, private taskService: TasksServices) {
  }
  Onclick():void{
    console.log(this.name);
  }
  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id);
    this.taskService.GetTasks().subscribe(obj => {
      this.task = obj.filter(c => c.id == this.id);
      console.log(this.task);
    this.name=this.task[0].name;
    this.creation_date=this.task[0].creation_date;
    this.due_date=this.task[0].due_date;
    this.physical_progress=this.task[0].physical_progress;
    this.obj_status=this.task[0].obj_status;
    this.description=this.task[0].description;
    this.tags=this.task[0].tags; }
    );
  }

}
