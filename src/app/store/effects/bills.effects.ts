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
  loadProducts$ = this.actions$.pipe(
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
}
