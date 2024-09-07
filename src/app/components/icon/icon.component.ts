import { Component, OnInit } from '@angular/core';
import { IconService } from '../../service/icon.service';
import { Icon } from '../../types/icon.model';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
})
export class IconComponent implements OnInit {

  iconList!: Icon[];

  constructor(private icons: IconService) { }

  ngOnInit(): void {
    this.iconList = this.icons.iconList;
  }
}
