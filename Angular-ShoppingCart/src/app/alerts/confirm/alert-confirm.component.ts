import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-alert-confirm',
  templateUrl: './alert-confirm.component.html',
  styleUrls: ['./alert-confirm.component.css']
})
export class AlertConfirmComponent {
  @Input() action: string = "";
  @Output() confirm = new EventEmitter();
  @Output() cancel = new EventEmitter();
  onConfirm() {
    this.confirm.emit();
  }
  onCancel() {
    this.cancel.emit();
  }
}
