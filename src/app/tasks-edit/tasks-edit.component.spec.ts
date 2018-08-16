import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {TasksEditComponent} from './tasks-edit.component';



describe('Component', () => {
  let component: TasksEditComponent;
  let fixture: ComponentFixture<TasksEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksEditComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Create Component(TasksCorrectComponent)', () => {
    expect(component).toBeTruthy();
  });
});