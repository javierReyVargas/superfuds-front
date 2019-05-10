import * as fromUsers from '../actions';
import {User} from '../../models/User';
import {Client} from '../../models/Client';
import {Provider} from '../../models/Provider';

export interface UserState {
  users: User[];
  clients: Client[];
  provider: Provider[];
  user: User;
  loading: boolean;
  loaded: boolean;
  error: any;
}

const initialState: UserState = {
  clients: [],
  provider: [],
  users: [],
  user: null,
  loaded: false,
  loading: false,
  error: null
};

export function usersReducer(state = initialState, action: fromUsers.userActions): UserState {

  switch (action.type) {
    case fromUsers.LOAD_CLIENTS:
      return {
        ...state,
        loading: true
      };
    case fromUsers.LOAD_CLIENTS_SUCCESS:
      return {
        ...state,
        clients: action.clients,
        loading: false,
        loaded: true
      };
    case fromUsers.LOAD_CLIENTS_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        }
      };

    case fromUsers.LOGIN_CLIENTS:
      return {
        ...state,
        loading: true
      };
    case fromUsers.LOGIN_CLIENTS_SUCCESS:
      return {
        ...state,
        user: action.user,
        loading: false,
        loaded: true
      };
    case fromUsers.LOGIN_CLIENTS_SAVE_SUCCESS:
      return {
        ...state
      };
    case fromUsers.LOGIN_CLIENTS_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        }
      };

    case fromUsers.LOAD_PROVIDERS:
      return {
        ...state,
        loading: true
      };
    case fromUsers.LOAD_PROVIDERS_SUCCESS:
      return {
        ...state,
        provider: action.providers,
        loading: false,
        loaded: true
      };
    case fromUsers.LOAD_PROVIDERS_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        }
      };

    default:
      return state;
  }
}
