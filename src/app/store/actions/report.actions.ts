import {Report} from '../../models/Report';

export const LOAD_REPORT = '[Report] Load report';
export const LOAD_REPORT_SUCCESS = '[Report] Load report success';
export const LOAD_REPORT_FAIL = '[Report] Load report fail';


export class LoadReport {
  readonly type = LOAD_REPORT;

  constructor(public typeReport: string, public idModel: number) {
  }
}

export class LoadReportSuccess {
  readonly type = LOAD_REPORT_SUCCESS;

  constructor(public dataReport: Report[], public total: number) {
  }
}

export class LoadReportFail {
  readonly type = LOAD_REPORT_FAIL;

  constructor(public payload: any) {
  }

}

export type reportsActions = LoadReport |
  LoadReportSuccess |
  LoadReportFail;










