import {Component, OnInit, Output} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrls: ['./get-products.component.css']
})
export class GetProductsComponent implements OnInit{
  responseData: any;

  action="";
  constructor(private productService: ProductService,
              protected alertService: AlertService) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe({next: (data) => {this.responseData = data}, error: console.error});
  }

  onDelete(id: bigint) {
    this.alertService.confirmRequired = true;
    this.action = "delete";

  }
  onEdit(){

    this.action = "edit";
  }
}
