import {Action} from '@ngrx/store';
import {Product} from '../../models/Product';
import {User} from '../../models/User';


export const LOAD_PRODUCT_TO_CART = '[ShoppingCart] Load product';
export const DELETE_PRODUCT_TO_CART = '[ShoppingCart] Delete product';
export const DO_BILL = '[ShoppingCart] Do bill';
export const DO_BILL_SUCCESS = '[ShoppingCart] Do bill success';
export const DO_BILL_FAIL = '[ShoppingCart] Do bill fail';

export class LoadProductToCart implements Action {
  readonly type = LOAD_PRODUCT_TO_CART;
  constructor( public product: Product) {}
}

export class DeleteProductToCart implements Action {
  readonly type = DELETE_PRODUCT_TO_CART;
  constructor( public product: Product) {}
}

export class DoBill implements Action {
  readonly type = DO_BILL;
  constructor( public product: Product[], public valueTotalProducts: number, public user: User) {}
}

export class DoBillSuccess implements Action {
  readonly type = DO_BILL_SUCCESS;
  constructor() {}
}

export class DoBillFail implements Action {
  readonly type = DO_BILL_FAIL;
  constructor( public payload: any) {}
}


export type shoppingCartActions = LoadProductToCart |
  DeleteProductToCart |
  DoBill |
  DoBillSuccess |
  DoBillFail;


