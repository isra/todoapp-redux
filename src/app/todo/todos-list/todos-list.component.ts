import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';

import * as fromFilterActions from '../../filter/filter.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {
  todos: Todo[] = [];
  currentFilter: fromFilterActions.TypeFiltersAllowed;

  constructor(private store: Store<AppState>) {
    this.store.subscribe(filters => {
      this.todos = filters.todos as Todo[];
      this.currentFilter = filters.filter;
    });
  }

  ngOnInit() {}
}
