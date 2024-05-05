import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { TShirtComponent } from '../tshirt/tshirt.component';
import { ShirtsComponent } from '../shirts/shirts.component';
import { ShoesComponent } from '../shoes/shoes.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet, RouterModule, TShirtComponent, ShirtsComponent, ShoesComponent ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
