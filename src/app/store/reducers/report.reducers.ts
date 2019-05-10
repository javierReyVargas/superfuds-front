import * as fromReport from '../actions';
import {Report} from '../../models/Report';
import {from} from 'rxjs';


export interface ReportSatate {
  report: Report[];
  total: number;
  typeReport: string;
  modelId: number;
  loading: boolean;
  loaded: boolean;
  error: any;
}


const initialState: ReportSatate = {
  report: [],
  total: 0,
  typeReport: '',
  modelId: null,
  loaded: false,
  loading: false,
  error: null
};

export function reportReducer(state = initialState, action: fromReport.reportsActions): ReportSatate {

  switch (action.type) {

    case fromReport.LOAD_REPORT:
      return {
        ...state,
        modelId: action.idModel,
        typeReport: action.typeReport,
        loading: true
      };

    case fromReport.LOAD_REPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        report: action.dataReport,
        total: action.total
      };

    case fromReport.LOAD_REPORT_FAIL:
      return {
        ...state,
        loaded: true,
        loading: false,
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


















