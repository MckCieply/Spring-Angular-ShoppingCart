import { Injectable } from '@angular/core';
import {ProductService} from "./product.service";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
    public confirmRequired = false;
  constructor(private productService: ProductService) { }

    deleteProduct(id: bigint){
        this.productService.deleteProduct(id).subscribe({next: console.info, error: console.error});
        this.confirmRequired = false;
        window.location.reload();
    }
}
