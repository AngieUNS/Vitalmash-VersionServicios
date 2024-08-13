import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { HeaderComponent } from "../../../../core/header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    HeaderComponent,
    NzCardModule,
    NzAvatarModule,
    CommonModule
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  products = [
    { name: 'Kefir con Yacon', price: 14.50 },
    { name: 'Bebida probiótica', price: 12.50 },
    { name: 'Helado de Kefir', price: 10.50 },
    { name: 'Kefir con frutos rojos', price: 8.50 },
    { name: 'Bebida de Yacon', price: 12.00 },
    { name: 'Yogurt de Kefir', price: 14.50 },
  ];
}
