import * as fromUi from '../actions';


export interface UiState {
  openMenu: boolean;
}

const initialState: UiState = {
  openMenu: true,
};

export function uiReducers(state = initialState, action: fromUi.UisActions): UiState {

  switch (action.type) {
    case fromUi.OPEN_CLOSE_MENU:
      return {
        ...state,
        openMenu: !state.openMenu
      };

    default:
      return state;
  }
}
