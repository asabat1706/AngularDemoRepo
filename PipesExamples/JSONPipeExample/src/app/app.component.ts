import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  students = [
    {name: 'alice', age: 21, gender: 'female', major: 'computer science'},
    {name: 'andrew', age: 23, gender: 'male', major: 'electrical engineering'},
    {name: 'charlie', age: 20, gender: 'male', major: 'sociology'},
    {name: 'sarah', age: 25, gender: 'female', major: 'biomedical science'},
  ];
  jsonDisplay: boolean = false;
  public convertToJSON(){
    this.jsonDisplay = !this.jsonDisplay;
  }
}
