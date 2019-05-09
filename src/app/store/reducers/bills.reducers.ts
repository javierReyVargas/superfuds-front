import {Bill} from '../../models/Bill';
import * as fromBill from '../actions';
import {from} from 'rxjs';

export interface BillsSate {
  bills: Bill[];
  loading: boolean;
  loaded: boolean;
  error: any;
}

const initialState: BillsSate = {
  bills: [],
  loaded: false,
  loading: false,
  error: null
};

export function billsReducer(state = initialState, action: fromBill.billsActions): BillsSate {

  switch (action.type) {
    case fromBill.LOAD_BILLS:
      return {
        ...state,
        loading: true
      };
    case fromBill.LOAD_BILLS_SUCCESS:
      return {
        ...state,
        bills: action.billData,
        loading: false,
        loaded: true
      };
    case fromBill.LOAD_BILLS_FAIL:
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

    case fromBill.DELETE_BILLS:
      return{
        ...state,
        loading: true
      };
    case fromBill.DELETE_BILLS_SUCCESS:
      const arrBills = state.bills.filter( bill => bill.id !== action.bill.id);
      return {
        ...state,
        bills: [
          ...arrBills
        ],
        loading: false,
        loaded: true
      };
    case fromBill.DELETE_BILLS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
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
