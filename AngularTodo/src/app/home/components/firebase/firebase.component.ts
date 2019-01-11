import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
export interface Todo {
  "userId": number,
  "id": number,
  "title": String,
  "completed": Boolean
}
@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {


  fetched : Boolean = false;
  todo:any; 

  constructor(private db : AngularFireDatabase) { }

  ngOnInit() {
    this.db.list('acm').valueChanges().subscribe(res=>{
      this.todo = res;
      console.log(res)
      this.fetched= true;
    })
  }

}
