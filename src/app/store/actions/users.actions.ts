import {Client} from '../../models/Client';
import {Provider} from '../../models/Provider';
import {User} from '../../models/User';


export const LOAD_CLIENTS = '[Load CLIENTS] load clients';
export const LOAD_CLIENTS_SUCCESS = '[Load CLIENTS] load clients success';
export const LOAD_CLIENTS_FAIL = '[Load CLIENTS] load clients fail';


export const LOGIN_CLIENTS = '[Load Login CLIENTS] load login clients';
export const LOGIN_CLIENTS_SUCCESS = '[Load Login CLIENTS] load login clients success';
export const LOGIN_CLIENTS_SAVE_SUCCESS = '[Load Login CLIENTS save] load login clients save success';
export const LOGIN_CLIENTS_FAIL = '[Load Login CLIENTS] load login clients fail';

export const LOGIN_CLIENTS_ME = '[Load Login CLIENTS me] load login clients me';

export const LOAD_PROVIDERS = '[Load providers] load providers';
export const LOAD_PROVIDERS_SUCCESS = '[Load providers] load providers success';
export const LOAD_PROVIDERS_FAIL = '[Load providers] load providers fail';


export class LoadClients {
  readonly type = LOAD_CLIENTS;
}

export class LoadClientsSuccess {
  readonly type = LOAD_CLIENTS_SUCCESS;

  constructor(public clients: Client[]) {
  }
}

export class LoadClientsFail {
  readonly type = LOAD_CLIENTS_FAIL;

  constructor(public payload: any) {
  }
}


export class LoginClients {
  readonly type = LOGIN_CLIENTS;

  constructor(public user: User) {
  }

}

export class LoginClientsSuccess {
  readonly type = LOGIN_CLIENTS_SUCCESS;

  constructor(public user: User) {
  }
}

export class LoginClientsMe {
  readonly type = LOGIN_CLIENTS_ME;

  constructor(public user: User) {
  }
}


export class LoginClientsSaveSuccess {
  readonly type = LOGIN_CLIENTS_SAVE_SUCCESS;
}

export class LoginClientsFail {
  readonly type = LOGIN_CLIENTS_FAIL;

  constructor(public payload: any) {
  }
}


export class LoadProvider {
  readonly type = LOAD_PROVIDERS;
}

export class LoadProviderSuccess {
  readonly type = LOAD_PROVIDERS_SUCCESS;

  constructor(public providers: Provider[]) {
  }
}

export class LoadProviderFail {
  readonly type = LOAD_PROVIDERS_FAIL;

  constructor(public payload: any) {
  }
}


export type userActions = LoadClients |
  LoadClientsSuccess |
  LoadClientsFail |
  LoadProvider |
  LoadProviderSuccess |
  LoginClients |
  LoginClientsSuccess |
  LoginClientsFail |
  LoadProviderFail |
  LoginClientsSaveSuccess |
  LoginClientsMe;



