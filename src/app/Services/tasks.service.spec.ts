
import { TestBed, inject } from '@angular/core/testing';

import { TasksServices } from '../Services/tasks.services';

describe('TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasksServices]
    });
  });

  it('should be created', inject([TasksServices], (service: TasksServices) => {
    expect(service).toBeTruthy();
  }));
});
