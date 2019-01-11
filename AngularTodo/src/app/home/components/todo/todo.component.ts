import { Component, OnInit } from '@angular/core';
import {TodoGeneratorService} from '../../../todo-generator.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  fetched : Boolean = false;
  todo : any; 

  constructor(private _todoGenerator: TodoGeneratorService) { }

  ngOnInit() {
    this._todoGenerator.fakeTodo().subscribe(res=>{
      this.todo = res;
      console.log(this.todo)
      this.fetched = true;
  }, err=>{
      console.log(err)
  })
  }

}
