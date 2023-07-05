import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from 'src/app/models/todo';
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todoList: Observable<TodoItem[]>

  constructor() {
    this.todoList = of([
      { finished: false, description: "Buy groceries" },
      { finished: true, description: "Walk the dog" },
      { finished: false, description: "Clean the house" },
      { finished: false, description: "Finish coding project" },
      { finished: true, description: "Read a book" },
      { finished: false, description: "Call a friend" },
      { finished: true, description: "Go for a run" },
      { finished: false, description: "Attend a meeting" },
      { finished: true, description: "Pay bills" },
      { finished: false, description: "Start a new hobby" },
    ]);
  }

  getTodoList = (): Observable<TodoItem[]> => this.todoList;
}
