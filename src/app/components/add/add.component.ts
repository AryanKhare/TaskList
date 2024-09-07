import {
  Component,
  EventEmitter,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { FormComponent } from '../form/form.component';
import { IconComponent } from '../icon/icon.component';
import { StatusComponent } from '../status/status.component';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormComponent, IconComponent, StatusComponent],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  @Output() closeModal = new EventEmitter<void>();
  @ViewChild(FormComponent) formComponent!: FormComponent;
  @ViewChild(IconComponent) formIconComponent!: IconComponent;
  @ViewChild(StatusComponent) statusComponent!: StatusComponent;

  close() {
    this.closeModal.emit();
  }

  save() {
    const formData: any = this.formComponent.submitForm();
    this.formIconComponent.submitIconForm();
    const statusData = this.statusComponent.selectedType;

    const result = {
      title: formData.title,
      description: formData?.description !== '' ? formData.description : null,
      status: statusData,
    };

    console.log(result);
  }

  finalFormValidate(): boolean {
    return (
      this.formComponent?.isSubmitFormValid() &&
      this.formIconComponent?.isSubmitIconFormValid()
    );
  }
}
