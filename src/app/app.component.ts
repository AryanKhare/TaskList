import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { DataService } from './service/data.service';
import { Task } from './types/task.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit { 

  boardTitle: string = 'My Task Board';
  boradDesc: string = 'Tasks to keep organised';
  taskData!: Task[];
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.taskData = this.dataService.getData();
  }
}
