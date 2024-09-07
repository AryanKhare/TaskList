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
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.taskData = this.dataService.getData();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
