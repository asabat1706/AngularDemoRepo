import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumberSortPipePipe } from './number-sort-pipe.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NumberSortPipePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dataList : number[] = [1,2,3,7,6];
  sortType : string = 'asc';
  updateSort(type:string){
    this.sortType = type;
  }
}
