import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksCorrectComponent } from './tasks-correct.component';

describe('TasksCorrectComponent', () => {
  let component: TasksCorrectComponent;
  let fixture: ComponentFixture<TasksCorrectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksCorrectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksCorrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
