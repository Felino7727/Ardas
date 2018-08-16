import {inject, TestBed} from '@angular/core/testing';

import {TasksServices} from './tasks.services';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TasksModels} from '../Models/tasks.models';

describe('Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TasksServices]
    });
  });

  it('Created Service (Tasks)', inject([TasksServices], (service: TasksServices) => {
    expect(service).toBeTruthy();
  }));

  it('Created Service (GET)', inject([TasksServices, HttpTestingController], (service: TasksServices, service_back: HttpTestingController) => {
    let task: TasksModels[] = [{
      name: 'Today_task17',
      creation_date: '2015-04-21T06:50:21',
      due_date: '2015-04-22T23:59:00',
      start_date: '2015-04-21T00:00:01',
      is_completed: false,
      is_archived: false,
      estimated_effort: 5.5,
      actual_effort: 3.3,
      physical_progress: 60,
      obj_status: 'active',
      description: 'Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit',
      project_id: 0,
      tags: '',
      is_high_priorit: true,
      id: 17
    }];
    service.GetTasks().subscribe(c => {
      expect(c).toEqual(task);
      expect(c.length).toBe(1);
    });
    service_back.expectOne({
      method: 'GET',
      url: 'http://localhost:3000/tasks/'
    }).flush(task);
  }));
  it('Created Service (DEL)', inject([TasksServices, HttpTestingController], (service: TasksServices, service_back: HttpTestingController) => {
    let task: TasksModels[] = [{
      name: 'Today_task17',
      creation_date: '2015-04-21T06:50:21',
      due_date: '2015-04-22T23:59:00',
      start_date: '2015-04-21T00:00:01',
      is_completed: false,
      is_archived: false,
      estimated_effort: 5.5,
      actual_effort: 3.3,
      physical_progress: 60,
      obj_status: 'active',
      description: 'Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit',
      project_id: 0,
      tags: '',
      is_high_priorit: true,
      id: 17
    }];
    service.DelTasks(task[0]).subscribe(c => {
      expect(c).toEqual(task);
    });
    service_back.expectOne({
      method: 'DELETE',
      url: 'http://localhost:3000/tasks/17'
    }).flush(task);
  }));

  it('Created Service (POST)', inject([TasksServices, HttpTestingController], (service: TasksServices, service_back: HttpTestingController) => {
    let task: TasksModels[] = [{
      name: 'Today_task17',
      creation_date: '2015-04-21T06:50:21',
      due_date: '2015-04-22T23:59:00',
      start_date: '2015-04-21T00:00:01',
      is_completed: false,
      is_archived: false,
      estimated_effort: 5.5,
      actual_effort: 3.3,
      physical_progress: 60,
      obj_status: 'active',
      description: 'Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit',
      project_id: 0,
      tags: '',
      is_high_priorit: true,
      id: 17
    }];
    service.PostTasks(task[0]).subscribe(c => {
      expect(c).toEqual(task);
    });
    service_back.expectOne({
      method: 'POST',
      url: 'http://localhost:3000/tasks/'
    }).flush(task);
  }));


});
