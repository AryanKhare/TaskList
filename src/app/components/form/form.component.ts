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

  title = new FormControl("", [Validators.required]);
  description = new FormControl("");
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      title: this.title,
      description: this.description
    });
  }

  submitForm() {
    if(this.form.valid) {
      // console.log(this.form.value);
      return this.form.value;
    }
  }
  isSubmitFormValid(): boolean{
    return this.form.valid;
  }
}
