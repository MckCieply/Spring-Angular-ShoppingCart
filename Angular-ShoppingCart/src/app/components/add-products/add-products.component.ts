import { Component } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.model";

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  product: Product = new Product('', 0, 0);

  constructor(private productService: ProductService) {
  }

  onSubmit() {
    this.productService.addProduct(this.product).subscribe({next: console.info, error: console.error});
    window.location.reload();
  }
}

