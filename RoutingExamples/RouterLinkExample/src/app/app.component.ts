import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule } from '@angular/router';
import { ErrorComponentComponent } from './error-component/error-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ErrorComponentComponent, HomeComponent, NewsComponent, ServicesComponent, ContactsComponent, AboutComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RouterLinkExample';
}
