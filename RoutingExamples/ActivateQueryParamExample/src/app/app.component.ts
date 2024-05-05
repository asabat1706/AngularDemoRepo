import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ActivateQueryParamExample';
  students : {roll: number, name: string, dept: string}[] = [
    {"roll": 1, "name": "Krithika Banakar", "dept": "PL"},
    {"roll": 2, "name": "Anujam Rajshekhar", "dept": "EMP"},
    {"roll": 3, "name": "Shubhankar Paul", "dept": "DL"},
    {"roll": 4, "name": "Rakshit RashDriver", "dept": "OL"}
  ]
  id : number = -1;
  name : string = '';

  constructor(private route: ActivatedRoute){
    route.queryParams.subscribe((r)=>{
        this.id = r['roll'];
        this.name = r['name'];
        console.log("Cliked on employee: "+ this.id +": "+ this.name);
    })
  }
}
