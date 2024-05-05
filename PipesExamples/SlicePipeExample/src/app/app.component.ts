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
  title = 'SlicePipeExample';
  products: { name: string; imageUrl: string; }[] = [
    {
      name: 'HTML, CSS, Sass, Bootstrap - Beginner to Expert + Bootcamp',
      imageUrl: './assets/html-css-tutorials.jpg',
    },
    {
      name: 'JavaScript - Marathon Interview Questions Series',
      imageUrl: './assets/JS_Course.png',
    },
    {
      name: 'Mastering TypeScript with Marathon Interview Questions',
      imageUrl: './assets/TypeScript_Course.jpg',
    },
    {
      name: 'Mastering React with Interview Questions, eStore Project',
      imageUrl: './assets/React_Course.png',
    },
    {
      name: 'Practical Database Guide with RDBMS(MySQL) & NoSQL(MongoDB)',
      imageUrl: './assets/RDBMS.png',
    },
    {
      name: 'Mastering Angular with Marathon Interview Quesitons',
      imageUrl: './assets/Angular_Course.jpg',
    },
    {
      name: 'NodeJS - Marathon Interview Questions Series',
      imageUrl: './assets/NodeJS_Course.jpg',
    },
    {
      name: 'Python - Marathon Interview Questions Series',
      imageUrl: './assets/Python_Course.jpg',
    }
  ]
  page_length : number = 4;
  start_index = 0;
  end_index = this.page_length;
  public nextSet(){
    this.start_index += this.page_length;
    this.end_index += this.page_length;
  }
  public prevSet(){
    this.start_index -= this.page_length;
    this.end_index -= this.page_length;
  }
}
