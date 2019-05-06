import {ActionReducerMap} from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
  Products: reducers.ProductsState;
  User: null;
  ui: null;
}

export const appReducers: ActionReducerMap<AppState> = {
  Products: reducers.productsReducer,
  ui: null,
  User: null
};
