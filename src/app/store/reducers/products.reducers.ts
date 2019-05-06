import {Product} from '../../models/Product';
import * as fromProducts from '../actions';

export interface ProductsState {
  products: Product[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: ProductsState = {
  products: [],
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
      return{
        ...state,
        loading: false,
        loaded: true,
        products: [
          ... action.products
        ]
      };

    case fromProducts.LOAD_PRODUCTS_FAIL:
      return {
        ... state,
        loaded: false,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }

}
