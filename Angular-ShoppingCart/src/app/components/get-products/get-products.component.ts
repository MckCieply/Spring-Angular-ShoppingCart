import {Component, OnInit, Output} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {AlertService} from "../../services/alert.service";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrls: ['./get-products.component.css']
})
export class GetProductsComponent implements OnInit{
  responseData: any;
  amountInCart = 0;

  constructor(private productService: ProductService,
              protected alertService: AlertService) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe({next: (data) => {this.responseData = data}, error: console.error});
  }

  onDelete() {
    this.alertService.confirmRequired = "delete";

  }
  onEdit(productToEdit: Product){
    this.alertService.confirmRequired = "edit";
    this.alertService.productToEdit = productToEdit;
  }
  incrementCart(){
      this.amountInCart+=1;
  }
  decrementCart(){
      this.amountInCart-=1;
  }
}
