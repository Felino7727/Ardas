  export class TasksModels {
  constructor(
    public name: string,
    public creation_date: string,
    public due_date: string='',
    public start_date: string='',
    public is_completed: boolean = true,
    public is_archived: boolean = true,
    public estimated_effort: number = 5,
    public actual_effort: number = 7,
    public physical_progress: number=0,
    public obj_status: string='active',
    public description: string='',
    public project_id: number = 0,
    public tags:string = '',
    public is_high_priority: boolean = true,
    public id?: number){}
  }

