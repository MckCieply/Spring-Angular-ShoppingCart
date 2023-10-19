import { Injectable } from '@angular/core';
import {ProductService} from "./product.service";
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
    public confirmRequired = "";
    public productToEdit = new Product('', 0, 0);
  constructor(private productService: ProductService) { }

    deleteProduct(id: bigint){
        console.log("deleteProduct " + id);
        //this.productService.deleteProduct(id).subscribe({next: console.info, error: console.error});
        this.confirmRequired = "";
        window.location.reload();
    }

    editProduct(){
      console.log("alert service " + this.productToEdit.name);
      this.productService.editProduct(this.productToEdit)//.subscribe({next: console.info, error: console.error});
        this.confirmRequired = "";
    }
}
