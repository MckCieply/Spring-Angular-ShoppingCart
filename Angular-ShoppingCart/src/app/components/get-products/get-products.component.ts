import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrls: ['./get-products.component.css']
})
export class GetProductsComponent implements OnInit{
  responseData: any;
  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe({next: (data) => {this.responseData = data}, error: console.error});
  }

  onDelete(id: bigint) {
    this.productService.deleteProduct(id).subscribe({next: console.info, error: console.error});
  }
}
