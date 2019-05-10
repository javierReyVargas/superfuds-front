import {Action} from '@ngrx/store';
import {Product} from '../../models/Product';


export const LOAD_PRODUCTS = '[Products] Load products';
export const LOAD_PRODUCTS_FAIL = '[Products] Load products fail';
export const LOAD_PRODUCTS_SUCCESS = '[Products] Load products success';


export const LOAD_PRODUCTS_HAS_TRANSACTIONS = '[Products] Load products has transactions';
export const LOAD_PRODUCTS_HAS_TRANSACTIONS_FAIL = '[Products] Load products has transactions fail';
export const LOAD_PRODUCTS_HAS_TRANSACTIONS_SUCCESS = '[Products] Load products has transactions success';

export const CREATE_PRODUCT = '[Products] create product';
export const CREATE_PRODUCT_SUCCESS = '[Products] create product success';
export const CREATE_PRODUCT_FAILS = '[Products] create product fail';

export class LoadProducts implements Action {
  readonly type = LOAD_PRODUCTS;
}

export class LoadProductsFail implements Action {
  readonly type = LOAD_PRODUCTS_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadProductsSuccess implements Action {
  readonly type = LOAD_PRODUCTS_SUCCESS;

  constructor(public products: Product[]) {
  }
}

export class LoadProductsHasTransactions implements Action {
  readonly type = LOAD_PRODUCTS_HAS_TRANSACTIONS;
}

export class LoadProductsHasTransactionsFail implements Action {
  readonly type = LOAD_PRODUCTS_HAS_TRANSACTIONS_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadProductsHasTransactionsSuccess implements Action {
  readonly type = LOAD_PRODUCTS_HAS_TRANSACTIONS_SUCCESS;

  constructor(public products: Product[]) {
  }
}

export class CreateProduct implements Action {
  readonly type = CREATE_PRODUCT;

  constructor(public dataProduct: Product) {
  }
}

export class CreateProductSuccess implements Action {
  readonly type = CREATE_PRODUCT_SUCCESS;
}

export class CreateProductFail implements Action {
  readonly type = CREATE_PRODUCT_FAILS;

  constructor(public payload: any) {
  }

}

export type productsActions = LoadProducts |
  LoadProductsFail |
  LoadProductsSuccess |
  CreateProduct |
  CreateProductSuccess |
  CreateProductFail |
  LoadProductsHasTransactions |
  LoadProductsHasTransactionsFail |
  LoadProductsHasTransactionsSuccess;

