import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ErrorComponentComponent } from './error-component/error-component.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'news', component: NewsComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: '**', component: ErrorComponentComponent}
];
