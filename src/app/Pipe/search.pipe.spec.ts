import {SearchPipe} from './Search.pipe';
import {TasksModels} from '../Models/tasks.models';


describe('SearchPipe_', () => {
  it('Create PPPE', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('Search PIPE', () => {
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
      is_high_priority: true,
      id: 17
    },
      {
        name: 'Today_task18',
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
        is_high_priority: true,
        id: 17
      }];
    const pipe = new SearchPipe();
    expect(pipe.transform(task,'Today_task17')).toEqual(task[0]);
  });
});
