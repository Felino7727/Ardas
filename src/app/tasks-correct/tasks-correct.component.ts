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
  task1:any;
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
    /*this.task[0].name=this.name;
    this.task[0].creation_date=this.creation_date;
    this.task[0].due_date=this.due_date;
    this.task[0].physical_progress=this.physical_progress;
    this.task[0].obj_status=this.obj_status;
    this.task[0].description=this.description;
    this.task[0].tags=this.tags;*/
    this.task1=new TasksModels(this.name,this.creation_date,this.due_date,this.task[0].start_date,this.task[0].is_completed
    ,this.task[0].is_archived,this.task[0].estimated_effort,this.task[0].actual_effort,this.physical_progress,this.obj_status,
      this.description,0,this.tags,this.task[0].is_high_priorit,this.task[0].id)
    /*this.task1.id=this.task[0].id;
    this.task1.name=this.name;
    this.task1.creation_date=this.creation_date;
    this.task1.due_date=this.due_date;
    this.task1.physical_progress=this.physical_progress;
    this.task1.obj_status=this.obj_status;
    this.task1.description=this.description;
    this.task1.tags=this.tags;*/
    this.taskService.PutTasks(this.task1);
    //console.log(this.task1)
  }
  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id);
    this.taskService.GetTasks().subscribe(obj => {
      this.task = obj.filter(c => c.id == this.id);
      //console.log(this.task);
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
