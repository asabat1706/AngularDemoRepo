import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, ActivatedRoute } from '@angular/router';
import { CourseComponent } from './course/course.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CourseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'QueryParamExample';
  courses: { id: number; title: string; pic: string }[] = [
    {
      id: 1,
      title: 'HTML, CSS, Sass, Bootstrap - Beginner to Expert + Bootcamp',
      pic: '../../assets/html-css-tutorials.jpg',
    },
    {
      id: 2,
      title: 'JavaScript Marathon Interview Questions Series',
      pic: '../../assets/JS_Course.png',
    },
    {
      id: 3,
      title: 'Mastering TypeScript with Marathon Interview Questions',
      pic: '../../assets/TypeScript_Course.jpg',
    },
    {
      id: 4,
      title: 'Mastering React With Interview Questions,eStore Project',
      pic: '../../assets/React_Course.png',
    },
    {
      id: 5,
      title: 'Practical Database Guide with RDBMS(MySQL) & NoSQL(MongoDB)',
      pic: '../../assets/RDBMS_Course.png',
    },
  ];
}
