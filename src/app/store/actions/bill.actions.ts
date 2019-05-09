import {Bill} from '../../models/Bill';


export const LOAD_BILLS = '[Load bills] load bills';
export const LOAD_BILLS_SUCCESS = '[Load bills] load bills success';
export const LOAD_BILLS_FAIL = '[Load bills] load bills fail';

export const DELETE_BILLS = '[Load bills] delete bills';
export const DELETE_BILLS_SUCCESS = '[Load bills] delete bills success';
export const DELETE_BILLS_FAIL = '[Load bills] delete bills fail';

export class LoadBills {
  readonly type = LOAD_BILLS;
}

export class LoadBillSuccess {
  readonly type = LOAD_BILLS_SUCCESS;

  constructor(public billData: Bill[]) {
  }
}

export class LoadBillFail {
  readonly type = LOAD_BILLS_FAIL;

  constructor(public payload: any) {
  }
}

export class DeleteBill {
  readonly type = DELETE_BILLS;

  constructor(public bill: Bill) {
  }
}

export class DeleteBillSuccess {
  readonly type = DELETE_BILLS_SUCCESS;
  constructor( public bill: Bill) {}
}

export class DeleteBillFail {
  readonly type = DELETE_BILLS_FAIL;

  constructor(public payload: any) {
  }
}

export type billsActions = LoadBills |
  LoadBillSuccess |
  LoadBillFail |
  DeleteBill |
  DeleteBillSuccess |
  DeleteBillFail ;

