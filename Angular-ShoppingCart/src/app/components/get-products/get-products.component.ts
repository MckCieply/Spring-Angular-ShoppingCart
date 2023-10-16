import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {AlertConfirmComponent} from "../../alerts/confirm/alert-confirm.component";

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrls: ['./get-products.component.css']
})
export class GetProductsComponent implements OnInit{
  responseData: any;
  confirmRequired = false;
  action="";
  id: bigint | undefined;
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe({next: (data) => {this.responseData = data}, error: console.error});
  }

  onTryDelete(id: bigint) {
    this.confirmRequired = true;
    this.action = "delete";
    this.id = id;

  }
  onConfirmDelete(){
    console.log("Deleting product with id: " + this.id)
    if(this.id != undefined)
      this.productService.deleteProduct(this.id).subscribe({next: console.info, error: console.error});
    this.confirmRequired = false;
    this.id = undefined;
  }
  onEdit(){
    this.confirmRequired = true;
    this.action = "edit";
  }
}
