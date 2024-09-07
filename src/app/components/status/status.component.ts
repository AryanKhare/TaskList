import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {

  taskTypeList = [
    {
      id: 1,
      name: "In progress",
      image: "../../../../public/Time_atack_duotone.svg"
    },
    {
      id: 2,
      name: "Completed",
      image: "../../../../public/Done_round_duotone.svg"
    },
    {
      id: 3,
      name: "Won't do",
      image: "../../../../public/close_ring_duotone.svg"
    }
  ]

}
