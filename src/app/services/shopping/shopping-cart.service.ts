import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {User} from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public url: string;

  constructor( public http: HttpClient) {
    this.url = environment.API_URL;
  }

  public saveBill(arrProducts: object, user: User): Observable<any> {
    return this.http.post( `${this.url}client/${user.rol_id}/bill`, arrProducts);
  }
}
