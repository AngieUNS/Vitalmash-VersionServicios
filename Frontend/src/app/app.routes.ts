import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './publico/cliente/paginas/shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './publico/cliente/paginas/product-details/product-details.component';

export const routes: Routes = [
    {path: 'shopping-cart', component: ShoppingCartComponent},
    {path: 'product-detail', component: ProductDetailsComponent}
];
