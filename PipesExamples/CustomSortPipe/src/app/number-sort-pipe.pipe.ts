import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSortPipe',
  standalone: true
})
export class NumberSortPipePipe implements PipeTransform {

  transform(inputArr: number[], type: 'asc' | 'desc'): number[] {
    if(type === 'asc'){
      return inputArr.sort();
    }
    return inputArr.sort((a,b) => b-a);
  }

}
