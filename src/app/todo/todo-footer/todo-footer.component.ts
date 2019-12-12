import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as fromTodoActions from '../todo.actions';
import * as fromFilterActions from '../../filter/filter.actions';

import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  statusAll = false;
  totalTodos = 0;
  listStatus: fromFilterActions.TypeFiltersAllowed[] = [
    'All',
    'Completed',
    'Active'
  ];
  currentFilter: fromFilterActions.TypeFiltersAllowed;

  constructor(private store: Store<AppState>) {
    this.store.subscribe(filters => {
      this.currentFilter = filters.filter;
      this.totalTodos = this._todoLeft(filters.todos);
    });
  }

  ngOnInit() {}

  changeFilter(filter: fromFilterActions.TypeFiltersAllowed) {
    const filterAction = new fromFilterActions.FilterAction(filter);
    this.store.dispatch(filterAction);
  }

  clearCompleted() {
    const deleteAllCompleted = new fromTodoActions.DeleteAllCompleted();
    this.store.dispatch(deleteAllCompleted);
  }

  private _todoLeft(todos: Todo[]): number {
    return todos.filter(todo => !todo.completed).length;
  }

}
