import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ShoppingCartService} from '../../services/shopping/shopping-cart.service';
import * as fromShoppingCartActions from '../actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class ShoppingCartEffects {

  constructor(private actions$: Actions,
              private shoppingService: ShoppingCartService) {
  }

  @Effect()
  saveProduct$ = this.actions$.pipe(
    ofType(fromShoppingCartActions.DO_BILL),

    switchMap((action) => {
      return this.shoppingService.saveBill( {arrProducts: action['product'], totalBill: action['valueTotalProducts']})
        .pipe(
          map(
            () => {
              return new fromShoppingCartActions.DoBillSuccess();
            }),
          catchError( error => of(new fromShoppingCartActions.DoBillFail(error)))
        );
    })
  );

  @Effect()
  saveProductSuccess$ = this.actions$.pipe(
    ofType(fromShoppingCartActions.DO_BILL_SUCCESS),
    switchMap(() => {
      return of(new fromShoppingCartActions.LoadProducts());
    })
  );

}
