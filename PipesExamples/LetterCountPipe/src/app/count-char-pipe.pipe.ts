import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countCharPipe',
  standalone: true
})
export class CountCharPipePipe implements PipeTransform {

  transform(input: string): number {
    return input.length;
  }

}
