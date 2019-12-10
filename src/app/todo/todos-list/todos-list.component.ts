import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private store: Store<AppState>) {
    this.store.select('todos').subscribe(todos => {
      this.todos = todos as Todo[];
    });
  }

  ngOnInit() {
  }

}
