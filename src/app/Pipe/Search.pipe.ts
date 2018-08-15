import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'search'})
export class SearchPipe implements PipeTransform{
  transform(task,value){
    return task.filter(obj=>obj.name.includes(value))
  }

}
