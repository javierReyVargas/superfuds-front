import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public url: string;

  constructor( public http: HttpClient) {
    this.url = environment.API_URL;
  }

  public saveBill(arrProducts: object): Observable<any> {
    return this.http.post( this.url + 'client/' + 1 + '/bill', arrProducts);
  }
}
