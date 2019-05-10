import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as billsActions from '../actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {BillService} from '../../services/bill/bill.service';


@Injectable()
export class BillsEffects {

  constructor(private actions$: Actions,
              private billService: BillService) {}

  @Effect()
  loadBills$ = this.actions$.pipe(
    ofType(billsActions.LOAD_BILLS),
    switchMap( () => {
      return this.billService.getBills()
        .pipe(
          map( bills => {
            return new billsActions.LoadBillSuccess(bills);
          }),
          catchError( error => of(new billsActions.LoadBillFail(error)))
        );
    })
  );

  @Effect()
  deleteBills$ = this.actions$.pipe(
    ofType(billsActions.DELETE_BILLS),
    switchMap( (action) => {
      return this.billService.deleteBills(action['bill'])
        .pipe(
          map( bill => {
            console.log('response api:: : ', bill);
            return new billsActions.DeleteBillSuccess(bill);
          }),
          catchError( error => of(new billsActions.DeleteBillFail(error)))
        );
    })
  );
}
