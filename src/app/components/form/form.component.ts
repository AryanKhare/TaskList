import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  @Input() titleLable!: string;
  @Input() descLabel!: string;
  @Input() titleValue!: string;
  @Input() descriptionValue!: string | null | undefined;

  title!: FormControl;
  description!: FormControl;
  form!: FormGroup;

  ngOnInit(): void {
    this.title = new FormControl(this.titleValue, [Validators.required]);
    this.description = new FormControl(this.descriptionValue);
  
    this.form = new FormGroup({
      title: this.title,
      description: this.description
    });

  }

  submitForm() {
    if(this.form.valid) {
      return this.form.value;
    }
  }
  isSubmitFormValid(): boolean{
    return this.form.valid;
  }
}
