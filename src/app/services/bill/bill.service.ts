import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Bill} from '../../models/Bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private url: string;

  constructor(private htt: HttpClient) {
    this.url = environment.API_URL;
  }

  public getBills(): Observable<any> {
    return this.htt.get(this.url + 'bills')
      .pipe(
        map( response => response['data'])
      );
  }

  public deleteBills(bill: Bill): Observable<any> {
    return this.htt.delete(` ${ this.url }bills/${ bill.id }` )
      .pipe(
        map( response => response['data'])
      );
  }
}
