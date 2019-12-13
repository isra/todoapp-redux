import { Store } from '@ngrx/store';

import * as fromTodoActions from './todo.actions';
import { Todo } from './model/todo.model';

const todoState: Todo[] = [];

export function todoReducer(
         state = todoState,
         action: fromTodoActions.ActionsTodo
       ): Todo[] {
         switch (action.type) {
           case fromTodoActions.ADD:
             const todo = new Todo(action.payload);
             return [...state, todo];
           case fromTodoActions.UPDATE_TASK:
             // Searching task
             const taskItem = state.find(item => item.id === action.idTask);

             // update task and return
             return state.map((todoItem: Todo) => {
               if (todoItem.id === taskItem.id) {
                 return {
                   ...todoItem,
                   task: action.taskChanged
                 };
               } else {
                 return todoItem;
               }
             });
             break;
           case fromTodoActions.TOGGLE_COMPLETED:
             // update task and return
             return state.map((todoItem: Todo) => {
               if (todoItem.id === action.idTask) {
                 return {
                   ...todoItem,
                   completed: !todoItem.completed
                 };
               } else {
                 return todoItem;
               }
             });
           case fromTodoActions.DELETE_TASK:
             return state.filter((todoItem: Todo) => todoItem.id !== action.idTask);
           case fromTodoActions.DELETE_ALL_COMPLETED:
             return state.filter((todoItem: Todo) => !todoItem.completed);
           case fromTodoActions.TOGGLE_ALL:
             return state.map((todoItem: Todo) => {
               return {
                ...todoItem,
                completed: action.status
               };
             });
           default:
             return state;
         }
       }
