import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nm : string = '';
  em : string = '';
  emailIsValid : boolean = false;
  formSubmitted : boolean = false;

  checkEmailValidation(em : string): void{
    if(em.includes('@') && em.includes('.com')){
      this.emailIsValid = true;
    }else{
      this.emailIsValid = false;
    }
  }
  showMessage(){
    if(this.nm && this.emailIsValid){
      this.formSubmitted = true;
    }else{
      this.formSubmitted = false;
    }
  }
}