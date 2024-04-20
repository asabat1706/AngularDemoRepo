import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myAngularProject-1';
  colorMode = 'lightMode';

  toggleMode(){
    if(this.colorMode === 'lightMode'){
      this.colorMode = 'darkMode';
    }else{
      this.colorMode = 'lightMode';
    }
  }
}
