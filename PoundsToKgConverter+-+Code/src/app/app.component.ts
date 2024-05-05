import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  weightInPounds: number = 0;
  weightInKilograms: number = 0;

  convertWeight(){
    this.weightInKilograms = this.weightInPounds * 0.453592;
  }
}
