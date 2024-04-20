import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courses: {id: number; name: string}[] = [
    {id: 1, name: 'JavaScript - Marathon Interview Questions Series'},
    {id: 2, name: 'Mastering React With Interview Questions, eStore Project'},
    {id: 3, name: 'Mastering TypeScript With Marathon Interview Questions'},
    {id: 4, name: 'Mastering HTML,CSS,Sass,Bootstrap + Interview Questions'}
  ];
}
