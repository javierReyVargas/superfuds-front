import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Product} from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string;

  constructor( private htt: HttpClient) {
    this.url = environment.API_URL;
  }

  public getProducts(): Observable<any> {
    return this.htt.get(this.url + 'products')
      .pipe(
        map( response => response['data'])
      );
  }

  public getProductsHasTransactions(): Observable<any> {
    return this.htt.get(this.url + 'productsHasTransactions')
      .pipe(
        map( response => response['data'])
      );
  }

  public saveProduct(data: Product): Observable<any> {
    return this.htt.post(this.url + 'provider/' + 1 + '/product', data)
      .pipe(
        map( response => response['data'])
      );
  }
}
