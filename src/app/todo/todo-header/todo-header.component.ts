import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromTodoActions from '../todo.actions';
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styles: []
})
export class TodoHeaderComponent implements OnInit {
  frmTodos: FormControl;
  txtTodo: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.txtTodo = new FormControl('', Validators.required);
  }

  addTask() {
    if (this.txtTodo.invalid) {
      return;
    }

    const addAction = new fromTodoActions.AddAction(this.txtTodo.value);
    this.store.dispatch(addAction);
    this.txtTodo.setValue('');
  }
}
