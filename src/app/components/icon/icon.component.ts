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

  constructor(private icons: IconService) {}

  ngOnInit(): void {
    this.iconList = this.icons.iconList;
  }

  selectIcon(iconId: number) {
    this.selectedIconId = this.selectedIconId === iconId ? null : iconId;
  }

  submitIconForm() {
    return this.selectedIconId;
  }

  isSubmitIconFormValid(): boolean {
    return this.selectedIconId ? true : false;
  }
}
