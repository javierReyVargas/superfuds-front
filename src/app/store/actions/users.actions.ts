import {Client} from '../../models/Client';
import {Provider} from '../../models/Provider';


export const LOAD_CLIENTS = '[Load CLIENTS] load clients';
export const LOAD_CLIENTS_SUCCESS = '[Load CLIENTS] load clients success';
export const LOAD_CLIENTS_FAIL = '[Load CLIENTS] load clients fail';

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
  LoadProviderFail;



