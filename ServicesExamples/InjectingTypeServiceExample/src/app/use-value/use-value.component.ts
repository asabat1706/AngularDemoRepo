import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-use-value',
  standalone: true,
  imports: [],
  templateUrl: './use-value.component.html',
  styleUrl: './use-value.component.css',
  providers: [
    {provide: 'STR_MSG', useValue:'This is static message'}
  ]
})
export class UseValueComponent {
  constructor(@Inject('STR_MSG') private str: String){
    console.log(str);
  }
}
