import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../../models/product.model";
import {AlertService} from "../../../services/alert.service";

@Component({
  selector: 'app-alert-edit',
  templateUrl: './alert-edit.component.html',
  styleUrls: ['./alert-edit.component.css']
})
export class AlertEditComponent {

    @Input() product: Product = new Product('', 0, 0);
    @Output() edit = new EventEmitter();
    @Output() cancel = new EventEmitter();
    onEdit() {
        this.edit.emit();
    }
    onCancel() {
        this.cancel.emit();
    }
}

