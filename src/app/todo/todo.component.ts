import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import * as fromTodoActions from '../todo/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  statusAll = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  toggleAll() {
    this.statusAll = !this.statusAll;
    const toggleAction = new fromTodoActions.ToggleAll(this.statusAll);
    this.store.dispatch(toggleAction);
  }
}
