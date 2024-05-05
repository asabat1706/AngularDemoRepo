import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
    title: string = '';
    pic: string = '';
    constructor(private route: ActivatedRoute){
      route.queryParams.subscribe((params)=>{
         this.title = params['title'];
         this.pic = params['pic'];
      })
    }
}
