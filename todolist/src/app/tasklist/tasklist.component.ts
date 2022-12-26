import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ITask } from '../entities/task';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  url ='https://62a0a59da9866630f8145222.mockapi.io/api/tasklist/'

  task = {
    taskId: 0,
    taskName: '',
    status: false
  }

  tasks:ITask[] = [];

  constructor(private httService:HttpClient) {
  }

  ngOnInit(): void {
    this.getAllTask()
  }

  getAllTask(){
    this.httService.get<[]>(this.url).subscribe(data => {
      this.tasks = data
    })
  }

  displayTask(id:number){
    var task = this.tasks.find(c => c.taskId == id)
    if(task != null){
      this.task = task
    }
  }

  removeTask(taskId:number){
    this.httService.delete(this.url + taskId).subscribe(c => {
      this.getAllTask()
    })
  }
}
