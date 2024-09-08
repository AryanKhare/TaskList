import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent implements OnInit {
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

  selectedType: string | null = null;
  @Input() statusType: any;

  ngOnInit(): void{
    console.log("statusType",this.statusType);
  }

  setSelectedType(item: { name: string | null; }) {
    this.selectedType = this.selectedType === item.name ? null : item.name;
  }
}
