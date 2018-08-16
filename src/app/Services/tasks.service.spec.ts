import {inject, TestBed} from '@angular/core/testing';

import {TasksServices} from './tasks.services';

describe('Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasksServices]
    });
  });

  it('Created Service (Tasks)', inject([TasksServices], (service: TasksServices) => {
    expect(service).toBeTruthy();
  }));

});
