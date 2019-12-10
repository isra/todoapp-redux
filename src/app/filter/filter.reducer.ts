import { Store } from '@ngrx/store';
import * as fromFilterAction from './filter.actions';

const initialFiter: fromFilterAction.TypeFiltersAllowed = 'All';

export const filterReducer = (
         state = initialFiter,
         action: fromFilterAction.FilterActions
       ): fromFilterAction.TypeFiltersAllowed => {
         switch (action.type) {
           case fromFilterAction.FILTER_TYPE:
             return action.filter;
           default:
             return state;
         }
       };


