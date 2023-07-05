import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoItem } from '../models/todo';
import { TodoListService } from '../services/todo-list/todo-list.service';
import { of } from 'rxjs';

const mockTodoList: TodoItem[] = [
  { finished: false, description: 'Task 1' },
  { finished: true, description: 'Task 2' }
];

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoListServiceSpy: jasmine.SpyObj<TodoListService>;

  beforeEach(() => {
    todoListServiceSpy = jasmine.createSpyObj('TodoListService', ['getTodoList']);
    todoListServiceSpy.getTodoList.and.returnValue(of(mockTodoList));

    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent,
        TodoItemComponent
      ],
      providers: [
        { provide: TodoListService, useValue: todoListServiceSpy }
      ]
    });

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch todo list from TodoListService', async () => {
    expect(todoListServiceSpy.getTodoList).toHaveBeenCalled();
    component.todoList.subscribe(todoList =>
      expect(todoList).toEqual(mockTodoList)
    );
  })
});
