import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';

import { TypeFiltersAllowed } from './filter/filter.actions';

import * as fromTodosReducer from './todo/todo.reducer';
import * as fromFilterReducer from './filter/filter.reducer';

export interface AppState {
    todos: Todo[];
    filter: TypeFiltersAllowed;
}

export const AppReducers: ActionReducerMap<AppState> = {
    todos: fromTodosReducer.todoReducer,
    filter: fromFilterReducer.filterReducer
};

