import {ActionReducerMap} from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
  Products: reducers.ProductsState;
  ShoppingCart: reducers.ShoppingCartState;
  Bills: reducers.BillsSate;
  Report: reducers.ReportSatate;
  Users: reducers.UserState;
  User: null;
  ui: reducers.UiState;
}

export const appReducers: ActionReducerMap<AppState> = {
  Products: reducers.productsReducer,
  ShoppingCart: reducers.shoppingCartReducer,
  Bills: reducers.billsReducer,
  Report: reducers.reportReducer,
  Users: reducers.usersReducer,
  ui: reducers.uiReducers,
  User: null
};
