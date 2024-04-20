import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nm = '';
  em = '';
  ph = '';
  add = '';
  submitted : boolean = false;
  showHeading : boolean = true;
  qualification = [{school: '', degree: '', year: ''}];

  addQualification(){
    this.qualification.push({school: '', degree: '', year:''});
  }

  submit(){
    this.submitted = true;
    this.showHeading = false;
  }

  edit(){
    this.submitted = false;
    this.showHeading = true;
  }
}  
