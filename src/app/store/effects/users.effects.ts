import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ReportService} from '../../services/report/report.service';

import * as fromUsersActions from '../../store/actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {UsersService} from '../../services/users/users.service';

@Injectable()
export class UsersEffects {

  constructor(private actions$: Actions,
              private usersService: UsersService) {
  }

  @Effect()
  getClients = this.actions$.pipe(
    ofType( fromUsersActions.LOAD_CLIENTS),
    switchMap(
      () => {
        return this.usersService.getClients()
          .pipe(
            map(
              ( clients ) => {
                return new fromUsersActions.LoadClientsSuccess( clients );
              },
              catchError( error => of(new fromUsersActions.LoadClientsFail( error )))
            )
          );
      }
    )
  );


  @Effect()
  getProviders = this.actions$.pipe(
    ofType( fromUsersActions.LOAD_PROVIDERS),
    switchMap(
      () => {
        return this.usersService.getProviders()
          .pipe(
            map(
              ( providers ) => {
                return new fromUsersActions.LoadProviderSuccess( providers );
              },
              catchError( error => of(new fromUsersActions.LoadProviderFail( error )))
            )
          );
      }
    )
  );
}

















