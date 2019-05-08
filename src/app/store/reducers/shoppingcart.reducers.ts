import {Product} from '../../models/Product';
import * as fromShoppingCart from '../actions';
import {el} from '@angular/platform-browser/testing/src/browser_util';

export interface ShoppingCartState {
  products: Product[];
  loading: boolean;
  loaded: boolean;
  error: any;
}

const initialState: ShoppingCartState = {
  products: [],
  loading: false,
  loaded: false,
  error: null
};

export function shoppingCartReducer(state = initialState, action: fromShoppingCart.shoppingCartActions): ShoppingCartState {

  switch (action.type) {

    case fromShoppingCart.LOAD_PRODUCT_TO_CART:

      const resultProduct = state.products.filter(product => {
        return product.id === action.product.id;
      });

      if (resultProduct.length > 0) {
        return state;
      } else {
        return {
          ...state,
          products: [
            ...state.products,
            action.product
          ]
        };
      }
    case fromShoppingCart.DELETE_PRODUCT_TO_CART:
      const arrProducts = state.products.filter(product => {
        return product.id !== action.product.id;
      });
      return {
        ...state,
        products: [
          ...arrProducts
        ]
      };
    case fromShoppingCart.DO_BILL:
      return {
        ...state,
        loaded: false,
        loading: true,
        products: [
          ...action.product
        ]
      };
    case fromShoppingCart.DO_BILL_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        products: []
      };
    case fromShoppingCart.DO_BILL_FAIL:
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







