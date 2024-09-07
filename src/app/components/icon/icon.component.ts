import { Component, OnInit } from '@angular/core';
import { IconService } from '../../service/icon.service';
import { Icon } from '../../types/icon.model';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
})
export class IconComponent implements OnInit {
  iconList!: Icon[];
  selectedIconId = new FormControl('', [Validators.required]);
  iconForm!: FormGroup;
  
  constructor(private icons: IconService) {}

  ngOnInit(): void {
    this.iconList = this.icons.iconList;
    this.iconForm = new FormGroup({
      selectedIconId: this.selectedIconId,
    });
  }

  selectIcon(iconId: number) {
    const currIconId = this.iconForm.get('selectedIconId')?.value;
    if (currIconId === iconId) {
      this.iconForm.get('selectedIconId')?.setValue(null);
    } else {
      this.iconForm.get('selectedIconId')?.setValue(iconId);
    }
  }

  submitIconForm() {
    if (this.iconForm.valid) {
      console.log(this.iconForm.value);
    }
  }

  isSubmitIconFormValid(): boolean {
    return this.iconForm.valid;
  }
}
