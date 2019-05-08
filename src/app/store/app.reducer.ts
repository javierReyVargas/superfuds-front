import {ActionReducerMap} from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
  Products: reducers.ProductsState;
  ShoppingCart: reducers.ShoppingCartState;
  User: null;
  ui: null;
}

export const appReducers: ActionReducerMap<AppState> = {
  Products: reducers.productsReducer,
  ShoppingCart: reducers.shoppingCartReducer,
  ui: null,
  User: null
};
