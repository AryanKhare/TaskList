import { Injectable } from '@angular/core';
import { Icon } from '../types/icon.model';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor() { }
  iconList: Icon[] = [
    { id: 1, icon: '⏰', },
    { id: 2, icon: '📚', },
    { id: 3, icon: '✏️', },
    { id: 4, icon: '💪', },
    { id: 5, icon: '🍵', },
    { id: 6, icon: '💭', },
    { id: 7, icon: '👩‍💻', },
  ];

  getIndexValue(index: number): string {
    const data = this.iconList[index + 1].icon;
    if(data) {
      return data;
    }
    return '';
  }
}
