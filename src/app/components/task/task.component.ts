import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Task } from '../../types/task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit{

  @Input({required: true}) task!: Task;
  @Output() openModal = new EventEmitter<Task>();

  constructor(private dataSerive: DataService) { }

  ngOnInit(): void { }

  editTask(task: Task) {
    this.openModal.emit(task);
  }
}
