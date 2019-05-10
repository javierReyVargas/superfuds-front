import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  public url: string;

  constructor( public http: HttpClient) {
    this.url = environment.API_URL;
  }

  public getReport(typeReport: string, idModel: number): Observable<any> {
    return this.http.get( `${this.url}${typeReport}/${idModel}/report`)
      .pipe(
        map(
          report => {
            return report['data'];
          }
        )
      );
  }
}
