import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myAngularProject-1';
  count = 0;
  counter(type:string){
    type==='incr'?this.count++ : this.count--;
  }
}
