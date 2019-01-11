import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoGeneratorService {

  _todoJsonLink = "https://jsonplaceholder.typicode.com/todos"

  constructor(private httpClient : HttpClient) { }

  fakeTodo(){
    return this.httpClient.get<any>(this._todoJsonLink)
  }
}
