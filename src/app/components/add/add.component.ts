import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormComponent } from '../form/form.component';
import { IconComponent } from '../icon/icon.component';
import { StatusComponent } from '../status/status.component';
import { DataService } from '../../service/data.service';
import { Task } from '../../types/task.model';
import { IconService } from '../../service/icon.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormComponent, IconComponent, StatusComponent],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent implements OnInit{
  @Input() modalData!: Task;

  @Output() closeModal = new EventEmitter<void>();
  @Output() reload = new EventEmitter<void>();

  @ViewChild(FormComponent) formComponent!: FormComponent;
  @ViewChild(IconComponent) formIconComponent!: IconComponent;
  @ViewChild(StatusComponent) statusComponent!: StatusComponent;

  taskId: number | undefined;
  titleValue!: string;
  descriptionValue: string | null | undefined = '';
  statusType: any;
  selectedIconIdVal!: number;
  editMode: boolean = false;

  constructor(
    private dataService: DataService,
    private iconService: IconService
  ) { }

  ngOnInit(): void {
    this.taskId = this.modalData.id;
    this.titleValue = this.modalData?.title;
    this.descriptionValue = this.modalData?.description;
    this.selectedIconIdVal =  this.modalData?.iconId;
    this.statusType = this.modalData?.type
    console.log("modalData",this.modalData);
    if(this.taskId !== -1){
      this.editMode = true;
    }
  }

  close() {
    this.closeModal.emit();
    this.reload.emit();
  }

  save() {
    const formData: any = this.formComponent.submitForm();
    const iconData = this.formIconComponent.submitIconForm();
    const statusData = this.statusComponent.selectedType;
    let iconString: string = '';

    if(iconData ) {
      iconString = this.iconService.getIndexValue(iconData);
    }

    const result:Task = {
      id: this.taskId,
      title: formData.title,
      description: formData?.description !== '' ? formData.description : null,
      type: statusData,
      icon: iconString,
      iconId: Number(iconData),
    };
   if(this.editMode){
    this.dataService.updateData(result);
    this.close();
   }
   else{
    this.dataService.setData(result);
    this.close();
   }
   
  }

  delete(id: number | undefined) {
    this.dataService.deleteTask(id);
    this.close();
  }

  finalFormValidate(): boolean {
    return (
      (this.editMode) || (this.formComponent?.isSubmitFormValid() &&
      this.formIconComponent?.isSubmitIconFormValid())
    );
  }
}
