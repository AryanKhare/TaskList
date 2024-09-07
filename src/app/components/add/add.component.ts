import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
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
  @ViewChild(FormComponent) formComponent!: FormComponent;
  @ViewChild(IconComponent) formIconComponent!: IconComponent;

  close() {
    this.closeModal.emit();
  }

  save() {
    this.formComponent.submitForm();
    this.formIconComponent.submitIconForm();
  }

  finalFormValidate(): boolean{
     return this.formComponent?.isSubmitFormValid() && this.formIconComponent?.isSubmitIconFormValid();
  }
}
