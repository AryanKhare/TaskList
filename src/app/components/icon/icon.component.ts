import { Component, Input, OnInit } from '@angular/core';
import { IconService } from '../../service/icon.service';
import { Icon } from '../../types/icon.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
})
export class IconComponent implements OnInit {
  iconList!: Icon[];
  selectedIconId: number | null = null;
  @Input() selectedIconIdVal!: number;
  @Input() editMode!: boolean;

  constructor(private icons: IconService) {}

  ngOnInit(): void {
    this.iconList = this.icons.iconList;
  }

  selectIcon(iconId: number) {
    this.selectedIconIdVal = -1;
    this.selectedIconId = this.selectedIconId === iconId ? null : iconId;
  }

  submitIconForm() {
    if(this.editMode && this.selectedIconId === null){
      this.selectedIconId = this.selectedIconIdVal;
    }
    return this.selectedIconId;
  }

  isSubmitIconFormValid(): boolean {
    return this.selectedIconId ? true : false;
  }
}
