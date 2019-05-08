import {Actions, Effect, ofType} from '@ngrx/effects';
import {ShoppingCartService} from '../../services/shopping/shopping-cart.service';
import * as fromShoppingCartActions from '../actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

export class ShoppingCartEffects {

  constructor(private actions$: Actions,
              private shoppingService: ShoppingCartService) {
  }

  @Effect({dispatch: false})
  saveProduct$ = this.actions$.pipe(
    ofType(fromShoppingCartActions.DO_BILL),

    switchMap((action) => {
      console.log(action);
      return this.shoppingService.saveBill(action)
        .pipe(
          map(
            () => {
              /*
              * TODO check save of success.
              * TODO dispatch actions and effects after save bills
              * */
              return new fromShoppingCartActions.DoBillSuccess();
            }),
          catchError( error => of(new fromShoppingCartActions.DoBillFail(error)))
        );
    })
  );

}
