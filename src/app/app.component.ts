import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { DataService } from './service/data.service';
import { Task } from './types/task.model';
import { AddComponent } from "./components/add/add.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent, AddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit { 

  boardTitle: string = 'My Task Board';
  boradDesc: string = 'Tasks to keep organised';
  taskData!: Task[];
  isModalOpen: boolean = false;
  modalData: Task = {
    id: -1,
    title: '',
    description: '',
    type: '',
    iconId: -1,
    icon: ''
  };
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.taskData = this.dataService.getData();
  }

  openModal(modalData: Task) {
    this.modalData = modalData;
    this.isModalOpen = true;
    console.log('modalData: ', this.modalData);
  }

  closeModal() {
    this.isModalOpen = false;
    this.modalData = {
      id: -1,
      title: '',
      description: '',
      type: '',
      icon: '',
      iconId: -1
    };
  }
}
