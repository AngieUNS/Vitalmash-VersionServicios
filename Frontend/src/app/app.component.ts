import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShoppingCartComponent } from './publico/cliente/paginas/shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './publico/cliente/paginas/product-details/product-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ShoppingCartComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
}
