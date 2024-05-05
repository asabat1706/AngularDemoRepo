import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  students = [
    {name: 'alice', age: 21, gender: 'female', major: 'computer science'},
    {name: 'andrew', age: 23, gender: 'male', major: 'electrical engineering'},
    {name: 'charlie', age: 20, gender: 'male', major: 'sociology'},
    {name: 'sarah', age: 25, gender: 'female', major: 'biomedical science'},
  ];

  showJson: boolean = false;
  toggleJson(){
    this.showJson = !this.showJson;
  }
}