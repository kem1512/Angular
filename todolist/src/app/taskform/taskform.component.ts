import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TasklistComponent } from '../tasklist/tasklist.component';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {
  @ViewChild('child') child!:TasklistComponent;

  constructor(private httService: HttpClient) { }

  ngOnInit(): void {
  }

  addTask() {
    this.httService.post(this.child.url, this.child.task).subscribe(c => {
      this.child.getAllTask()
    }, error => {
      console.log(error.message);
    })
  }

  updateTask(){
    this.httService.put(this.child.url + this.child.task.taskId, this.child.task).subscribe(c => {
      this.child.getAllTask()
    })
  }
}
