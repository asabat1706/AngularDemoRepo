import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employees = [
    {name: 'jason smith', state: 'california', salary: 50000},
    {name: 'anderson brooke', state: 'new york', salary: 75000},
    {name: 'alex costa', state: 'texas', salary: 60000},
    {name: 'sean parker', state: 'pennsylvania', salary: 85000},
  ];
}
