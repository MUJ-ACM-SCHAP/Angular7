import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
export interface Todo {
  "userId": number,
  "id": number,
  "title": String,
  "completed": Boolean
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  todo_list:Todo={
    userId: 1,
    id: 1,
    title:'',
    completed:false
  };
  hey: String;
  constructor(private db: AngularFireDatabase) { 
    this.todo_list={
      userId: 1,
      id: 1,
      title:'asjkfhasjhaskjfhajkhfajkshfjkashfjkashfjkhasjkfhasjkhfasjhfasjkfhasjkhfajkhfasjkhfjakhfjashfjah',
      completed:false
    };
  }

  ngOnInit() {
    this.hey = "hey"
  }

  toggle(){
    this.todo_list.completed = !this.todo_list.completed
  }

  submit(){
    this.db.list('acm').push(this.todo_list)
  }
}
