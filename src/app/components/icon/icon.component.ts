import { Component } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent {

  iconList = ['⏰','📚','✏️','💪','🍵','💭','👩‍💻']
}
