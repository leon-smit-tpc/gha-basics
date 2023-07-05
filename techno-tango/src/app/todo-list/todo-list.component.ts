import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../services/todo-list/todo-list.service';
import { Observable } from 'rxjs';
import { TodoItem } from './../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: Observable<TodoItem[]>;
  
  constructor(private todoListService: TodoListService) {
    this.todoList = this.todoListService.getTodoList();
  }

  ngOnInit(): void {
    this.todoList.subscribe(todos => {
      todos.forEach(todoItem => console.log(todoItem))
    })
  }
}
