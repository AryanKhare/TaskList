import { Component, EventEmitter, Output } from '@angular/core';
import { FormComponent } from "../form/form.component";
import { IconComponent } from "../icon/icon.component";
import { StatusComponent } from "../status/status.component";

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormComponent, IconComponent, StatusComponent],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
}
