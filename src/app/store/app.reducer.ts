import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  Products: null;
  User: null;
  ui: null;
}

export const appReducers: ActionReducerMap<AppState> = {
  Products: null,
  ui: null,
  User: null
};
