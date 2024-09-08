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

  getIdNumber(data: Task[]): number {
    if(data.length > 0) {
      let maxId = -1;
      
      data.forEach((item) => {
        if(item.id! > maxId) {
          maxId = item.id!;
        }
      });

      return maxId + 1;
    } else {
      return 1;
    }
  }

  setData(item: Task): void {
    const data = this.getData();
    item.id = this.getIdNumber(data);
    item.createDate = new Date();

    data.push(item);
    localStorage.setItem('taskData', JSON.stringify(data));
    console.log(data);
  }
  updateData(item: Task): void{
    const data = this.getData();
    data.forEach((ele : any) =>{
      if(ele.id === item.id){
        // console.log('inside update');
        ele.description = item.description,
        ele.icon = item.icon,
        ele.iconId = item.iconId,
        ele.title = item.title,
        ele.type = item.type
      }
    });
    localStorage.setItem('taskData', JSON.stringify(data));
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
