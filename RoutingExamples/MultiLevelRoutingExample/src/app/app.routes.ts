import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { TShirtComponent } from './tshirt/tshirt.component';
import { ShoesComponent } from './shoes/shoes.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'contacts', component: ContactsComponent},
    {path:'about', component: AboutComponent},
    {path:'products', component: ProductsComponent,
        children:[
            {path:'', redirectTo: 'shirts', pathMatch: 'full'},
            {path:'shirts', component: ShirtsComponent},
            {path:'tees', component: TShirtComponent},
            {path:'shoes', component: ShoesComponent}
        ]
    },
    {path:'**', redirectTo:'home', pathMatch:'full'}
];
