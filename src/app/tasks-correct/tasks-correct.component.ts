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

  constructor(private router: ActivatedRoute, private taskService: TasksServices) {
  }
  Onclick(){console.log(1)}
  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id);
    this.taskService.GetTasks().subscribe(obj => {
      this.task = obj.filter(c => c.id == this.id);
      console.log(this.task);
    });
  }

}
