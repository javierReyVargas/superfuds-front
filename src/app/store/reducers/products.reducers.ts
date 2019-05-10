import {Product} from '../../models/Product';
import * as fromProducts from '../actions';

export interface ProductsState {
  products: Product[];
  productsHasTransactions: Product[];
  product: Product;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: ProductsState = {
  products: [],
  productsHasTransactions: [],
  product: null,
  loaded: false,
  loading: false,
  error: null
};

export function productsReducer(state = initialState, action: fromProducts.productsActions): ProductsState {

  switch (action.type) {
    case fromProducts.LOAD_PRODUCTS:
      return {
        ...state,
        loading: true,
      };

    case fromProducts.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        products: [
          ...action.products
        ]
      };

    case fromProducts.LOAD_PRODUCTS_FAIL:
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

    case fromProducts.LOAD_PRODUCTS_HAS_TRANSACTIONS:
      return {
        ...state,
        loading: true,
      };

    case fromProducts.LOAD_PRODUCTS_HAS_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        productsHasTransactions: [
          ...action.products
        ]
      };

    case fromProducts.LOAD_PRODUCTS_HAS_TRANSACTIONS_FAIL:
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

    case fromProducts.CREATE_PRODUCT:
      return {
        ...state,
        product: action.dataProduct,
        loading: true,
        loaded: false
      };

    case fromProducts.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
      };

    case fromProducts.CREATE_PRODUCT_FAILS:
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
