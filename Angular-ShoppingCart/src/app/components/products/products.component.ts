import { Component } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  product: Product = new Product('', 0, 0);

  constructor(private productService: ProductService) {
  }

  onSubmit() {
    this.productService.addProduct(this.product).subscribe(
      (response) => {
        // Handle the successful response
        console.log('Response:', response);
      },
      (error) => {
        // Handle errors
        console.error('An error occurred:', error);
      }
    );

  }
}

