import { Action } from '@ngrx/store';
import { Todo } from './model/todo.model';

export const ADD = '[TODO_APP] Add';
export const TOGGLE_COMPLETED = '[TODO_APP] Toggle Complete';
export const UPDATE_TASK = '[TODO_APP] Update Task';
export const DELETE_TASK = '[TODO_APP] Delete Task';
export const TOGGLE_ALL = '[TODO_APP] Toggle all elements';

export class AddAction implements Action {
    readonly type = ADD;
    constructor(public payload: string) { }
}

export class ToggleCompleted implements Action {
    readonly type = TOGGLE_COMPLETED;
    constructor(public idTask: number) {}
}

export class UpdateTask implements Action {
    readonly type = UPDATE_TASK;
    constructor(public idTask: number, public taskChanged: string) {
        this.taskChanged =
          this.taskChanged.charAt(0).toUpperCase() + this.taskChanged.slice(1);
    }
}

export class DeleteTask implements Action {
    readonly type = DELETE_TASK;
    constructor(public idTask: number) {}
}

export class ToggleAll implements Action {
  readonly type = TOGGLE_ALL;
  constructor(public status: boolean) {}
}

export type ActionsTodo = AddAction | ToggleCompleted | UpdateTask | DeleteTask | ToggleAll;

