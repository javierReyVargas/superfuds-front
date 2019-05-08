import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public url: string;

  constructor( public http: HttpClient) {
    this.url = environment.API_URL;
  }

}
