import {Action} from '@ngrx/store';
import {Product} from '../../models/Product';


export const LOAD_PRODUCTS = '[Products] Load products';
export const LOAD_PRODUCTS_FAIL = '[Products] Load products fail';
export const LOAD_PRODUCTS_SUCCESS = '[Products] Load products success';

export class LoadProducts implements Action {
  readonly type = LOAD_PRODUCTS;
}

export class LoadProductsFail implements Action {
  readonly type = LOAD_PRODUCTS_FAIL;

  constructor( public payload: any ) {}
}

export class LoadProductsSuccess implements Action {
  readonly type = LOAD_PRODUCTS_SUCCESS;

  constructor( public products: Product[] ) {}
}

export type productsActions = LoadProducts |
  LoadProductsFail |
  LoadProductsSuccess;

