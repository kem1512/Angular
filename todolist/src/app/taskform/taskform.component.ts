import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { TasklistComponent } from '../tasklist/tasklist.component';
import { ITask } from '../entities/task';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {
  @ViewChild('child') child!:TasklistComponent;

  url = 'https://62a0a59da9866630f8145222.mockapi.io/api/tasklist/'

  @ViewChild('f') taskform!: NgForm

  constructor(private httService: HttpClient) { }

  ngOnInit(): void {
  }

  addTask() {
    this.httService.post(this.url, this.child.task).subscribe(c => {
      this.child.getAllTask()
    }, error => {
      console.log(error.message);
    })
  }

  updateTask(){
    this.httService.put(this.url + this.child.task.taskId, this.child.task).subscribe(c => {
      this.child.getAllTask()
    })
  }
}
