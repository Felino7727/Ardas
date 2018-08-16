import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {TasksTableComponent} from './tasks-table.component';



describe('Component', () => {
  let component: TasksTableComponent;
  let fixture: ComponentFixture<TasksTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksTableComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Create Component(TasksCorrectComponent)', () => {
    expect(component).toBeTruthy();
  });
});
