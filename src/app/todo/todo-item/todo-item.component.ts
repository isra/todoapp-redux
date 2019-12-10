import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

import * as fromTodoActions from '../todo.actions';

import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @ViewChild('txtTask', null) txtTask: ElementRef;
  @Input() todo: Todo;
  editing = false;

  chkTodo: FormControl;
  txtInputTask: FormControl;

  constructor(
    private store: Store<AppState>
  ) {

  }

  ngOnInit() {
    this.chkTodo = new FormControl(this.todo.completed);
    this.txtInputTask = new FormControl(this.todo.task, Validators.required);

    this.chkTodo.valueChanges.subscribe(value => {
      // this.todo.completed = value;
      const toggleAction = new fromTodoActions.ToggleCompleted(this.todo.id);
      this.store.dispatch(toggleAction);
    });
  }

  updateTask() {
    if (this.txtInputTask.invalid) {
      return;
    }

    if (this.txtInputTask.value === this.todo.task) {
      return;
    }

    const todoUptTask = new fromTodoActions.UpdateTask(this.todo.id, this.txtInputTask.value);
    this.store.dispatch(todoUptTask);
    this.editing = false;
  }

  deleteTask() {
    const deleteAction = new fromTodoActions.DeleteTask(this.todo.id);
    this.store.dispatch(deleteAction);
  }

  activeBox() {
    this.editing = true;
    setTimeout(() => {
      this.txtTask.nativeElement.select();
    }, 1);
  }

  closeBox() {
    this.editing = false;
    this.updateTask();
  }
}
