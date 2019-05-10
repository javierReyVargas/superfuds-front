import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ReportService} from '../../services/report/report.service';

import * as fromReportActions from '../../store/actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class ReportEffects {

  constructor(private actions$: Actions,
              private reportService: ReportService) {
  }

  @Effect()
  getReport = this.actions$.pipe(
    ofType( fromReportActions.LOAD_REPORT),
    switchMap(
      (action) => {
        return this.reportService.getReport(action['typeReport'], action['idModel'])
          .pipe(
            map(
              (dataResponse) => {
                return new fromReportActions.LoadReportSuccess(dataResponse[0]['products'], dataResponse[0]['total']);
              },
              catchError( error => of(new fromReportActions.LoadReportFail(error)))
            )
          );
      }
    )
  );
}

















