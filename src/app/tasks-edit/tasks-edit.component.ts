import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TasksServices} from '../Services/tasks.services';
import {TasksModels} from '../Models/tasks.models';

@Component({
  selector: 'app-tasks-edit',
  templateUrl: './tasks-edit.component.html',
  styleUrls: ['./tasks-edit.component.css']
})
export class TasksEditComponent implements OnInit {
  @Input()
  id: any;
  task: TasksModels[] = [];


  constructor(private router: ActivatedRoute, private taskService: TasksServices) {
  }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id);
    this.taskService.GetTasks().subscribe(obj => {
      this.task = obj.filter(c => c.id == this.id);
      //console.log(this.task);
    });
  }

}
