import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from '../todo/model/todo.model';

import * as fromFilterActions from './filter.actions';

@Pipe({
  name: 'filterTodos'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: fromFilterActions.TypeFiltersAllowed): Todo[] {
    switch (filter) {
      case 'Completed':
        return todos.filter(todo => todo.completed);
      case 'Active':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }

}
