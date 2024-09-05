import { Injectable } from '@angular/core';
import { Task } from '../types/task.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    if(!localStorage.getItem('taskData')) {
      localStorage.setItem('taskData', JSON.stringify([]));
    }
  }

  getData(): Task[] {
    const data = localStorage.getItem('taskData');
    return data ?  JSON.parse(data!) : [];
  }

  setData(item: Task): void {
    const data = this.getData();
    data.push(item);
    localStorage.setItem('taskData', JSON.stringify(data));
  }

  clearData() {
    localStorage.clear();
  }
}
