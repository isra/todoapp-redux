import { Action } from '@ngrx/store';

export type TypeFiltersAllowed = 'All' | 'Active' | 'Completed';

export const FILTER_TYPE = '[Filter] Filter Type';

export class FilterAction implements Action {
  readonly type = FILTER_TYPE;
  constructor(public filter: TypeFiltersAllowed) {  }
}

export type FilterActions = FilterAction;

