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

    if(data.length > 0) {
      let idNumber = data[data.length - 1].id;
      item.id = idNumber ? idNumber + 1 : -1;
    } else {
      item.id = 1;
    }

    item.createDate = new Date();

    data.push(item);
    localStorage.setItem('taskData', JSON.stringify(data));
    console.log(data);
  }

  deleteTask(itemId: number | undefined) {
    const data = this.getData();
    const newData = data.filter(i => i.id !== itemId);
    localStorage.setItem('taskData', JSON.stringify(newData));
  }

  clearData() {
    localStorage.clear();
  }
}
